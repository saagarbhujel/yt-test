
import LeftAside from '../../components/LeftAside'
import RoomChat from './RoomChat'
import PrivateChat from './PrivateChat'
import NavBar from '../home/NavBar'


const Chat = () => {

  return (
    <section className="  w-[100vw]  ">
      <div className="flex">
        <div className="w-[20vw] h-full ">
          {/* <SideNav /> */}
          <LeftAside />
        </div>

        <div className="w-[80vw] ">
          <div className="fixed bg-white w-full">
            <NavBar />
          </div>
          <div className=" flex justify-center items-center  h-[87vh] py-4 mt-4 mb-4 ">
          <RoomChat />
          <PrivateChat />
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Chat