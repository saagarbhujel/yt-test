import React, { useState } from "react";
import PlayerUpdateModal from "./PlayerUpdateModal";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

type PlayerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  playerInfo: any;
};

const PlayerModal = ({ isOpen, onClose, playerInfo }: PlayerModalProps) => {
  const { auth } = useAuth();
  console.log(auth?.accessToken); 
  

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  if (!isOpen) return null;

  const openUpdateModal = () => {
    setModalOpen(true);
  };

  const modalClose = () => {
    setModalOpen(false);
  };

const handleStatus = async () => {
  try {
    const res = await axios.patch(`/user/player/setInactive/${playerInfo.id}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    })
 
    
    
  } catch (error) {
    console.log(error);
    
    
  }

  

}

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
      <div className="bg-white p-8 rounded shadow-md">
        <div></div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Player Information</h2>
          <p>
            {" "}
            <span className="font-semibold first-letter:capitalize">
              {" "}
              Name: {playerInfo.name}{" "}
            </span>{" "}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Country:{" "}
            </span>{" "}
            {playerInfo.country}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">Id: </span>{" "}
            {playerInfo.id}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Rank:{" "}
            </span>{" "}
            {playerInfo.rank ? playerInfo.rank : "Not Found"}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Coins:{" "}
            </span>{" "}
            {playerInfo.statistics.coins}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Experience Points:{" "}
            </span>{" "}
            {playerInfo.statistics.experience_point}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Games Won:{" "}
            </span>{" "}
            {playerInfo.statistics.games_won}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Games Played:{" "}
            </span>{" "}
            {playerInfo.statistics.games_played}
          </p>
          <p>
            <span className="font-semibold first-letter:capitalize">
              Active:{" "}
            </span>{" "}
            {playerInfo.active ? "Yes" : "No"}
          </p>
        </div>

        <div className="flex justify-end">
          <button onClick={handleStatus} className=" text-white  mr-2  mt-5 bg-green-500/90 hover:bg-green-500 rounded-md  border pl-3 pr-3 pb-1 pt-1">
            {playerInfo.active ? "Deactivate Account" : "Activate Accout"}
          </button>
          <button
            onClick={openUpdateModal}
            className=" text-white bg-blue-500/90 hover:bg-blue-500  mr-2  mt-5  rounded-md  border pl-3 pr-3 pb-1 pt-1"
          >
            Update
          </button>

          <button
            onClick={onClose}
            className=" text-white   mt-5 bg-orange-500/90 hover:bg-orange-500  rounded-md  border pl-3 pr-3 pb-1 pt-1"
          >
            Close
          </button>
        </div>
      </div>
      <div>
        <PlayerUpdateModal
          modalOpen={modalOpen}
          modalClose={modalClose}
          id={playerInfo.id}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default PlayerModal;
