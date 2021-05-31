import React, { ReactNode } from "react";
import { AiOutlineMore, AiOutlineCalendar } from "react-icons/ai";
import * as dayjs from "dayjs";
type Props = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  create_by: string;
  status: string;
  badgesStyle: string;
  ticket_priority: string;
  ticket_no: string;
};
const Ticket: React.FunctionComponent<Props> = ({
  id,
  title,
  created_at,
  create_by,
  status,
  ticket_priority,
  ticket_no,
}) => {
  const TicketPriorityStyle = (priority: string) => {
    if (priority == "Highest") {
      return "bg-red-500";
    } else if (priority == "Medium") {
      return "bg-yellow-500 ";
    } else {
      return "bg-green-500";
    }
  };
  return (
    <>
      <div
        className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        draggable="true"
      >
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center">
            <span
              title={`${ticket_priority} Priority`}
              className={`flex items-center h-3 w-3 rounded-full ${TicketPriorityStyle(
                ticket_priority
              )}`}
            ></span>
            <span className="text-sm text-gray-400 ml-1">{ticket_no}</span>
          </div>
          <button className="flex w-5 h-5  text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
            <AiOutlineMore size={24} />
          </button>
        </div>
        <h4 className="mt-3 text-sm font-medium">{title}</h4>
        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400 flex-grow justify-between">
          <div className="flex items-center">
            <AiOutlineCalendar size={14} />
            <span className="ml-1 leading-none">
              {dayjs(created_at).format("DD/MM/YYYY")}
            </span>
          </div>
          <span className="ml-1 font-normal"> {create_by}</span>
        </div>
      </div>
    </>
  );
};

export default Ticket;
