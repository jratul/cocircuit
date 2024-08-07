import { MemberData } from "./types";

export default function MemberCard(props: MemberData) {
  return (
    <>
      <img alt={props.name} src={props.img} className="aspect-[3/2] w-full rounded-2xl object-cover" />
      <h3 className="mt-1 text-lg font-semibold leading-8 tracking-tight text-gray-900">{props.name}</h3>
      <p className="text-base leading-5 text-gray-600">{props.job}</p>
    </>
  );
}
