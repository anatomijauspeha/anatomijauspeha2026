import Image from "next/image";

export default function TeamMember({ member }) {
  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-none mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-black flex items-end justify-center">
      <Image
        src={member.img ? member.img : "/person.svg"}
        alt="Team member image"
        fill
        unoptimized
        className="object-contain object-bottom"
      />
      {console.log("Img:", member.img)}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#51b957] rounded-xl sm:rounded-2xl p-2 sm:p-4 text-center shadow-lg">
        <h3 className="text-white text-sm sm:text-lg md:text-xl font-bold tracking-wide">
          {member.firstname} {member.lastname}
        </h3>

        <p className="text-white/90 mt-1 text-xs sm:text-sm md:text-base">
          {member.function}
        </p>
      </div>
    </div>
  );
}
