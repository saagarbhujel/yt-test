
import { Link } from "react-router-dom";
import { useActiveSectionContext } from "../context/active-section-context";
import { navLinks } from "./constants/Credentials";
import clsx from "clsx";

const LeftAside = () => {

     const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section className="  w-[20vw] h-[100vh] flex items-center  flex-col border-r   ">
        <div className="">
          <div className="mt-8 mb-12">
            <h1 className="text-center  text-[32px] font-bold">
              {/* <Link to={"/"}>Yarsha Play</Link> */}
            </h1>
          </div>

          <div className="     w-[17vw] h-[90vh] rounded-md mt-[8rem]">
            <ul className="flex  flex-col justify-center md:items-center items-start ml-[4px] ">
              {navLinks.map((link) => (
                <Link
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
          </div>
        </div>
      </section>
    </>
  );
};



export default LeftAside