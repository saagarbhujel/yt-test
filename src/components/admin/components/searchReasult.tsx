import React, { useState } from "react";
import AdminLeftAside from "./adminAside";
import AdminNavBar from "./adminNav";
import { useLocation } from "react-router-dom";
import PlayerModal from "./PlayerModal";
import useSearch from "../../../hooks/useSearch";

type searchItemType = {
  name: string;
  active: boolean;
  rank: string;
  country: string;

  statistics: {
    coins: number;
    experience_point: number;
    games_played: number;
    games_won: number;
  };
};

const SearchReasult = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<searchItemType | null>(
    null
  );

  const { loading } = useSearch();



  const location = useLocation();
  const { searchResult } = location.state;

  const openModal = (player: searchItemType) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
    setIsModalOpen(false);
  };


  return (
    <>
      <section className="flex ">
        <div className="fixed">
          <AdminLeftAside />
        </div>

        <div className=" ml-[20vw]">
          <AdminNavBar />
          <div className="mt-[8rem] ml-32 mb-16">
            <h2 className=" text-[28px] font font-semibold mb-10">
              Search Reasults
            </h2>
            <div className="w-[75vw] ">
              {loading ? <p>Loading...</p> : null}
              {searchResult.length === 0 ? (
                <p>No results found.</p>
              ) : (
                searchResult &&
                searchResult?.map((item: searchItemType, index: number) => {
                  return (
                    <div
                      className="flex items-center  justify-start mb-2"
                      key={index}
                    >
                      <div className=" w-[20vw] h-20 flex  items-center">
                        <div className="flex items-center justify-between   border border-gray-500 pr-2 rounded-md w-full h-full">
                          <p className=" first-letter:capitalize font-semibold ml-8 mr-8">
                            {item.name}
                          </p>
                          <p className="ml-8 mr-8">{item.country}</p>
                          <button onClick={() => openModal(item)}>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <PlayerModal
              isOpen={isModalOpen}
              onClose={closeModal}
              playerInfo={selectedPlayer}
            />
          </div>      
        </div>
      </section>
    </>
  );
};

export default SearchReasult;
