import Agenda from "../../components/Agenda";
import Homepage from "../../components/Homepage";
import InitialHomepage from "../../components/InitialHomepage";
import Panelists from "../../components/Panelists";
import PartnersSponsors from "../../components/PartnersSponsors";
import Timer from "../../components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black">
      {/* <Homepage />
      <div className="w-full flex justify-center -mt-16 md:-mt-24 z-20 relative">
        <Timer />
      </div>
      <Agenda />
      <Panelists/>
      <div className="relative w-full min-h-[180px] sm:min-h-[120px] md:min-h-[180px] lg:min-h-[370px] overflow-hidden">
      </div>
      <PartnersSponsors/> */}
      <InitialHomepage/> 
    </div>
  );
}
