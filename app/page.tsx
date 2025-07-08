// import { getEvent } from "@/api/getEvent";
// import { getEvents } from "@/api/getEvents";
import { H2 } from "../components/Typography/H2";
import { Mono } from "../components/Typography/Mono";

export default async function HomePage() {
  // const events = await getEvents();
  // const event = await getEvent("nonexistent-id");

  return (
    <div>
      <h1 className="h1">Welcome to the Home Page</h1>
      <H2 children="heree" />
      <Mono children="momnooooo" />
      <p className="font-nhg-text italic">
        This is the main entry point of the application.
      </p>
      <pre className="font-diatype overflow-scroll">
        {/* {JSON.stringify(events, null, 2)} */}
      </pre>
      <pre className="font-diatype overflow-scroll">
        {/* {JSON.stringify(event, null, 2)} */}
      </pre>
    </div>
  );
}
