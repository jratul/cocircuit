"use client";

import Card from "@/components/Card";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const pMosData = [
  {
    w: 3.26,
    l: 0.23,
    count: 32,
  },
  {
    w: 3.26,
    l: 1.25,
    count: 12,
  },
  {
    w: 1.03,
    l: 2.42,
    count: 2,
  },
  {
    w: 4.1,
    l: 1.25,
    count: 35,
  },
  {
    w: 1.82,
    l: 2.45,
    count: 12,
  },
  {
    w: 2.95,
    l: 0.51,
    count: 8,
  },
  {
    w: 1.24,
    l: 0.84,
    count: 42,
  },
  {
    w: 2.82,
    l: 4.32,
    count: 24,
  },
];

const nMosData = [
  {
    w: 0.25,
    l: 1.42,
    count: 7,
  },
  {
    w: 2.42,
    l: 4.84,
    count: 17,
  },
  {
    w: 1.08,
    l: 3.52,
    count: 8,
  },
  {
    w: 2.72,
    l: 3.42,
    count: 32,
  },
  {
    w: 3.58,
    l: 3.22,
    count: 6,
  },
  {
    w: 2.26,
    l: 1.48,
    count: 24,
  },
  {
    w: 1.42,
    l: 3.52,
    count: 36,
  },
  {
    w: 4.28,
    l: 2.24,
    count: 13,
  },
];

export default function MosUsageChart() {
  return (
    <Card>
      <p className="mb-3 text-2xl font-bold">
        <span className="text-violet-500">MOS</span> Usage
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="w" type="number" name="w" unit="㎛" domain={[0, 5]} />
          <YAxis dataKey="l" type="number" name="l" unit="㎛" domain={[0, 5]} />
          <ZAxis dataKey="count" range={[0, 50]} name="count" unit="unit" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="pmos" data={pMosData} fill="#27aeef" />
          <Scatter name="nmos" data={nMosData} fill="#f46a9b" />
        </ScatterChart>
      </ResponsiveContainer>
    </Card>
  );
}
