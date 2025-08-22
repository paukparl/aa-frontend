import { createFetchOptions } from "@/lib/fetchData";

export const eventFetchOptions = createFetchOptions({
  populate: { image: true },
});
