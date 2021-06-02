import React from "react";
import { Ticket } from "./";

type Props = {
  title: string;
  data: [];
  badge: number;
  showEditModal: (ticket: []) => void;
};
const CardTickets: React.FunctionComponent<Props> = ({
  title,
  data,
  showEditModal,
  badge,
}) => {
  const getBadgeStyle = (status: string) => {
    if (title == "Open") {
      return "text-blue-500 bg-blue-300";
    } else if (title == "Pending") {
      return "text-yellow-500 bg-yellow-300";
    } else if (title == "Accepted") {
      return "text-green-500 bg-green-300";
    } else if (title == "Resolved") {
      return "text-green-500 bg-green-300";
    } else if (title == "Rejected") {
      return "text-red-500 bg-red-300";
    }
  };

  return (
    <>
      <div className="flex flex-col flex-shrink-0 w-80 rounded-xl bg-light-blue px-3 h-screen">
        <div className="flex items-center flex-shrink-0 h-10 px-2">
          <span className="block text-sm font-semibold">{title}</span>
          <span
            className={`flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold ${getBadgeStyle()} rounded bg-opacity-30`}
          >
            {badge}
          </span>
        </div>
        <div className="flex flex-col pb-8 overflow-auto">
          {badge > 0 ? (
            <>
              {data.map((ticket) => (
                <Ticket
                  key={ticket.id}
                  id={ticket.id}
                  data={ticket}
                  showEditModal={showEditModal}
                />
              ))}
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardTickets;
