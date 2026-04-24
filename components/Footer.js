import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#51b957] flex flex-col gap-8 p-12 justify-center">
      <div className="font-text text-center justify-center text-white text-lg md:text-2xl tracking-wide">
        Pratite nas na društvenim mrežama
      </div>
      <div className="flex flex-row gap-8 justify-center">
        <Link href="https://www.instagram.com/anatomija_uspeha/">
            <Image src="/Instagram.webp"className="w-10 h-10 md:w-16 md:h-16" height={30} width={30} alt={"Instagram Logo"} />
        </Link>
        <Link href="https://www.tiktok.com/@anatomija_uspeha/">
            <Image src="/tiktok1.png" className="w-10 h-10 md:w-16 md:h-16" height={30} width={30} alt={"Tiktok Logo"}/>
        </Link>
      </div>
    </footer>
  );
}
