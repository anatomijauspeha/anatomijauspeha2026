import TeamMember from "../../../components/TeamMember";

const team = [
  { id: 1 },
];
export default function OrganizationTeam() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-24 bg-black px-6 py-16 md:px-16 lg:px-24">
      <h1 className="w-full text-center text-[#51b957] text-4xl md:text-6xl lg:text-7xl font-bold">
        ORGANIZACIONI TIM
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {team.map((member) => (
          <TeamMember key={member.id} />
        ))}
      </div>
    </div>
  );
}
