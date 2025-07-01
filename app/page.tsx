import { getEvent } from "@/api/getEvent";
import { getEvents } from "@/api/getEvents";

// import { notFound } from "next/navigation";

export default async function HomePage() {
  const events = await getEvents();
  const event = await getEvent("0ti9pv2j81biuysjih7v7ilx1");

  // if (!event) notFound()

  return (
    <div>
      <h1 className="font-nhgdisplay font-medium">Welcome to the Home Page</h1>
      <p className="font-nhgtext italic">
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
