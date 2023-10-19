import React, { useEffect } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const PlayGame = () => {
  const { auth } = useAuth();
  let isMounted = true;
  const controller = new AbortController();

  const [gamePlayed, setGamePlayed] = React.useState();
  const [gameWon, setGameWon] = React.useState();
  const [experiencePoint, setExperiencePoint] = React.useState();
  const [coins, setCoins] = React.useState();
  const [message, setMessage] = React.useState("");

  const playGame = async () => {
    const res = await axios.get("/player/play/game", {
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    });

    setCoins(res?.data.data.coins);
    setExperiencePoint(res?.data.data.experience_point);
    setGamePlayed(res?.data.data.games_played);
    setGameWon(res?.data.data.games_won);
    setMessage(res?.data.message);

    isMounted;
  };

  useEffect(() => {
    playGame();
    return () => {
      // isMounted && controller.abort();

      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="h-[80vh]  mt-8">
      <div className="h-[70%] flex flex-col  ">
        <section className="flex justify-evenly h-[70%]">
          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16  bg-green-400/10 w-[15rem] shadow-md ">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">
              {gamePlayed}
            </span>

            <p className="text-xl font-semibold text-blue-600 pb-4">
              Game Played
            </p>
          </div>

          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16 bg-green-400/10 w-[15rem] shadow-md">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">
              {gameWon}
            </span>
            <p className="text-xl  font-semibold text-blue-600 pb-4">
              Game Won
            </p>
          </div>

          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16 bg-green-400/10 w-[15rem] shadow-md">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">
              {experiencePoint}
            </span>
            <p className="text-xl font-semibold text-blue-600 pb-4">Points</p>
          </div>

          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16 bg-green-400/10 w-[15rem] shadow-md">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">{coins}</span>
            <p className="text-xl font-semibold text-blue-600 pb-4 ">Coins</p>
          </div>
        </section>
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-blue-600 pb-4">{message}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={playGame}
          className=" bg-amber-500/80 hover:bg-amber-500 pl-8 pr-8  pt-4 pb-4 rounded-md shadow-md text-[18px] font-semibold "
        >
          Play Game
        </button>
      </div>
    </div>
  );
};

export default PlayGame;
