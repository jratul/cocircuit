export interface MemberData {
  name: string;
  img: string;
  job: string;
}

export interface TeamData {
  leader: MemberData;
  members: MemberData[];
}
