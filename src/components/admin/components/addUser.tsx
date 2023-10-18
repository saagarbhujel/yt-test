import React from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";

const AddUser = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(name, email, role, password);
    
try {
    const res = await axiosPrivate.post(
        "/user",
        {
          name,
          email,
          password,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${auth?.accessToken}`,
          },
        }
      );
      setEmail("");
        setName("");
        setRole("");
        setPassword("");
    //   console.log(res.data.message);
        setSuccessMsg(res.data.message);
        setTimeout(() => {
            setSuccessMsg("");
            setErrMsg("");
          }, 3000);
      
} catch (error: any) {
    setErrMsg(error.response.data.message);
}
    
  };

  const handleCancleClick = () => {
    setEmail("");
    setName("");
    setRole("");
    setPassword("");
  };

 
  return (
    <section className="mt-[25vh] ml-32">
     
            <p className="text-red-500 font-semibold first-letter:capitalize text-center">
              {successMsg || errMsg}

            </p>
       
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 p-10 rounded-md md:w-[25vw]"
      >
        <div className=" ">
          <h2 className="text-[2.8rem] font-semibold leading-7 text-gray-900">
            Add User
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 md:col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="block w-full pl-2 outline-none border rounded-md  py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400    sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4 md:col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="block pl-2 w-full outline-none rounded-md border py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <select
                  id="role"
                  name="role" 
                  required
                  value={role}
                    onChange={(e) => setRole(e.target.value)}
                  className="block outline-none pl-2 pr-2 w-full rounded-md border py-1.5 text-gray-900 shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6"
                >
                     <option value={""}  >Choose a role</option>
                  <option value={"admin"}  >Admin</option>
                  <option value={"staff"}>Staff</option>
                </select>
              </div>
            </div>

            <div className=" sm:col-span-3 md:col-span-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  required
                  placeholder="Enter password"
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md  px-6 py-2 text-sm font-semibold text-white shadow-sm   bg-blue-500/90 hover:bg-blue-500 "
          >
            Add
          </button>
          <button
            onClick={handleCancleClick}
            type="button"
            className="rounded-md  px-6 py-2 text-sm font-semibold text-white shadow-sm   bg-orange-500/90 hover:bg-orange-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddUser;
