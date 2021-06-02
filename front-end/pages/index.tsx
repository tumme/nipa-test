import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import {
  Layout,
  Header,
  CardTickets,
  Ticket,
  ModalEditTicket,
  ModalCreateTicket,
} from "../components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Api from "../services/api";
import { BulletList } from "react-content-loader";

const Index: React.FunctionComponent = () => {
  const queryClient = useQueryClient();
  const [showModalEditTicket, setShowModalEditTicket] = useState(false);
  const [showModalCreateTicket, setShowModalCreateTicket] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");
  const [ticket, setTicket] = useState([]);
  const {
    status,
    data: tickets,
    error,
    isFetching,
  } = useQuery("allTickets", async () => {
    const res = await axios.get("http://localhost:8080/api/v1/tickets/all");
    return res.data;
  });
  const { data: allStatus } = useQuery("allStatus", async () => {
    const res = await axios.get("http://localhost:8080/api/v1/tickets/status");
    return res.data;
  });

  const mutation = useMutation(
    (ticket) =>
      axios.post("http://localhost:8080/api/v1/tickets/ticket", ticket),
    {
      onSuccess: () => {
        setShowModalCreateTicket(!showModalCreateTicket);
        queryClient.invalidateQueries("allTickets");
      },
    }
  );
  const updateTicket = useMutation(
    (ticket) =>
      axios.put(
        `http://localhost:8080/api/v1/tickets/ticket/${ticket.id}`,
        ticket
      ),
    {
      onSuccess: () => {
        setShowModalEditTicket(!showModalEditTicket);
        queryClient.invalidateQueries("allTickets");
      },
    }
  );

  const createTicketAction = (ticket) => {
    mutation.mutate({
      contract_name: ticket.contractName,
      contract_email: ticket.contractEmail,
      ticket_title: ticket.ticketTitle,
      ticket_description: ticket.description,
    });
  };

  const actionUpdateTicket = (ticket) => {
    updateTicket.mutate({
      id: ticket.id,
      status: ticket.status,
      contract_name: ticket.contractName,
      contract_email: ticket.contractEmail,
      ticket_title: ticket.ticketTitle,
      ticket_description: ticket.description,
    });
  };

  const showEditModal = (ticket: []) => {
    setShowModalEditTicket(!showModalEditTicket);
    setTicket(ticket);
  };

  return (
    <>
      <div className="px-10 mb-6 shadow-sm bg-white py-4 flex flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="flex">
            <h1 className="text-xl font-bold md:text-2xl">Tickets Board</h1>
          </div>
          <div className="flex ml-4">
            <button
              onClick={() => setShowModalCreateTicket(!showModalCreateTicket)}
              className="md:px-4 px-2 py-2 bg-blue-400 text-sm font-semibold uppercase rounded-lg text-white flex flex-row items-center focus:outline-none"
            >
              <AiOutlinePlusCircle size={17} className="mr-2" /> Create Ticket
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-grow md:px-10 mt-4 space-x-6 overflow-auto pb-8 px-6">
        {status === "error" && (
          <p className="text-sm text-red-500 font-semibold">
            Error fetching data
          </p>
        )}
        {status === "loading" && (
          <p className="text-sm font-semibold text-blue-400">
            Fetching data...
          </p>
        )}
        {status === "success" && (
          <>
            {tickets.data.map((lane) => (
              <CardTickets
                key={lane.id}
                title={lane.status}
                data={lane.tickets}
                badge={lane.tickets.length}
                showEditModal={showEditModal}
              />
            ))}
          </>
        )}
      </div>

      {showModalEditTicket && (
        <ModalEditTicket
          ticketData={ticket}
          allStatus={allStatus}
          closeModal={() => setShowModalEditTicket(!showModalEditTicket)}
          actionUpdateTicket={actionUpdateTicket}
        />
      )}
      {showModalCreateTicket && (
        <ModalCreateTicket
          createTicketAction={createTicketAction}
          closeModal={() => setShowModalCreateTicket(!showModalCreateTicket)}
        />
      )}
    </>
  );
};

export default Index;
