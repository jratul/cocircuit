"use client";

import Card from "@/components/Card";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const committersChartData = [
  {
    name: "r flr",
    Edit: 85,
    Verify: 33,
    Sim: 22,
  },
  {
    name: "Faker",
    Edit: 64,
    Verify: 15,
    Sim: 18,
  },
  {
    name: "Son Heungmin",
    Edit: 35,
    Verify: 58,
    Sim: 5,
  },
  {
    name: "Kim Woojin",
    Edit: 57,
    Verify: 12,
    Sim: 12,
  },
  {
    name: "Oh Sanguk",
    Edit: 15,
    Verify: 25,
    Sim: 34,
  },
];

export default function Home() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <Card>
            <p className="mb-3 text-2xl font-bold">
              Monthly <span className="text-violet-500">Committers</span> 5
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart width={500} height={300} data={committersChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Edit" fill="#5752D1" />
                <Bar dataKey="Verify" fill="#8481DD" />
                <Bar dataKey="Sim" fill="#B2B0EA" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </li>
      </ul>
    </>
  );
}
