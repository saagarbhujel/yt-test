
import { useNavigate ,useLocation } from 'react-router-dom';

const SideNav = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/', { state: { from: location.pathname } })
        
    }
  return (
    <section className="  w-[20vw] h-[100vh] flex flex-col border-r  border-black ">
      <div className="">
        <div className=" w-full flex px-6">
          <button onClick={handleClick}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <h2 className="text-[2rem] pl-4 ">Chats</h2>
        </div>
        <div>
          <div className=" h-[5vh] mt-4 flex justify-center">
            <input
              type="search"
              placeholder="Search"
              className=" w-[14vw] h-full border border-r-0 outline-none pl-2  rounded-l"
            />
            <button className=" w-[2.2vw] h-full border border-l-0 rounded-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 ">
            <div className="hover:bg-gray-400 cursor-pointer  h-20 flex px-4  items-center">
              <div className="w-[4rem] h-[4rem] bg-black rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl">John Doe</h3>
                <p>Hey there</p>{" "}
              </div>
            </div>
            <div className="hover:bg-gray-400 cursor-pointer h-20 flex px-4  items-center">
              <div className="w-[4rem] h-[4rem] bg-black rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl">John Doe</h3>
                <p>Hey there</p>{" "}
              </div>
            </div>
            <div className="hover:bg-gray-400 cursor-pointer h-20 flex px-4  items-center">
              <div className="w-[4rem] h-[4rem] bg-black rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl">John Doe</h3>
                <p>Hey there</p>{" "}
              </div>
            </div>

            <div className="hover:bg-gray-400 cursor-pointer h-20 flex px-4  items-center">
              <div className="w-[4rem] h-[4rem] bg-black rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl">John Doe</h3>
                <p>Hey there</p>{" "}
              </div>
            </div>
            <div className="hover:bg-gray-400 cursor-pointer h-20 flex px-4  items-center">
              <div className="w-[4rem] h-[4rem] bg-black rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl">John Doe</h3>
                <p>Hey there</p>{" "}
              </div>
            </div>
            <div className="hover:bg-gray-400 cursor-pointer h-20 flex px-4  items-center">
              <div className="w-[4rem] h-[4rem] bg-black rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl">John Doe</h3>
                <p>Hey there</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideNav