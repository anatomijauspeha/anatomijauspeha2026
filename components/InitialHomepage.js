import Image from "next/image";

export default function InitialHomepage() {
  return (
    <div className="relative w-full min-h-screen bg-black justify-center">
      <Image
        src="/AU_logo1.png"
        alt="Anatomija uspeha logo"
        fill
        className="object-contain brightness-50 justify-center p-8"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-16 text-[#51b957]">
        <h1 className="w-full text-4xl md:text-6xl lg:text-8xl tracking-[5px] leading-tight mt-8">
          Anatomija uspeha No.10
        </h1>
        <h1 className="w-full text-4xl md:text-6xl lg:text-8xl tracking-[5px] leading-tight mt-8 font-bold">
          COMING SOON...
        </h1>
      </div>
    </div>
  );
}
