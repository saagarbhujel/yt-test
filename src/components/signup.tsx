import React, { useState, useEffect, useRef } from "react";
import axios from '../api/axios'
import { Link, useNavigate, useLocation } from "react-router-dom";



const USER_REGEX = /^[A-Za-z\s-']+$/ ;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const COUNTRY_REGEX = /^[a-z]{2}$/;



const Signup = () => {
      const userRef = useRef<HTMLInputElement>(null);
      const errRef = useRef<HTMLInputElement>(null);

       const navigate = useNavigate();
       const location = useLocation();
      const from = location.state?.from?.pathname || "/login";


      const [name, setName] = useState("");
      const [validName, setValidName] = useState(false);
      const [nameFocus, setNameFocus] = useState(false);



      const [email, setEmail] = useState("");
      const [validEmail, setValidEmail] = useState(false);
      const [emailFocus, setEmailFocus] = useState(false);


      const [country, setCountry] = useState("");
      const [validCountry, setValidCountry] = useState(false);
      const [countryFocus, setCountryFocus] = useState(false);


      const [password, setPassword] = useState("");
      const [validPassword, setValidPassword] = useState(false);
      const [passwordFocus, setPasswordFocus] = useState(false);

      const [confirmPassword, setconfirmPassword] = useState("");
      const [validconfirmPassword, setValidconfirmPassword] = useState(false);
      const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);


      const [errMsg, setErrMsg] = useState("");
      const [success, setSuccess] = useState(false);


      useEffect(()=>{
        userRef.current?.focus()
      },[])

    useEffect(() => {
      const result = USER_REGEX.test(name);
      setValidName(result);
    },[name])

    useEffect(()=>{
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
    },[email])

    useEffect(()=>{
      const result = COUNTRY_REGEX.test(country)
      setValidCountry(result)
    },[country])

    useEffect(()=>{
      const result = PWD_REGEX.test(password)
      setValidPassword(result)
      const match = password === confirmPassword
      setValidconfirmPassword(match)
    },[password, confirmPassword])

    useEffect(()=>{
      setErrMsg("")
    },[name, email, country, password, confirmPassword])



    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const res = await axios.post('/player',JSON.stringify({
          name,
          email,
          country,
          password,
        }),{
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )
        // console.log(res.data);
        // console.log(res.status);
        // console.log(res.data.accessToken);
        // console.log(res.data.role);
        
        if(res.status === 201){
          console.log('success');
           navigate(from, { replace: true });
        }
        setSuccess(true)
      } catch (error:any) {
        
        if(!error?.response){
          setErrMsg('Network Error')
        }else if(error?.response.status === 400){
          setErrMsg('Invalid email or password')

        }else{
          setErrMsg('Registration failed')
        } 
        
      }
    }

  return (
    <section className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex justify-center items-center flex-col">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className=" font-bold text-lg">Create an account</h1>
        <p
          ref={userRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <p className="font-light text-[13px]">
          Please fill the form below to create your account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="   p-5 rounded-md  flex items-center  flex-col pl-[40px] pr-[40px] "
        >
          <div className="flex flex-col m-2 w-full">
            <label className="font-extralight mb-1" htmlFor="name">
              Full Name
            </label>
            {!validName && nameFocus ? (
              <p
                className="errmsg text-[0.8rem] mb-1 text-red-500"
                aria-live="assertive"
              >
                Invalid name
              </p>
            ) : null}
            <input
              className="border border-gray-300  h-9 pl-2 rounded-md font-light text-sm  outline-none focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out "
              type="text"
              autoComplete="off"
              ref={userRef}
              placeholder="Enter your full name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />
          </div>

          <div className="flex flex-col m-2 w-full">
            <label
              className="font-extralight xl:font-light mb-1"
              htmlFor="email"
            >
              Email
            </label>
            {!validEmail && emailFocus ? (
              <p
                className="errmsg text-[0.8rem] mb-1 text-red-500"
                aria-live="assertive"
              >
                Invalid email
              </p>
            ) : null}
            <input
              className="border border-gray-300  h-9 pl-2 rounded-md font-light text-sm  outline-none focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out "
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </div>

          <div className="flex flex-col m-2 w-full">
            <label
              className="font-extralight xl:font-light mb-1 "
              htmlFor="password"
            >
              Password
            </label>
            {!validPassword && passwordFocus ? (
              <p
                className="errmsg text-[0.8rem] mb-1 text-red-500"
                aria-live="assertive"
              >
                Invalid password
              </p>
            ) : null}
            <input
              className="border border-gray-300 outline-none h-9 pl-2 rounded-md font-light text-sm focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out"
              type="password"
              placeholder="Create a strong password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </div>

          <div className="flex flex-col m-2 w-full">
            <label
              className="font-extralight xl:font-light mb-1 "
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            {!validconfirmPassword && confirmPasswordFocus ? (
              <p
                className="errmsg text-[0.8rem] mb-1 text-red-500"
                aria-live="assertive"
              >
                Password does not match
              </p>
            ) : null}
            <input
              className="border border-gray-300 outline-none h-9 pl-2 rounded-md font-light text-sm focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out"
              type="password"
              placeholder="Rewrite your password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              required
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
          </div>

          <div className="flex flex-col m-2 w-full">
            <label
              className="font-extralight xl:font-light mb-1 "
              htmlFor="country"
            >
              Country
            </label>
            {!validCountry && countryFocus ? (
              <p
                className="errmsg text-[0.8rem] mb-1 text-red-500"
                aria-live="assertive"
              >
                Invalid country
              </p>
            ) : null}
            <input
              className="border border-gray-300 outline-none h-9 pl-2 rounded-md font-light text-sm focus:border-blue-300 focus:ring-4 ring-blue-500/20  transition-all ease-in-out"
              type="text"
              placeholder="Choose your country {np, au, us, af,in}"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              onFocus={() => setCountryFocus(true)}
              onBlur={() => setCountryFocus(false)}
            />
          </div>

          <button
            className=" text-[.875rem] h-[2.25rem] 
          font-extralight text-white bg-blue-500 w-full pt-2 pb-2
            rounded-md mt-3 hover:bg-blue-600 transition-all ease-in-out"
            type="submit"
            disabled={
              !validName ||
              !validEmail ||
              !validCountry ||
              !validPassword ||
              !validconfirmPassword
                ? true
                : false
            }
          >
            Sign Up
          </button>

          {success ? (
            <p className="font-extralight text-md mt-4">
              Registration successful
            </p>
          ) : null}

          <p className="font-extralight text-md mt-4">
            Already have an account?
            <span className="text-blue-700 hover:underline underline-offset-1">
              <Link to="/login">Signin</Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
