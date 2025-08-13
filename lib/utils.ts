import { Schema } from "@/lib/schemas";

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const formatNumber = (
  number: number,
  locale: string = "en-US",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
};

export const formatLocationText = (
  online: boolean | null | undefined,
  locations: Schema<"dtaLocation">[] | undefined,
) => {
  return `${online === true ? `Online` : ``}${online && locations?.length ? ` / ` : ``}${locations
    ?.map((location) => `${location.city}, ${location.country}`)
    .join(" / ")}`;
};
