import "server-only";
import { StrapiFetchOptions, fetchData } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getEvents(
  options: Pick<StrapiFetchOptions, "pagination" | "filters"> = {},
) {
  const {
    data: events,
    meta: { pagination },
  } = schemas.getEventsData.parse(
    await fetchData("/events", {
      populate: ["image"],
      ...options,
    }),
  );
  return { events, pagination };
}
