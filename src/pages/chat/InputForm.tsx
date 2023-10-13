import React,{useState,useEffect} from 'react'

const InputForm = () => {
    const [message, setMessage] = useState('')

    const messageSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(message);
        setMessage('')
    }
  return (
    <div className="  ml-6 bg-black ">
      <div className="flex items-center justify-center absolute bottom-3 h-12   w-[70vw] ">
        <form onSubmit={messageSubmit} action="" className=" h-full w-[70vw] flex items-center">
          <input
            className="border border-r-0 rounded-l outline-none w-[70vw] h-full  pl-4 shadow-sm "
            id="message"
            placeholder="Write message"
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
          <button type='submit' className="h-full border  pl-2 pr-2 rounded-r border-l-0">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm