import React, { useState, ChangeEvent, useEffect } from "react";
import { CgClose } from "react-icons/cg";

import { RiArrowDropDownLine } from "react-icons/ri";
type Props = {
  closeModal: () => void;
  createTicketAction: (ticket: []) => void;
};

const statusTicket = ["Open", "Pending", "Accepted", "Resolved", "Rejected"];

const ModalActionTicket: React.FunctionComponent<Props> = ({
  closeModal,
  createTicketAction,
}) => {
  const [ticketTitle, setTicketTitle] = useState("");
  const [contractEmail, setContractEmail] = useState("");
  const [contractName, setContractName] = useState("");
  const [description, setDescription] = useState("");
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

    createTicketAction({
      ticketTitle,
      contractEmail,
      contractName,
      description,
    });
  };

  const closeModalActionTicket = () => {
    closeModal();
  };

  return (
    <>
      <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center px-8">
        <div className="container mx-auto max-w-2xl bg-white shadow-2xl rounded">
          <div className="flex flex-row font-semibold text-gray-600 items-center px-3 py-3 justify-between border-b border-gray-20">
            <h2 className="text-md">Create Ticket</h2>
            <button
              className="bg-gray-100 p-1 rounded-full focus:outline-none"
              onClick={() => closeModalActionTicket()}
            >
              <CgClose size={20} />
            </button>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Contract Name <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                type="text"
                className="p-3 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your name..."
                onChange={onChangeContractName}
              />
              {errorMessageContractName != "" && (
                <span className="text-red-400 mt-2  text-xs">
                  {errorMessageContractName}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Contract Email <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                type="email"
                className="p-3 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your email..."
                onChange={onChangeContractEmail}
              />
              {errorMessageContractEmail != "" && (
                <span className="text-red-400 mt-2  text-xs">
                  {errorMessageContractEmail}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Title <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                className="p-3 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your name..."
                onChange={onChangeTicketTitle}
              />
              {errorMessageTicketTitle != "" && (
                <span className="text-red-400 mt-2  text-xs">
                  {errorMessageTicketTitle}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <p className="mb-2 font-semibold text-sm text-gray-600">
                Description <span className="text-red-500 ml-0.5">*</span>
              </p>
              <textarea
                className="p-3 bg-white border border-gray-200 rounded text-sm h-20"
                placeholder="Enter your description..."
                onChange={onChangeDescription}
              />
              {errorMessageDescription != "" && (
                <span className="text-red-400 mt-2  text-xs">
                  {errorMessageDescription}
                </span>
              )}
            </div>
            <div className="flex flex-row justify-end mt-3 mb-3">
              <button
                className="md:p-3 md:px-4 px-3 p-2 uppercase bg-blue-500 text-white rounded-lg"
                onClick={() => actionTicket()}
              >
                Create Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalActionTicket;
