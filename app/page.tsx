// import { getEvent } from "@/api/getEvent";
// import { getEvents } from "@/api/getEvents";
import { H1 } from "@/components/Typography/H1";

export default async function HomePage() {
  // const events = await getEvents();
  // const event = await getEvent("nonexistent-id");

  return (
    <div>
      <H1>Welcome to the Home Page</H1>
      <pre className="font-diatype overflow-scroll">
        {/* {JSON.stringify(events, null, 2)} */}
      </pre>
      <pre className="font-diatype overflow-scroll">
        {/* {JSON.stringify(event, null, 2)} */}
      </pre>
    </div>
  );
}
