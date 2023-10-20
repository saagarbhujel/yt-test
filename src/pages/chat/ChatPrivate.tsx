import LeftAside from "../../components/LeftAside";
import NavBar from "../home/NavBar";
import ChatContainerPrivate from "./ChatContainerPrivate";

const ChatPrivate = () => {
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
            <div className=" flex justify-center items-center w-full h-[87vh] py-4 mt-4 mb-4 ml-8">
              <ChatContainerPrivate />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPrivate;
