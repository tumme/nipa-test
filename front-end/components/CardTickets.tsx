import React from "react";
import { Ticket } from "./";

type Props = {
  badges: number;
  title: string;
  badgesStyle: string;
  data: [];
};
const CardTickets: React.FunctionComponent<Props> = ({
  title,
  badges,
  badgesStyle,
  data,
}) => {
  return (
    <>
      <div className="flex flex-col flex-shrink-0 w-72">
        <div className="flex items-center flex-shrink-0 h-10 px-2">
          <span className="block text-sm font-semibold">{title}</span>
          <span
            className={`flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold ${badgesStyle} rounded bg-opacity-30`}
          >
            {badges}
          </span>
        </div>
        <div className="flex flex-col pb-8 overflow-auto">
          {data.map((ticket) => (
            <Ticket
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              created_at={ticket.created_at}
              description={ticket.description}
              create_by={ticket.create_by}
              status={ticket.status}
              ticket_priority={ticket.ticket_priority}
              ticket_no={ticket.ticket_no}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardTickets;
