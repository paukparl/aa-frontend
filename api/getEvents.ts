import "server-only";
import { StrapiError, StrapiFetchOptions, fetchData } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getEvents(
  options: Pick<StrapiFetchOptions, "pagination" | "filters"> = {},
) {
  try {
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
  } catch (error) {
    if (error instanceof StrapiError) {
      console.error(
        "<-- If this error still shows, there could be an issue with the Strapi API.",
      );
      console.error(error);
    }
  }
}
