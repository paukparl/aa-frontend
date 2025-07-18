type SearchParamsObj = Record<
  string,
  undefined | null | number | string | Array<string | number>
>;

export function parseUrlSearchParams(object: SearchParamsObj) {
  // If searchParams property is not read,
  // pages might be statically generated and not respond to searchParams changes.
  const { _ } = object;
  const urlSearchParams = new URLSearchParams();
  Object.entries(object).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        if (isValidValue(val)) urlSearchParams.append(key, `${val}`);
      });
    } else {
      if (isValidValue(value)) {
        urlSearchParams.append(key, `${value}`);
      }
    }
  });
  return urlSearchParams;
}

export function composeUrl({
  baseUrl,
  path,
  params,
  hash,
}: {
  baseUrl?: string;
  path: string;
  params?: SearchParamsObj | URLSearchParams;
  hash?: string;
}) {
  const searchParams = params
    ? params instanceof URLSearchParams
      ? params
      : parseUrlSearchParams(params)
    : undefined;
  const url = `${baseUrl ? baseUrl.replace(/\/$/, "") : ""}${path.replace(/^(?!\/)/, "/")}${searchParams ? (searchParams.toString().length >= 3 ? `?${searchParams}` : "") : ""}${hash ? `#${hash}` : ""}`;
  return url;
}

function isValidValue(
  value: undefined | null | number | string,
): value is string | number {
  if (value == null) return false;
  if (typeof value === "number" && isNaN(value)) return false;
  if (typeof value === "string" && !value) return false;
  return true;
}

export function addSearchParamsEntries(
  base: URLSearchParams | SearchParamsObj,
  modifier: URLSearchParams | SearchParamsObj,
  mode: "overwrite" | "appendUnique" | "append" = "overwrite",
) {
  const urlSearchParams =
    base instanceof URLSearchParams
      ? new URLSearchParams(base)
      : parseUrlSearchParams(base);
  modifier =
    modifier instanceof URLSearchParams
      ? modifier
      : parseUrlSearchParams(modifier);
  if (mode === "overwrite") {
    modifier.forEach((value, key) => {
      urlSearchParams.delete(key);
    });
    modifier.forEach((value, key) => {
      urlSearchParams.append(key, value);
    });
  } else if (mode === "appendUnique") {
    modifier.forEach((value, key) => {
      if (!urlSearchParams.getAll(key).includes(value))
        urlSearchParams.append(key, value);
    });
  } else if (mode === "append") {
    modifier.forEach((value, key) => {
      urlSearchParams.append(key, value);
    });
  }
  return urlSearchParams;
}

export function removeSearchParamsEntriesByKey(
  base: URLSearchParams | SearchParamsObj,
  key: string | string[],
) {
  const urlSearchParams =
    base instanceof URLSearchParams
      ? new URLSearchParams(base)
      : parseUrlSearchParams(base);
  if (typeof key === "string") {
    urlSearchParams.delete(key);
  } else {
    key.forEach((key) => {
      urlSearchParams.delete(key);
    });
  }
  return urlSearchParams;
}

export function removeSearchParamsEntries(
  base: URLSearchParams | SearchParamsObj,
  modifier: URLSearchParams | SearchParamsObj,
) {
  const urlSearchParams =
    base instanceof URLSearchParams
      ? new URLSearchParams(base)
      : parseUrlSearchParams(base);
  modifier =
    modifier instanceof URLSearchParams
      ? modifier
      : parseUrlSearchParams(modifier);
  modifier.forEach((value, key) => {
    const filtered = urlSearchParams.getAll(key).filter((val) => val != value);
    urlSearchParams.delete(key);
    filtered.forEach((val) => {
      urlSearchParams.append(key, val);
    });
  });
  return urlSearchParams;
}
