import { getAgendaEvents } from "../lib/endpoints/server";
import AgendaPart from "./AgendaPart";

export default async function Agenda() {
  const events = await getAgendaEvents();

  return (
    <section className="w-full h-auto flex flex-col gap-12 md:gap-20 bg-black pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 relative z-0 -mt-16">
      <h1 className="w-full text-center text-[#51b957] text-4xl md:text-6xl lg:text-7xl font-bold pb-8 md:pb-16">
        AGENDA
      </h1>
      <img className="object-cover" src="/agenda2.png"/>
    </section>
  );
}
