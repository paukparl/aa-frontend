import { fetchData } from "@/lib/api";
import { cn } from "@/lib/cn";
import { PaginatedEventResponse } from "@/lib/schemas";

export default async function HomePage() {
  const { data, meta } = await fetchData<PaginatedEventResponse>("/aa-events")
  

  return (
    <div>
      <h1 className="font-nhgdisplay font-medium">Welcome to the Home Page</h1>
      <p className="font-nhgtext italic">This is the main entry point of the application.</p>
      <pre className={cn("font-diatype overflow-scroll")}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
