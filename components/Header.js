"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#51b957] shadow-md text-white text-xl">
      <div className="flex items-center justify-between h-24 px-6 md:px-24">
        <button
          className="lg:hidden flex flex-col justify-between h-6 w-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-full bg-white"></span>
          <span className="block h-0.5 w-full bg-white"></span>
          <span className="block h-0.5 w-full bg-white"></span>
        </button>
        <ul className="hidden h-full lg:flex items-center gap-16 font-medium">
          <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-wide hover:bg-[#3b913f]">
            <Link href="/">Početna</Link>
          </li>
          {/* <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-wide hover:bg-[#3b913f]">
            <Link href="/o-konferenciji">O konferenciji</Link>
          </li> */}
          <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-wide hover:bg-[#3b913f]">
            <Link href="/organizatori">Organizatori</Link>
          </li>
          <li className="flex items-center justify-center h-full cursor-pointer px-5 tracking-wide hover:bg-[#3b913f]">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-6 bg-[#51b957] px-6 pb-6">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Početna
            </Link>
          </li>
          {/* <li>
            <Link href="/o-konferenciji" onClick={() => setIsOpen(false)}>
              O konferenciji
            </Link>
          </li> */}
          <li>
            <Link href="/organizatori" onClick={() => setIsOpen(false)}>
              Organizatori
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
