import Image from "next/image";
import Link from "next/link";

export default function Panelists() {
  return (
    <section className="w-full min-h-screen bg-black px-6 py-16 md:px-16 lg:px-24 flex flex-col gap-20">
      <h1 className="w-full text-center text-[#51b957] text-4xl md:text-6xl lg:text-7xl font-bold py-16">
        PANELISTI
      </h1>

      <div className="flex flex-col gap-24">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16 w-full">
          <div className="relative w-full md:w-5/12 min-h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/logo1.jpg"
              alt="Panelista"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-7/12 flex flex-col justify-center gap-12">
            <h3 className="text-[#51b957] text-2xl md:text-4xl font-bold">
              Nikola Učur
            </h3>

            <p className="font-text text-[#51b957] text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              Nikola Učur je istraživač i edukator u oblasti neuromarketinga,
              doktorand na Fakultetu tehničkih nauka u Novom Sadu i osnivač Sive
              ćelije. Njegovo polje rada obuhvata neuromarketing, neurobrending
              i neurodizajn, sa fokusom na razumevanje pažnje, emocija i
              nesvesnih reakcija potrošača. Kroz predavanja, radionice i
              edukativni sadržaj na profilu Siva ćelija, približava publici
              način na koji mozak reaguje na marketinške poruke i vizuelne
              stimulanse.
            </p>
            <p className="font-text text-[#51b957] text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              <Link href="https://sivacelija.com">
                <b>https://sivacelija.com</b>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 md:gap-16 w-full">
          <div className="relative w-full md:w-5/12 min-h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/logo1.jpg"
              alt="Panelista"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-7/12 flex flex-col justify-center gap-12">
            <h3 className="text-[#51b957] text-2xl md:text-4xl font-bold">
              Danijela Vranješ
            </h3>

            <p className="font-text text-[#51b957] text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              Danijela Vranješ je asistentkinja na Katedri za germanistiku
              Filološkog fakulteta u Beogradu i stručnjak za primenu veštačke
              inteligencije u obrazovanju. Aktivno se bavi istraživanjem i
              edukacijom u oblasti AI alata, sa posebnim fokusom na njihovu
              praktičnu primenu u nastavi i svakodnevnom radu. Autorka je i
              predavač na brojnim radionicama i seminarima za nastavnike, kao i
              kreatorka edukativnog profila <b>Digitalni čas</b>, gde približava
              upotrebu veštačke inteligencije široj zajednici.
            </p>
            <p className="font-text text-[#51b957] text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              <Link href="https://instagram.com/digitalni.cas">
                <b>@digitalni.cas</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
