"use client";

import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState([35, 10, 5, 45]);
  return (
    <div className="w-[80%] bg-[#51b957] rounded-2xl flex justify-between items-center px-6 md:px-24 py-4 md:py-8 shadow-2xl shadow-[#51b957]/30 backdrop-blur-md">
      <div className="flex flex-col gap-2">
        <span className="text-center justify-center text-white text-2xl lg:text-5xl">
          {time[0]}
        </span>
        <span className="text-center justify-center text-white text-base lg:text-2xl font-text">
          Dana
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-center justify-center text-white text-2xl lg:text-5xl">
          {time[1]}
        </span>
        <span className="text-center justify-center text-white text-base lg:text-2xl font-text">
          Sata
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-center justify-center text-white text-2xl lg:text-5xl">
          {time[2]}
        </span>
        <span className="text-center justify-center text-white text-base lg:text-2xl font-text">
          Minuta
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-center justify-center text-white text-2xl lg:text-5xl">
          {time[3]}
        </span>
        <span className="text-center justify-center text-white text-base lg:text-2xl font-text">
          Sekunde
        </span>
      </div>
    </div>
  );
}
