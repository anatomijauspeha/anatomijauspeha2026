export default function AgendaPart({event}) {
  return (
    <div className="w-full px-6 md:px-12 bg-transparent border-b-2 border-white flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-16 py-6">
      <span className="text-white text-lg sm:text-xl md:text-3xl font-semibold">
        {event.from} - {event.to}
      </span>

      <span className="text-white text-sm sm:text-base md:text-2xl text-left md:text-right">
        {event.title}
      </span>
    </div>
  );
}
