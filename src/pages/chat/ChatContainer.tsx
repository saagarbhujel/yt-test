import React from 'react'

const ChatContainer = () => {
  return (
    <>
      <div className=" ">
        <ChatSender />
        <ChatReceiver />
        <ChatSender />
      </div>
    </>
  );
}

export default ChatContainer

export const ChatReceiver = () => {
return (
  <div className='flex item-start flex-col'>
    <section className=" mt-6 ml-3 ">
      <div className="flex px-2 items-center ">
        <div className=" w-14 h-14 bg-gray-600 rounded-full mr-3" />
        <div className=" bg-gray-100 rounded-md p-5 ">
          <p>Hello there</p>
        </div>
      </div>
    </section>
    <section className="mt-6 ml-3 ">
      <div className="flex px-2 items-center max-w-[50vw] ">
        <div className=" w-14 h-14 bg-gray-600 rounded-full mr-3" />
        <div className=" bg-gray-100 rounded-md p-5 ">
          <p>
            Hello there how are you my friends fsjdf sdhljhsl sdfgjh ljgh
            dsfjlgh sdlfgs ghlhfg s
          </p>
        </div>
      </div>
    </section>
  </div>
);
}


export const ChatSender = () => {

  return (
    <div className='flex items-end flex-col'>
    
      <section className="mt-6   mr-2">
        <div className="flex px-2 items-center max-w-[40vw] ">
          <div className=" bg-gray-100 rounded-md p-5 ">
            <p>
              Hello there how are you my friends fsjdf sdhljhsl sdfgjh ljgh
              dsfjlgh sdlfgs ghlhfg s
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}