import { fetchData } from "@/lib/api";
import { PaginatedEventResponse } from "@/lib/schemas";

export default async function HomePage() {
  const { data, meta: _meta } = await fetchData<PaginatedEventResponse>("/aa-events")
  

  return (
    <div>
      <h1 className="h1">Welcome to the Home Page</h1>
      <p className="body">This is the main entry point of the application.</p>
      <pre className="mono">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
