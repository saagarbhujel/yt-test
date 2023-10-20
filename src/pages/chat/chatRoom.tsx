import LeftAside from "../../components/LeftAside";
import NavBar from "../home/NavBar";

import ChatContainer from "./ChatContainer";

const ChatRoom = () => {
  const roomName = localStorage.getItem("room");

  return (
    <>
      <section className="  w-[100vw]  ">
        <div className="flex">
          <div className="w-[20vw] h-full  ">
            {/* <SideNav /> */}
            <LeftAside />
          </div>

          <div className="w-[90vw]   ">
            <div className="fixed bg-white w-full">
              <NavBar />
            </div>
            <div className=" flex justify-center items-center w-full h-[87vh] py-4 mt-4 mb-4 ">
              {!roomName ? (
                <div className="flex justify-center ">
                  <button className=" outline-none rounded-md bg-green-400 pl-2 pr-2 p-2 text-black">
                    JoinRoom
                  </button>
                </div>
              ) : (
                <div>
                  <ChatContainer />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatRoom;
