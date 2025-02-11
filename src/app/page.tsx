"use client";

import CommitterChart from "./(home)/CommitterChart";
import ErrorDesignChart from "./(home)/ErrorDesignChart";
import MosUsageChart from "./(home)/MosUsageChart";
import RecentCommentTable from "./(home)/RecentCommentTable";

export default function Home() {
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow">
          <CommitterChart />
        </li>
        <li className="col-span-2 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow">
          <ErrorDesignChart />
        </li>
        <li className="col-span-2 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow">
          <RecentCommentTable />
        </li>
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow">
          <MosUsageChart />
        </li>
      </ul>
    </>
  );
}
