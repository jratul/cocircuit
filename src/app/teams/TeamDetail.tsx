import MemberCard from "./MemberCard";
import { TeamData } from "./types";
import TitleDivider from "@/components/TitleDivider";

export default function TeamDetail({ teamName, teamData }: { teamName: string; teamData: TeamData }) {
  return (
    <>
      <ul role="list" className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
        <li className="col-span-2">
          <h4 className="text-2xl font-bold text-gray-900">{teamName}</h4>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </li>
        <li className="col-span-1">
          <MemberCard name={teamData.leader.name} img={teamData.leader.img} job={teamData.leader.job} />
        </li>
      </ul>
      <TitleDivider title="Team Members" />
      <ul role="list" className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
        {teamData.members.map((member) => (
          <li className="col-span-1" key={member.name}>
            <MemberCard name={member.name} img={member.img} job={member.job} />
          </li>
        ))}
      </ul>
    </>
  );
}
