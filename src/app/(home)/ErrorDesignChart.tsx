"use client";

import Card from "@/components/Card";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "2024/08/05",
    ODD_MODULER: 12,
    POWER_PAD: 33,
    IO_MUX_M2: 24,
    MATRIX4_SUPPLY: 3,
    NOISE_GUARD: 37,
  },
  {
    name: "2024/08/06",
    ODD_MODULER: 15,
    POWER_PAD: 25,
    IO_MUX_M2: 5,
    MATRIX4_SUPPLY: 4,
    NOISE_GUARD: 33,
  },
  {
    name: "2024/08/07",
    ODD_MODULER: 38,
    POWER_PAD: 23,
    IO_MUX_M2: 15,
    MATRIX4_SUPPLY: 18,
    NOISE_GUARD: 26,
  },
  {
    name: "2024/08/08",
    ODD_MODULER: 24,
    POWER_PAD: 22,
    IO_MUX_M2: 17,
    MATRIX4_SUPPLY: 14,
    NOISE_GUARD: 22,
  },
  {
    name: "2024/08/09",
    ODD_MODULER: 5,
    POWER_PAD: 22,
    IO_MUX_M2: 16,
    MATRIX4_SUPPLY: 26,
    NOISE_GUARD: 15,
  },
  {
    name: "2024/08/10",
    ODD_MODULER: 9,
    POWER_PAD: 25,
    IO_MUX_M2: 22,
    MATRIX4_SUPPLY: 18,
    NOISE_GUARD: 8,
  },
  {
    name: "2024/08/11",
    ODD_MODULER: 15,
    POWER_PAD: 27,
    IO_MUX_M2: 9,
    MATRIX4_SUPPLY: 33,
    NOISE_GUARD: 3,
  },
];

export default function ErrorDesignChart() {
  return (
    <Card>
      <p className="mb-3 text-2xl font-bold">
        Weekly <span className="text-violet-500">Error</span> Module
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ODD_MODULER" stroke="#C9190B" />
          <Line type="monotone" dataKey="POWER_PAD" stroke="#EF9234" />
          <Line type="monotone" dataKey="IO_MUX_M2" stroke="#F6D173" />
          <Line type="monotone" dataKey="MATRIX4_SUPPLY" stroke="#7CC674" />
          <Line type="monotone" dataKey="NOISE_GUARD" stroke="#519DE9" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
