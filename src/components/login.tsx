import React,{useState, useEffect, useRef} from 'react'
import axios from '../api/axios'
import useAuth from '../hooks/useAuth';
import {Link, useNavigate, useLocation} from 'react-router-dom';

const Login = () => {
  const {setAuth} = useAuth()


  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';


  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [errMsg, setErrMsg] = useState("");


      useEffect(()=>{
        userRef.current?.focus()
      },[])

      useEffect(()=>{
        setErrMsg("")
      },[email, password])

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       try {
        const res = await axios.post('/player',JSON.stringify({
          email,
          password,
        }),{
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const accessToken = res?.data?.accessToken;
        const refreshToken = res?.data?.refreshToken;
        const role = res?.data?.role;
        setAuth({role, accessToken,refreshToken,email})
         navigate(from, { replace: true });
        setEmail("")
        setPassword("")
       
       } catch (error:any) {
        if(!error?.response){
          setErrMsg('Network Error')
        }else if(error.response?.status === 401){
          setErrMsg('Invalid email or password')

        } else if(error.response?.status === 400){
          setErrMsg('Unauthorized')

        }else{
          setErrMsg('Authentication failed')
        } 
        errRef.current?.focus()
      }
       }
       
    

  return (
    <section className="flex flex-col justify-center items-center h-[100vh]  ">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className=" font-bold text-lg">Login to your account</h1>
      <form
        onSubmit={handleSubmit}
        className="  w-[45%] p-5 rounded-md xl:w-[20%] h-[30%] flex items-center flex-col pl-[40px] pr-[40px] "
      >
        <div className="flex flex-col m-2 w-full">
          <label className="font-extralight mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300  h-9 pl-2 rounded-md font-light text-sm  outline-none focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out "
            type="email"
            ref={userRef}
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        {
          <p className="text-red-500 text-[0.8rem]">
            {/* {!success ? errMsg : null} */}
          </p>
        }

        <p className="font-extralight text-md mt-4">
          Don&apos;t have account?{" "}
          <span className="text-blue-700 hover:underline underline-offset-1">
            <Link to="/signup">Signup</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login