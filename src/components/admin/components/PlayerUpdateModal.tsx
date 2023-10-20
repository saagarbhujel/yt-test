import { useState } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import useSearch from "../../../hooks/useSearch";

type PlayerUpdateModalProps = {
  modalOpen: boolean;
  modalClose: () => void;
  id: string;
  onClose: () => void;

};

const PlayerUpdateModal = ({
  modalOpen,
  modalClose,
  id,
}: PlayerUpdateModalProps) => {
  
  const { auth } = useAuth();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  if (!modalOpen) return null;

  const handleUpdatePlayer = async () => {
    // console.log("update player");

    const res = await axios.put(
      `/user/player/update/${id}`,
      {
        name,
        email,
        country,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      }
    );
    // console.log(res.data);
    setMessage(res.data.message);
    setUpdateModal(false);

    setName("");
    setEmail("");
    setCountry("");
  
  };

  const updateModalOpen = () => {
    setUpdateModal(true);
  };

  const updateModalClose = () => {
    setUpdateModal(false);
  };

  return (
    <>
      {message ? "SuccessFull" : null}
      {/* MODAL */}

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          modalOpen ? "" : "hidden"
        } `}
      >
        {/* <!-- Modal background --> */}
        <div className="fixed inset-0 bg-gray-800 opacity-75"></div>

        {/* <!-- Modal content --> */}
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg z-10">
          <p className="text-green-500 font-medium text-center">
            {message ? message + "& Search Again" : null}
          </p>
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Edit Note</h2>
            <button
              onClick={modalClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 5.354 4.646a.5.5 0 0 0-.707.707L9.293 10l-4.647 4.646a.5.5 0 0 0 .708.707L10 10.707l4.646 4.647a.498.498 0 0 0 .707 0 .5.5 0 0 0 0-.707L10.707 10l4.647-4.646a.5.5 0 0 0 0-.707z" />
              </svg>
            </button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="mb-4">
            <label htmlFor="ename" className="block text-gray-700  mb-2">
              Name:
            </label>
            <input
              id="ename"
              name="ename"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tag" className="block text-gray-700  mb-2">
              Email:
            </label>
            <input
              id="etag"
              name="etag"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tag" className="block text-gray-700  mb-2">
              Country:
            </label>
            <input
              id="etag"
              name="etag"
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 px-3 py-2"
            />
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex justify-end">
            <button
              onClick={updateModalOpen}
              disabled={!name || !email || !country}
              className="px-4 py-2  bg-blue-500/90 hover:bg-blue-500 text-white rounded"
            >
              Update
            </button>
            <button
              onClick={modalClose}
              className="px-4 py-2 ml-2 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* CONFORMATION MODAL FOR UPDATING NOTE  */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 
      ${updateModal ? "" : "hidden"} `}
      >
        <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
        <div className="bg-white rounded shadow-lg p-4 max-w-sm w-full z-10">
          <h3 className="text-xl mb-4">Update Conformation</h3>
          <p className="mb-6">Are you sure you want to update note?</p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 text-white bg-blue-500/90 hover:bg-blue-500 rounded mr-2"
              onClick={handleUpdatePlayer}
            >
              Update
            </button>
            <button
              className="px-4 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={updateModalClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerUpdateModal;
