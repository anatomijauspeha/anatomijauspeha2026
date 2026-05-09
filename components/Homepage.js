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
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-8 px-4 md:px-16">
        <div className="w-full md:w-[45%]">
          <Image
            src="/AI_1.png"
            alt="train your brain"
            width={800}
            height={800}
            className="w-full h-auto object-contain rounded-3xl shadow-lg"
          />
        </div>

        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            src="/AU_logo1.png"
            alt="logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain rounded-3xl shadow-lg"
          />
        </div>
      </div>
      {/* <button
        onClick={navigateToForm}
        className="w-60 md:w-72 h-12 bg-[#51b957] cursor-pointer text-lg md:text-xl tracking-wide text-white rounded-2xl flex items-center justify-center hover:bg-[#3b913f] transition"
      >
        PRIJAVI SE
      </button> */}
    </div>
  );
}
