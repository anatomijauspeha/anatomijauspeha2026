import Image from "next/image";

export default function RegistrationForm() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-black">
      <div className="bg-white relative w-full md:w-5/12 min-h-75 md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* <Image
          src="/logo.jpg"
          alt="background"
          fill
          className="object-cover brightness-50"
        /> */}
        <h1 className="relative z-10 px-16 text-[#51b957] text-4xl md:text-6xl lg:text-8xl font-bold text-center tracking-wide leading-tight">
          PRIDRUŽI NAM SE!
        </h1>
      </div>
      <div className="relative w-full md:w-7/12 flex items-center justify-center py-16 md:py-32 px-6 md:px-20 lg:px-32 overflow-hidden">
        <Image
          src="/logo.jpg"
          alt="Anatomija Uspeha logo"
          fill
          className="object-cover brightness-40"
        />
        <form className="relative z-10 flex flex-col gap-12 w-full max-w-lg">
          <input
            required
            name="firstname"
            type="text"
            placeholder="Ime"
            className="placeholder:text-[#51b957] tracking-widest rounded-xl border text-[#51b957] w-full px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#51b957] transition"
          />

          <input
            required
            name="lastname"
            type="text"
            placeholder="Prezime"
            className="placeholder:text-[#51b957] tracking-widest rounded-xl border text-[#51b957] w-full px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#51b957] transition"
          />

          <input
            required
            name="email"
            type="email"
            placeholder="Email adresa"
            className="placeholder:text-[#51b957] tracking-widest rounded-xl border text-[#51b957] w-full px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#51b957] transition"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-[60%] py-3 mt-12 rounded-2xl bg-[#51b957] hover:bg-[#3b913f] text-white font-medium tracking-widest transition cursor-pointer"
            >
              PRIJAVI SE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
