import Agenda from "../../components/Agenda";
import Homepage from "../../components/Homepage";
import Panelists from "../../components/Panelists";
import PartnersSponsors from "../../components/PartnersSponsors";
import Timer from "../../components/Timer";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-black">
      <Homepage />
      <div className="w-full flex justify-center -mt-16 md:-mt-24 z-20 relative">
        <Timer />
      </div>
      <Agenda />
      <Panelists />
      <PartnersSponsors/>
    </div>
  );
}
