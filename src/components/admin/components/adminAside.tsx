
import { Link } from "react-router-dom";

import { navLinksAdmin } from "../../constants/Credentials";
import clsx from "clsx";
import UseLogout from "../../../hooks/useLogout";
import { useActiveSectionContext } from "../../../context/active-section-context";
import Search from "../../Search";


const AdminLeftAside = () => {
  const logout = UseLogout()



     const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();


     const handleLogout = () => {
        logout()
     }

  return (
    <>
      <section className=" md:w-[20vw] md:h-[100vh] hidden md:flex items-center  flex-col md:border-r   ">
        <div>
          <div className="mt-8 mb-12 w-full ">
            
             {/* <Search /> */}
          </div>

          <div className="     w-[17vw] h-[80vh] rounded-md mt-[8rem] flex flex-col justify-between ">
            <ul className="flex  flex-col justify-center md:items-center items-start ml-[4px] ">
              {navLinksAdmin.map((link , index) => (
                <Link
                key={index}
                  className={clsx("w-full  text-gray-400  transition btn", {
                    "text-black": active === link.title,
                  })}
                  to={link.path}
                  onClick={() => {
                    {
                      setActive(link.title);
                      setTimeOfLastClick(Date.now());
                    }
                  }}
                >
                  <li
                    key={link.id}
                    className={clsx(
                      " w-[30px] md:w-[204px] cursor-pointer hover:bg-blue-600/95 hover:text-black  md:pr-[24px] md:pt-[16px] md:pb-[16px] rounded-[16px] mb-[5px] mt-[5px] flex items-center  ",
                      {
                        " bg-blue-600/95 text-white hover:text-white h-f[20px] w-[30px] ":
                          active === link.title,
                      }
                    )}
                  >
                    <p className="hidden md:block w-full   pl-[24px]">
                      {link.title}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex  flex-col justify-center md:items-center items-start ml-[4px]">
              <button
                onClick={handleLogout}
                className="bg-amber-500 hover:bg-amber-500/80 pl-8 pr-8 text-white pt-3 pb-3 mb-8 rounded-md shadow-md text-[18px] font-semibold  "
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default AdminLeftAside