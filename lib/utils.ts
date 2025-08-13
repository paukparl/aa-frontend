import { Schema } from "@/lib/schemas";

export const formatLocationText = (
  online: boolean | null | undefined,
  locations: Schema<"dtaLocation">[] | undefined,
) => {
  return `${online === true ? `Online` : ``}${online && locations?.length ? ` / ` : ``}${locations
    ?.map((location) => `${location.city}, ${location.country}`)
    .join(" / ")}`;
};
