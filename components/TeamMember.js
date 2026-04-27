import Image from "next/image";

export default function TeamMember({member}) {
  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-2xl overflow-hidden">
      <Image
        src={member.img ? member.img : "/person.svg"}
        alt="Team member image"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] bg-[#51b957] rounded-2xl p-2 sm:p-4 text-center shadow-lg">
        <h3 className="text-white text-lg sm:text-lg md:text-xl font-bold tracking-wide">
          {member.firstname} {member.lastname}
        </h3>

        <p className="text-white/90 mt-1 sm:mt-2 text-sm md:text-base">
          {member.function}
        </p>
      </div>
    </div>
  );
}
