import React, { useEffect } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

import useAuth from "../../../hooks/useAuth";

type LeaderBoardType = {
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
const LeaderBoard = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const [leaderBoard, setLeaderBoard] = React.useState<LeaderBoardType[]>([]);
  // const [message, setMessage] = React.useState<string>("");

  const fetchLeaderBoard = async () => {
    const res = await axiosPrivate.get("/player/leaderboard", {
      headers: {
        Authorization: `Bearer ${auth?.accessToken}`,
      },
    });
    setLeaderBoard(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    fetchLeaderBoard();

    const pollInterval = setInterval(() => {
      fetchLeaderBoard();
    }, 10000);

    return () => {
      clearInterval(pollInterval);
    };
  }, []);

  return (
    <section className="mt-[12rem]">
      <div>
        <div className="flex justify-center flex-col ">
          <h1 className="text-center text-3xl font-bold ml-7">Leaderboard</h1>
          <div className=" mt-6 md:w-[75vw] ml-8 mr-6 flex justify-center">
            <div className="table ">
              <table className="table-auto shadow-lg bg-white ">
                <thead>
                  <tr>
                    <th className="bg-blue-100 border text-left  border-gray-100 px-10 py-4">
                      Rank
                    </th>
                    <th className="bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Name
                    </th>
                    <th className=" bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Active
                    </th>
                    <th className="bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Country
                    </th>
                    <th className="bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Games Won
                    </th>
                    <th className="bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Games Played
                    </th>
                    <th className="bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Points
                    </th>
                    <th className="bg-blue-100 border text-left border-gray-100 px-10 py-4">
                      Coins
                    </th>
                  </tr>
                </thead>
                {leaderBoard &&
                  leaderBoard?.map((item: LeaderBoardType, index: number) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td className="border px-8 py-4">{item.rank}</td>
                          <td className=" border px-8 py-4">{item.name}</td>
                          <td className="border px-8 py-4">
                            {item.active ? (
                              <span className="text-green-500">Active</span>
                            ) : (
                              <span className="text-red-500">Inactive</span>
                            )}
                          </td>
                          <td className=" border px-8 py-4">{item.country}</td>
                          <td className=" border px-8 py-4">
                            {item.statistics?.games_won}
                          </td>
                          <td className=" border px-8 py-4">
                            {item.statistics?.games_played}
                          </td>
                          <td className=" border px-8 py-4">
                            {item.statistics?.experience_point}
                          </td>
                          <td className=" border px-8 py-4">
                            {item.statistics?.coins}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
