import Image from "next/image";
import BlogCarousel from "../../../components/BlogCarousel";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-12 bg-black px-24 py-16">
      <h1 className="w-full text-center text-[#51b957] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
        O KONFERENCIJI
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <p className="w-full md:w-5/12 font-text text-[#51b957] text-base md:text-xl text-justify">
          Anatomija uspeha je konferencija koju od 2015. godine organizuju
          master studenti Fakulteta tehničkih nauka u Novom Sadu sa modula
          Inženjerski marketing i multimediji. Ovogodišnje jubilarno izdanje,
          pod nazivom „trAIn your brAIn“, bavi se spojem neuromarketinga i
          veštačke inteligencije u savremenom marketingu. U vremenu kada sve
          teže razlikujemo stvaran od generisanog sadržaja, cilj događaja je da
          preispita kako naš mozak reaguje na reklame, poruke i digitalni
          sadržaj koji svakodnevno konzumiramo.
        </p>

        <div className="relative w-full md:w-5/12 min-h-62.5 ">
          <BlogCarousel
            images={[
              "/logo.jpg",
              "/2024.png",
              "/2023.png",
              "/2022.png",
              "/2021.png",
              "/2020.png",
              "/2019.png",
              "/2018.png",
              "/2017.png",
              "/2016.png",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="relative w-full md:w-5/12 min-h-[400px] flex items-center">
          <Image
            src="/AI_2.png"
            alt="Slika Anatomija Uspeha"
            fill
            className="object-contain rounded-2xl"
          />
        </div>

        <p className="w-full md:w-5/12 font-text text-[#51b957] text-base md:text-xl text-justify flex items-center">
          Kroz panel diskusiju sa gostima, interaktivno takmičenje i
          demonstraciju neuromarketing uređaja (EEG) za praćenje moždane
          aktivnosti, publika će imati priliku da otkrije kako AI menja način
          kreiranja reklama, da li generisan sadržaj može da izazove emociju kao
          ljudski i kako neuromarketing objašnjava odluke koje donosimo često
          nesvesno.
        </p>
      </div>
    </div>
  );
}
