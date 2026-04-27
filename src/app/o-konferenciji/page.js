import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-24 bg-black p-24">
      <h1 className="w-full text-center justify-start text-[#51b957] text-7xl font-bold">
        O KONFERENCIJI
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-around">
        <p className="w-full md:w-5/12 font-text text-[#51b957] text-base md:text-xl text-justify">
          Anatomija uspeha je konferencija koju od 2015. godine organizuju
          master studenti Fakulteta tehničkih nauka u Novom Sadu sa modula
          Inženjerski marketing i multimediji. Ovogodišnje jubilarno izdanje,
          pod nazivom „trAIn your brAIn“, bavi se spojem neuromarketinga i
          veštačke inteligencije u savremenom marketingu.
        </p>

        <div className="relative w-full md:w-5/12 min-h-62.5">
          <Image
            src="/logo1.jpg"
            alt="Slika Anatomija Uspeha"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-around">
        <div className="relative w-full md:w-5/12 min-h-62.5">
          <Image
            src="/logo1.jpg"
            alt="Slika Anatomija Uspeha"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
        <p className="w-full md:w-5/12 font-text text-[#51b957] text-base md:text-xl text-justify">
          U vremenu kada sve teže razlikujemo stvaran od generisanog sadržaja,
          cilj događaja je da preispita kako naš mozak reaguje na reklame,
          poruke i digitalni sadržaj koji svakodnevno konzumiramo. Kroz panel
          diskusiju sa gostima, interaktivno takmičenje i demonstraciju
          neuromarketing uređaja (EEG) za praćenje moždane aktivnosti, publika
          će imati priliku da otkrije kako AI menja način kreiranja reklama, da
          li generisan sadržaj može da izazove emociju kao ljudski i kako
          neuromarketing objašnjava odluke koje donosimo često nesvesno.
        </p>
      </div>
    </div>
  );
}
