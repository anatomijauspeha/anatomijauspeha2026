"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const targetDate = new Date("2026-05-22T18:00:00").getTime();

  const [time, setTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return [0, 0, 0, 0];

    return [
      Math.floor(diff / (1000 * 60 * 60 * 24)),
      Math.floor((diff / (1000 * 60 * 60)) % 24),
      Math.floor((diff / (1000 * 60)) % 60),
      Math.floor((diff / 1000) % 60),
    ];
  };

  useEffect(() => {
    setMounted(true);
    setTime(calculateTimeLeft());

    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !time) {
    return null; 
  }

  return (
    <div className="w-[80%] bg-[#51b957] rounded-2xl flex justify-between items-center px-6 md:px-24 py-4 md:py-8 shadow-xl shadow-[#51b957]/30 backdrop-blur-lg">

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[0]}</span>
        <span className="text-white">Dana</span>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[1]}</span>
        <span className="text-white">Sata</span>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[2]}</span>
        <span className="text-white">Minuta</span>
      </div>

      <div className="flex flex-col gap-2 text-center">
        <span className="text-white text-2xl lg:text-5xl">{time[3]}</span>
        <span className="text-white">Sekunde</span>
      </div>

    </div>
  );
}