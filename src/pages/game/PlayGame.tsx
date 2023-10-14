import React, { useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'


const PlayGame = () => {

    let isMounted = true;
    const controller = new AbortController();
     const axiosPrivate = useAxiosPrivate();

    // console.log(auth?.accessToken);
    

    const [gamePlayed, setGamePlayed] = React.useState(0)
    const [gameWon, setGameWon] = React.useState(0)
    const [experiencePoint, setExperiencePoint] = React.useState(0)
    const [coins, setCoins] = React.useState(0) 
    const [message, setMessage] = React.useState('')

  const playGame = async () => {
       const res = await axiosPrivate.get('/player/play/game',  {
              signal: controller.signal,
            }
        )
        // console.log(res);
        // console.log(res?.data);
        // console.log(res?.data.data.games_played);
        // console.log(res?.data.message);

        setCoins(res?.data.data.coins)
        setExperiencePoint(res?.data.data.experience_point)
        setGamePlayed(res?.data.data.games_played)
        setGameWon(res?.data.data.games_won)
        setMessage(res?.data.message)
       
         isMounted 
    }

    useEffect(()=>{
        playGame()
        return () => {
            // isMounted && controller.abort();
        
            isMounted = false;
            // controller.abort();
        }
    },[])

    

    
  return (
    <div className="h-[80vh]  mt-8">
      <div className="h-[70%] flex flex-col  ">
        <section className="flex justify-evenly h-[70%]">
          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16  bg-slate-400/20 w-[15rem] shadow-md ">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">
              {gamePlayed}
            </span>

            <p className="text-xl font-semibold text-blue-600 pb-4">
              Game Played
            </p>
          </div>

          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16 bg-slate-400/20 w-[15rem] shadow-md">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">
              {gameWon}
            </span>
            <p className="text-xl  font-semibold text-blue-600 pb-4">
              Game Won
            </p>
          </div>

          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16 bg-slate-400/20 w-[15rem] shadow-md">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">
              {experiencePoint}
            </span>
            <p className="text-xl font-semibold text-blue-600 pb-4">Points</p>
          </div>

          <div className="flex flex-col justify-evenly h-36 items-center mt-16 mb-16 bg-slate-400/20 w-[15rem] shadow-md">
            <span className="text-[4rem] text-blue-600 pl-6 pr-6">{coins}</span>
            <p className="text-xl font-semibold text-blue-600 pb-4 ">Coins</p>
          </div>
        </section>
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-blue-600 pb-4">
            {message === "game lost" ? (
              <p className="text-red-500 text-[24px]">
                Sorry! you lost the game.
              </p>
            ) : (
              <p className="text-blue-600 text-[24px]">
                Congrulation you won the game.
              </p>
            )}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={playGame}
          className=" bg-amber-500 hover:bg-amber-600 pl-8 pr-8  pt-4 pb-4 rounded-md "
        >
          Play Game
        </button>
      </div>
    </div>
  );
}

export default PlayGame