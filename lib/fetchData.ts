import { draftMode } from "next/headers";
import qs from "qs";
import { z } from "zod/v4";
import { Schema, schemas } from "@/lib/schemas";

/*
  This is a utility function to fetch data from a Strapi backend.
  It constructs a URL using the parameters that Strapi supports,
  such as sorting, filtering, pagination, and population of related fields.

  Please read Strapi's documentation for more details on how to use these parameters:
  https://docs.strapi.io/cms/api/rest/parameters
*/

/*
  The `populate` clause is used to specify which related fields to include in the response.
  It is useful for including nested content, such as images or associations.
  Read more about Strapi's populate syntax here:
  https://docs.strapi.io/cms/api/rest/populate-select
*/
type PopulateClause =
  | string
  | string[]
  | {
      [key: string]:
        | string
        | string[]
        | StrapiFetchOptions
        | { on: { [key: string]: StrapiFetchOptions } };
    };

/*
  Read more about Strapi's filter syntax here:
  https://docs.strapi.io/cms/api/rest/filters
*/
type FilterClause =
  | {
      $or?: FilterClause[];
      $and?: FilterClause[];
    }
  | {
      [key: string]: {
        $eq?: unknown;
        $ne?: unknown;
        $gt?: unknown;
        $gte?: unknown;
        $lt?: unknown;
        $lte?: unknown;
        $in?: unknown[];
        $nin?: unknown[];
        $contains?: string;
        $ncontains?: string;
        $null?: boolean;
      };
    };

type StrapiFetchOptions = {
  sort?: Record<string, "asc" | "desc"> | string;
  fields?: string[] | string;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  populate?: PopulateClause;
  filters?: FilterClause;
  status?: "draft" | "published";
  // Just in case the back-end's controller supports some custom parameters
  [key: string]: unknown;
};

export function createFetchOptions<
  T extends Pick<StrapiFetchOptions, "fields" | "populate">,
>(fieldsAndPopulate: T): T {
  return fieldsAndPopulate;
}

export type StrapiFetchManyOptions = StrapiFetchOptions;
export type StrapiFetchOneOptions = Pick<
  StrapiFetchOptions,
  "fields" | "populate" | "filters" | "status"
>;

type FetchConfig = {
  headers?: Record<string, string>;
  next?: NextFetchRequestConfig;
};

type FetchDataOptions = StrapiFetchOptions & FetchConfig;
type FetchManyOptions = StrapiFetchManyOptions & FetchConfig;
type FetchOneOptions = StrapiFetchOneOptions & FetchConfig;

export class StrapiError extends Error {
  constructor(
    public type: "NOT_FOUND" | "UNKNOWN_ERROR",
    message?: string,
  ) {
    super(message);
    this.name = "StrapiError";
  }
}

async function fetchData(path: string, options: FetchDataOptions = {}) {
  const { isEnabled: draftModeEnabled } = await draftMode();

  const safePath = path.replace(/^\/|\/$|\?$/g, "");
  const { headers, next, ...params } = options;

  const queryString = qs.stringify({
    ...params,
    ...(draftModeEnabled ? { status: "draft" } : {}),
  });

  // Construct the full URL for the API request
  const endpoint = new URL(
    `api/${safePath}?${queryString}`,
    process.env.BACKEND_API_URL,
  );

  // Perform the fetch request with the provided query parameters
  return fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`,
      "Content-Type": "application/json",
      ...headers,
    },
    next,
  });
}

type GetOneRes<T extends z.ZodObject> = {
  data: z.infer<T>;
};

type GetManyRes<T extends z.ZodObject> = {
  data: z.infer<T>[];
  meta: { pagination: Schema<"pagination"> };
};

// Handles "Not Found" by returning {data: null} and takes fewer strapi fetch options than fetchMany
export async function fetchOne<T extends z.ZodObject>({
  path,
  schema,
  options,
}: {
  path: string;
  schema: T;
  options: FetchOneOptions;
}) {
  const response = await fetchData(path, options);
  if (!response.ok) {
    // Return null if not found
    if (response.statusText === "Not Found") return null;
    throw new StrapiError("UNKNOWN_ERROR", response.statusText);
  }
  const { data } = schemas
    .getOneRes(schema)
    .parse(await response.json()) as unknown as GetOneRes<T>; // TS fails to infer this deep
  return data;
}

export async function fetchOneBySlug<T extends z.ZodObject>({
  path,
  slug,
  schema,
  options,
}: {
  path: string;
  slug: string;
  schema: T;
  options: FetchOneOptions;
}) {
  const response = await fetchData(path, {
    filters: { slug: { $eq: slug } },
    ...options,
  });
  if (!response.ok) {
    throw new StrapiError("UNKNOWN_ERROR", response.statusText);
  }
  const { data } = schemas
    .getManyRes(schema)
    .parse(await response.json()) as unknown as GetManyRes<T>; // TS fails to infer this deep
  return data[0] ?? null;
}

export async function fetchMany<T extends z.ZodObject>({
  path,
  schema,
  options,
}: {
  path: string;
  schema: T;
  options: FetchManyOptions;
}) {
  const response = await fetchData(path, options);
  if (!response.ok) {
    throw new StrapiError("UNKNOWN_ERROR", response.statusText);
  }
  const res = schemas
    .getManyRes(schema)
    .parse(await response.json()) as unknown as GetManyRes<T>; // TS fails to infer this deep
  return res;
}
