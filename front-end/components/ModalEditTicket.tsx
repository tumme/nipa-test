import React, { useState, ChangeEvent, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { RiArrowDropDownLine } from "react-icons/ri";
type Props = {
  submitTicket: () => void;
  closeModal: () => void;
  ticketData: [];
  allStatus: [];
  actionUpdateTicket: (ticket: []) => void;
};

const ModalEditTicket: React.FunctionComponent<Props> = ({
  closeModal,
  submitTicket,
  ticketData,
  allStatus,
  actionUpdateTicket,
}) => {
  const [ticketTitle, setTicketTitle] = useState(ticketData.ticket_title);
  const [contractEmail, setContractEmail] = useState(ticketData.contract_email);
  const [contractName, setContractName] = useState(ticketData.contract_name);
  const [description, setDescription] = useState(
    ticketData.contract_description
  );
  const [status, setStatus] = useState(ticketData.status);
  const [errorMessageContractName, setErrorMessageContractName] = useState("");
  const [errorMessageContractEmail, setErrorMessageContractEmail] =
    useState("");
  const [errorMessageTicketTitle, setErrorMessageTicketTitle] = useState("");
  const [errorMessageDescription, setErrorMessageDescription] = useState("");

  const isEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onChangeTicketTitle = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setTicketTitle(ele.value);
  };

  const onChangeContractEmail = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setContractEmail(ele.value);
  };

  const onChangeDescription = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setDescription(ele.value);
  };

  const onChangeContractName = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setContractName(ele.value);
  };
  const onChangeStatus = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setStatus(ele.value);
  };

  const actionTicket = () => {
    if (contractName == "") {
      setErrorMessageContractName("Please enter name");
      return;
    }
    if (contractEmail == "") {
      setErrorMessageContractEmail("Please enter email");
      return;
    }
    if (ticketTitle == "") {
      setErrorMessageTicketTitle("Please enter ticket title");
      return;
    }

    if (description == "") {
      setErrorMessageDescription("Please enter description");
      return;
    }

    if (!isEmail(contractEmail)) {
      setErrorMessageContractEmail("Invalid email");
      return;
    }
    actionUpdateTicket({
      id: ticketData.id,
      status,
      contractName,
      contractEmail,
      ticketTitle,
      description,
    });
  };

  return (
    <>
      <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center px-8">
        <div className="container mx-auto max-w-2xl bg-white shadow-2xl rounded">
          <div className="flex flex-row font-semibold text-gray-600 items-center px-3 py-3 justify-between border-b border-gray-20">
            <h2 className="text-md">Edit Ticket {ticketData.ticket_code}</h2>
            <button
              className="bg-gray-100 p-1 rounded-full focus:outline-none"
              onClick={() => closeModal()}
            >
              <CgClose size={20} />
            </button>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Status <span className="text-red-500 ml-0.5">*</span>
              </p>
              <div className="flex flex-row items-center relative">
                <select
                  onChange={onChangeStatus}
                  className="border font-body text-sm border-light-blue rounded-lg p-2 w-full text-gray-500  h-12 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-light-blue-600 focus:border-transparent"
                >
                  {allStatus.data.map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      selected={ticketData.status == item.id ? true : false}
                    >
                      {item.status}
                    </option>
                  ))}
                </select>
                <RiArrowDropDownLine
                  size={30}
                  className="absolute right-2 text-gray-500"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Contract Name <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                className="p-3 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your name..."
                value={contractName}
                onChange={onChangeContractName}
              />
            </div>
            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Contract Email <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                type="email"
                className="p-3 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your email..."
                value={contractEmail}
                onChange={onChangeContractEmail}
              />
            </div>
            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Title <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                className="p-3 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your name..."
                onChange={onChangeTicketTitle}
                value={ticketTitle}
              />
            </div>
            <div className="flex flex-col mb-2">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Description <span className="text-red-500 ml-0.5">*</span>
              </p>
              <textarea
                className="p-3 bg-white border border-gray-200 rounded text-sm h-20"
                placeholder="Enter your description..."
                onChange={onChangeDescription}
              >
                {ticketData.ticket_description}
              </textarea>
            </div>
            <div className="flex flex-row justify-end mt-3 mb-3">
              <button
                className="md:p-3 md:px-4 px-3 p-2 uppercase bg-blue-500 text-white rounded-lg"
                onClick={() => actionTicket()}
              >
                Update Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditTicket;
