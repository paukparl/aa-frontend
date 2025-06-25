import 'server-only';
import { fetchData, StrapiError } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

// TODO: Maybe move return null logic into fetchData?
export async function getEvent(id: string) {
  try {
    const data = schemas.getEventRes.parse(
      await fetchData(`/aa-events/${id}`,
        {
          populate: ['image'],
        }
      )
    );
    return data;
  } catch (error) {
    if (error instanceof StrapiError) {
      if (error.name === 'NOT_FOUND') return null;
    }
  }
}
