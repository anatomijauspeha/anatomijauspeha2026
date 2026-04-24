import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-24 bg-black p-24">
      <h1 className="w-full text-center justify-start text-[#51b957] text-7xl font-bold">
        O KONFERENCIJI
      </h1>
      <div className="flex flex-col gap-32">
        <div className="flex flex-row justify-between">
          <p className="w-5/12 font-text text-[#51b957] text-medium md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Image
            src="/logo1.jpg"
            width={100}
            height={100}
            alt="Slika Anatomija Uspeha"
            className="w-5/12"
          />
        </div>
      </div>
      <div className="flex flex-col gap-32">
        <div className="flex flex-row justify-between">
          <Image
            src="/logo1.jpg"
            width={100}
            height={100}
            alt="Slika Anatomija Uspeha"
            className="w-5/12"
          />
          <p className="w-5/12 font-text text-[#51b957] text-medium md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
