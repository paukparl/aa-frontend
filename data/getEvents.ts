import 'server-only';
import { fetchData } from "@/lib/fetchData";
import { schemas } from "@/lib/schemas";

export async function getEvents() {
  const {data: events, meta: {pagination}} = schemas.getEventsRes.parse(
    await fetchData("/aa-events", 
      {
        populate: ['image'],
        pagination: {
          page: 1,
          pageSize: 10,
        },
      }
    )
  );
  return { events, pagination }
}
