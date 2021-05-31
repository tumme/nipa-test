import Head from "next/head";
import React, { useState } from "react";
import {
  Layout,
  Header,
  CardTickets,
  Ticket,
  ModalCreateTicket,
} from "../components";
import { AiOutlinePlusCircle } from "react-icons/ai";
const TicketsOpen = [
  {
    id: 1,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Open",
    ticket_priority: "Highest",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 2,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Open",
    ticket_priority: "Medium",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 3,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Open",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 4,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Open",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
];
const TicketsPending = [
  {
    id: 1,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 2,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 3,
    landId: 1,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 4,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 5,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 6,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 8,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 9,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 10,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
  {
    id: 11,
    landId: 2,
    ticket_no: "SP-001",
    title: "This is the title of the card for the thing that needs to be done.",
    description:
      "This is the title of the card for the thing that needs to be done.",
    status: "Pending",
    ticket_priority: "Low",
    created_at: "2011-05-31 18:00:00",
    updated_at: "2011-05-31 18:00:00",
    create_by: "create name",
    email_contract: "test@gmail.com",
  },
];

const Index: React.FunctionComponent = () => {
  const [showModalCreateTicket, setShowModalCreateTicket] = useState(false);
  const createTicket = () => {
    setShowModalCreateTicket(!showModalCreateTicket);
  };
  const submitTicket = () => {
    setShowModalCreateTicket(!showModalCreateTicket);
  };
  return (
    <>
      <Layout>
        <div className="px-10 mt-6 flex flex-row items-center">
          <div className="flex">
            <h1 className="text-2xl font-bold">Tickets Board</h1>
          </div>
          <div className="flex ml-4">
            <button
              onClick={createTicket}
              className="px-4 py-2 bg-blue-400 text-sm font-semibold uppercase rounded-lg text-white flex flex-row items-center focus:outline-none"
            >
              <AiOutlinePlusCircle size={17} className="mr-2" /> Create Ticket
            </button>
          </div>
        </div>
        <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
          <CardTickets
            title="Open"
            badges={TicketsOpen.length}
            landId={1}
            badgesStyle="text-blue-500 bg-blue-300"
            data={TicketsOpen}
          />
          <CardTickets
            title="Pending"
            badges={TicketsPending.length}
            landId={2}
            badgesStyle="text-yellow-400 bg-yellow-300"
            data={TicketsPending}
          />
          {/* <CardTickets
          title="Pending"
          badges={10}
          landId={2}
          badgesStyle="text-yellow-500 bg-yellow-300"
        />
        <CardTickets
          title="Accepted"
          badges={20}
          landId={3}
          badgesStyle="text-green-500 bg-green-300"
        />
        <CardTickets
          title="Resolved"
          badges={20}
          landId={3}
          badgesStyle="text-green-500 bg-green-300"
        />
        <CardTickets
          title="Rejected"
          badges={20}
          landId={3}
          badgesStyle="text-purple-500 bg-purple-300"
        /> */}
        </div>
      </Layout>
      {showModalCreateTicket && (
        <ModalCreateTicket
          submitTicket={submitTicket}
          closeModal={() => setShowModalCreateTicket(!showModalCreateTicket)}
        />
      )}
    </>
  );
};

export default Index;
