"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const targetDate = new Date("2026-05-22T18:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return [0, 0, 0, 0];
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return [days, hours, minutes, seconds];
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[80%] bg-[#51b957] rounded-2xl flex justify-between items-center px-6 md:px-24 py-4 md:py-8 shadow-2xl shadow-[#51b957]/30 backdrop-blur-md">

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[0]}</span>
        <span className="text-white text-base lg:text-2xl">Dana</span>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[1]}</span>
        <span className="text-white text-base lg:text-2xl">Sata</span>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[2]}</span>
        <span className="text-white text-base lg:text-2xl">Minuta</span>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[3]}</span>
        <span className="text-white text-base lg:text-2xl">Sekunde</span>
      </div>

    </div>
  );
}