"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();

  const navigateToForm = () => {
    router.push("/registracija");
  };

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center gap-12 mb-2 md:mb-8 py-24 px-6 md:px-16 lg:px-24 justify-around">
      <div className="flex flex-row w-full items-center justify-between gap-4 px-4 md:px-16">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[40%] object-contain"
        />

        <Image
          src="/AU_logo1.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[40%] object-contain"
        />
      </div>

      <h2 className="text-center tracking-widest text-[#51b957] text-xl md:text-2xl lg:text-3xl">
        22. maj, 18:00h | Naučno-tehnološki park, Novi Sad
      </h2>

      <button
        onClick={navigateToForm}
        className="w-60 md:w-72 h-12 bg-[#51b957] cursor-pointer text-lg md:text-xl tracking-wide text-white rounded-2xl flex items-center justify-center hover:bg-[#3b913f] transition"
      >
        PRIJAVI SE
      </button>
    </div>
  );
}
