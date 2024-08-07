"use client";

import TeamDetail from "./TeamDetail";
import { useState } from "react";
import { TeamData } from "./types";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const teamData: { [teamName: string]: TeamData } = {
  Team1: {
    leader: {
      name: "Heungmin Son",
      img: "images/members/member14.avif",
      job: "Team Leader",
    },
    members: [
      {
        name: "James Maddison",
        img: "images/members/member1.avif",
        job: "CM",
      },
      {
        name: "Destiny Udogie",
        img: "images/members/member2.avif",
        job: "CDM",
      },
      {
        name: "Guglielmo Vicario",
        img: "images/members/member3.avif",
        job: "GK",
      },
      {
        name: "Cristian Romero",
        img: "images/members/member4.avif",
        job: "CB",
      },
      {
        name: "Pedro Porro",
        img: "images/members/member5.avif",
        job: "RB",
      },
      {
        name: "Micky van de Ven",
        img: "images/members/member6.avif",
        job: "CB",
      },
    ],
  },
  Team2: {
    leader: {
      name: "Heungmin Son",
      img: "images/members/member1.avif",
      job: "LM",
    },
    members: [
      {
        name: "James Maddison",
        img: "images/members/member1.avif",
        job: "CM",
      },
      {
        name: "Destiny Udogie",
        img: "images/members/member2.avif",
        job: "CDM",
      },
      {
        name: "Guglielmo Vicario",
        img: "images/members/member3.avif",
        job: "GK",
      },
      {
        name: "Cristian Romero",
        img: "images/members/member4.avif",
        job: "CB",
      },
      {
        name: "Pedro Porro",
        img: "images/members/member5.avif",
        job: "RB",
      },
      {
        name: "Micky van de Ven",
        img: "images/members/member6.avif",
        job: "CB",
      },
    ],
  },
  Team3: {
    leader: {
      name: "Heungmin Son",
      img: "images/members/member1.avif",
      job: "LM",
    },
    members: [
      {
        name: "James Maddison",
        img: "images/members/member1.avif",
        job: "CM",
      },
      {
        name: "Destiny Udogie",
        img: "images/members/member2.avif",
        job: "CDM",
      },
      {
        name: "Guglielmo Vicario",
        img: "images/members/member3.avif",
        job: "GK",
      },
      {
        name: "Cristian Romero",
        img: "images/members/member4.avif",
        job: "CB",
      },
      {
        name: "Pedro Porro",
        img: "images/members/member5.avif",
        job: "RB",
      },
      {
        name: "Micky van de Ven",
        img: "images/members/member6.avif",
        job: "CB",
      },
    ],
  },
};

export default function Teams() {
  const [curTeam, setCurTeam] = useState<string>(Object.keys(teamData)[0]);

  return (
    <>
      <div className="my-5 w-36">
        <Listbox value={curTeam} onChange={setCurTeam}>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{curTeam}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {Object.keys(teamData).map((teamName) => (
                <ListboxOption
                  key={teamName}
                  value={teamName}
                  className="group relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <span className="block truncate font-normal group-data-[selected]:font-semibold">{teamName}</span>

                  <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
      <TeamDetail teamName={curTeam} teamData={teamData[curTeam]} />
    </>
  );
}
