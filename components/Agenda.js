import { getAgendaEvents } from "../lib/endpoints/server";
import AgendaPart from "./AgendaPart";

export default async function Agenda() {
  const events = await getAgendaEvents();

  return (
    <section className="w-full h-auto flex flex-col gap-12 md:gap-20 bg-black pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 relative z-0 -mt-16">
      <h1 className="w-full text-center text-[#51b957] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
        AGENDA
      </h1>
      {events.length > 0 ? (
        <div className="bg-[#51b957] rounded-2xl h-auto p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col gap-6 md:gap-10">
          {events.map((event) => (
            <AgendaPart key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <span className="w-full h-14 text-center justify-center text-[#51b957] text-2xl md:text-4xl font-normal p-16 lg:p-32">
          Uskoro...
        </span>
      )}
    </section>
  );
}
