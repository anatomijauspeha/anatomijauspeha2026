import TeamMember from "../../../components/TeamMember";
import { getTeamMembers } from "../../../lib/endpoints/server";

export default async function OrganizationTeam() {
  const members = await getTeamMembers();
  return (
    <div className="w-full min-h-screen flex flex-col gap-24 bg-black px-6 py-16 md:px-16 lg:px-24">
      <h1 className="w-full text-center text-[#51b957] text-4xl md:text-6xl lg:text-7xl font-bold">
        ORGANIZACIONI TIM
      </h1>

      {members.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {members.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <span className="w-full text-center text-[#51b957] text-2xl md:text-4xl font-normal py-16 lg:py-32">
          Uskoro...
        </span>
      )}
    </div>
  );
}
