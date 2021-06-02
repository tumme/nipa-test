import React, { useState } from "react";
import { AiOutlineMore, AiOutlineCalendar } from "react-icons/ai";
import * as dayjs from "dayjs";
type Props = {
  data: [];
  showEditModal: (ticket: []) => void;
};
const greetings = ["Highest", "Medium", "Low"];
const Ticket: React.FunctionComponent<Props> = ({ data, showEditModal }) => {
  const [showModalAction, setShowModalAction] = useState(false);
  const TicketPriorityStyle = (priority: string) => {
    if (priority == "Highest") {
      return "bg-red-500";
    } else if (priority == "Medium") {
      return "bg-yellow-500 ";
    } else {
      return "bg-green-500";
    }
  };
  const showModalUpdateTicket = (ticket: []) => {
    showEditModal(ticket);
  };
  return (
    <>
      <div className="relative flex flex-col items-start p-4 mt-3 bg-white shadow-sm rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center">
            <span
              title={`${
                greetings[Math.floor(Math.random() * greetings.length)]
              } Priority`}
              className={`flex items-center h-2 w-2 rounded-full ${TicketPriorityStyle(
                greetings[Math.floor(Math.random() * greetings.length)]
              )}`}
            ></span>
            <span className="text-sm text-gray-400 ml-1">
              {data.ticket_code}
            </span>
          </div>
          <button
            className="flex w-5 h-5  text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
            onClick={() => showModalUpdateTicket(data)}
          >
            <AiOutlineMore size={24} />
          </button>
        </div>
        <h4 className="text-base font-medium">{data.ticket_title}</h4>
        <p className="text-sm text-gray-500">{data.ticket_description}</p>
        <div className="flex items-center w-full mt-3 text-xs font-normal text-gray-400 flex-grow justify-between">
          <div className="flex items-center">
            <AiOutlineCalendar size={14} />
            <span className="ml-1 leading-none">
              {status == "Open"
                ? "Created " +
                  dayjs(data.createdAt).format("DD/MM/YYYY HH:mm:ss")
                : "Updated " +
                  dayjs(data.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
            </span>
          </div>
          <span className="ml-1 font-normal capitalize truncate w-10">
            by {data.contract_name}
          </span>
        </div>
      </div>
    </>
  );
};

export default Ticket;
