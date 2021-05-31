import React, { ReactNode } from "react";
const TabStatusMenu: React.FunctionComponent<Props> = () => {
  const Badge = () => (
    <span
      className="px-2 py-0.5 ml-1 text-xs font-medium
       tracking-wide text-red-400 bg-red-200
        rounded-full"
    >
      4
    </span>
  );
  return (
    <div className="flex justify-between border-b-2 border-gray-100 text-sm">
      <div className="flex">
        <span className="px-6 font-semibold border-b-2 border-blue-500">
          Open
        </span>
        <span className="px-6 text-gray-500">Pending</span>
        <span className="px-6 text-gray-500">Accepted</span>
        <span className="px-6 text-gray-500">Resolved</span>
        <span className="px-6 text-gray-500">Rejected</span>
      </div>
    </div>
  );
};

export default TabStatusMenu;
