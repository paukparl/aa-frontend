import { draftMode } from "next/headers";
import qs from "qs";
import serverEnv from "@/lib/serverEnv";

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
type PopulateClause = string | string[] | {
  [key: string]: string | string[] | StrapiOptions
}

/*
  Read more about Strapi's filter syntax here:
  https://docs.strapi.io/cms/api/rest/filters
*/
type FilterClause = {
  [key: string]: {
    $eq?: any;
    $ne?: any;
    $gt?: any;
    $gte?: any;
    $lt?: any;
    $lte?: any;
    $in?: any[];
    $nin?: any[];
    $contains?: string;
    $ncontains?: string;
    $null?: boolean;
  };
}

type StrapiOptions = {
  sort?: Record<string, "asc" | "desc"> | string;
  fields?: string[] | string;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  populate?: PopulateClause;
  filters?: FilterClause;
}

/*
  Just in case the back-end's controller supports some custom parameters
*/
type FetchDataOptions = StrapiOptions & {
  headers?: Record<string, string>;
  [key: string]: any;
};

export async function fetchData<T>(
  path: string,
  options: FetchDataOptions = {}
): Promise<T> {
  const { isEnabled: draftModeEnabled } = await draftMode();

  try {
    const safePath = path.replace(/^\/|\/$|\?$/g, "");
    const { headers, ...params } = options;

    const queryString = qs.stringify({
      ...params,
      ...(draftModeEnabled ? { status: "draft" } : {})
    }
  );

    // Construct the full URL for the API request
    const endpoint = new URL(
      `api/${safePath}?${queryString}`,
      serverEnv.BACKEND_API_URL
    );

    // Perform the fetch request with the provided query parameters
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${serverEnv.BACKEND_API_TOKEN}`,
        "Content-Type": "application/json",
        ...headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Strapi fetch failed: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(
      `Failed to fetch data from ${path}: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
