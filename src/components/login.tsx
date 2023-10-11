import React from 'react'

const Login = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[100vh]  ">
      <h1 className=" font-bold text-lg">Login to your account</h1>
      <form
        className="  w-[45%] p-5 rounded-md xl:w-[20%] h-[30%] flex items-center flex-col pl-[40px] pr-[40px] "
      >
        <div className="flex flex-col m-2 w-full">
          <label className="font-extralight mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300  h-9 pl-2 rounded-md font-light text-sm  outline-none focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out "
            type="email"
            placeholder="Enter your email"
            id="email"
            required

          />

        </div>

        <div className="flex flex-col m-2 w-full">
          <label className="font-extralight mb-1" htmlFor="country">
            Country
          </label>
          <input
            className="border border-gray-300  h-9 pl-2 rounded-md font-light text-sm  outline-none focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out "
            type="text"
            placeholder="Enter your country"
            id="country"

            required
          />

        </div>

        <div className="flex flex-col m-2 w-full">
          <label className="font-extralight mb-1 " htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-300 outline-none h-9 pl-2 rounded-md font-light text-sm focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out"
            type="password"
            placeholder="Enter your password"
            id="password"

            required
          />
      
        </div>

        <button
          className=" text-[.875rem] h-[2.25rem] 
          font-extralight text-white bg-blue-500 w-full pt-2 pb-2
            rounded-md mt-3 hover:bg-blue-600 transition-all ease-in-out"
          type="submit"
        >
          Signin
        </button>

        <p className="font-extralight text-md mt-4">
          Don&apos;t have account?{" "}
          <span className="text-blue-700 hover:underline underline-offset-1">

          </span>
        </p>
      </form>
    </section>
  );
}

export default Login