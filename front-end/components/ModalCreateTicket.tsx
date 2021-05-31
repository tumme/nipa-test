import React, { useState, ChangeEvent } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  submitTicket: () => void;
  closeModal: () => void;
};

const ModalCreateTicket: React.FunctionComponent<Props> = ({
  closeModal,
  submitTicket,
}) => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const isEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onChangeTitle = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setTitle(ele.value);
  };

  const onChangeEmail = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setEmail(ele.value);
  };
  const onChangeDescription = (event: ChangeEvent) => {
    const ele = event.target as HTMLInputElement;
    setDescription(ele.value);
  };

  const createNewTicket = () => {};

  return (
    <>
      <div className="absolute w-full h-full flex flex-col top-0 items-center bg-black bg-opacity-30 justify-center px-8">
        <div className="container mx-auto max-w-2xl bg-white shadow rounded">
          <div className="flex flex-row font-semibold text-gray-600 items-center px-3 py-3 justify-between border-b border-gray-20">
            <h2 className="text-md">Create Ticket</h2>
            <button
              className="bg-gray-100 p-1 rounded-full focus:outline-none"
              onClick={closeModal}
            >
              <CgClose size={20} />
            </button>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex flex-col">
              <p class="mb-2 font-semibold text-sm text-gray-600">
                Title <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                className="p-3 mb-5 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your name..."
                onChange={onChangeTitle}
              />
            </div>
            <div className="flex flex-col">
              <p class="mb-2 font-semibold text-sm text-gray-600">
                Email <span className="text-red-500 ml-0.5">*</span>
              </p>
              <input
                className="p-3 mb-5 bg-white border border-gray-200 rounded text-sm"
                placeholder="Enter your email..."
                onChange={onChangeEmail}
              />
            </div>
            <div className="flex flex-col">
              <p class="mb-2 font-semibold text-sm text-gray-600">
                Description <span className="text-red-500 ml-0.5">*</span>
              </p>
              <textarea
                className="p-3 mb-5 bg-white border border-gray-200 rounded text-sm h-36"
                placeholder="Enter your description..."
                onChange={onChangeDescription}
              />
            </div>
            <div className="flex flex-row justify-end mt-3 mb-3">
              <button className="p-3 px-4 uppercase bg-blue-500 text-white rounded-lg">
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateTicket;
