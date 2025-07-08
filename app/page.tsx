import { getEvent } from "@/api/getEvent";
import { getEvents } from "@/api/getEvents";

export default async function HomePage() {
  const events = await getEvents();
  const event = await getEvent("nonexistent-id");

  return (
    <div>
      <h1 className="font-nhg-display font-medium">Welcome to the Home Page</h1>
      <p className="font-nhg-text italic">
        This is the main entry point of the application.
      </p>
      <pre className="font-diatype overflow-scroll">
        {JSON.stringify(events, null, 2)}
      </pre>
      <pre className="font-diatype overflow-scroll">
        {JSON.stringify(event, null, 2)}
      </pre>
    </div>
  );
}
