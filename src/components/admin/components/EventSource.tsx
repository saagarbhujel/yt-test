


import React, { useEffect, useState } from 'react';

type MsgPropsType = {
  message: string;
  [key: string]: any;
}

const EventHandle= () => {
  const [showMessage, setShowMessage] = useState(false);

  const [serverData, setServerData] = useState<MsgPropsType>({message: ""});
  // console.log(serverData);
  // console.log(serverData.message);
  
  
  
  

  useEffect(() => {
    const source = new EventSource(`http://localhost:8080/sse/event`);

    source.addEventListener('open', () => {
      console.log('SSE opened!');
    });

    source.addEventListener('message', (e) => {
      // console.log(e.data);
      // const data = JSON.parse(e.data.message);
      const data = e.data;
      // console.log(data);
      setServerData(data);
      setShowMessage(true);

      // Set a timer to hide the message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
  
      
      
      
    });

    source.addEventListener('error', (e) => {
      console.error('Error: ',  e);
    });

    return () => {
      source.close();
    };
  }, [serverData]);

  const messages = Object.keys(serverData).map((key) => serverData[key]).join("");

  return (
    <div>
    
    {showMessage && (
        <h3 className='bg-green-500/20 pl-2 pr-2 p-2 rounded-md'>
          {messages}
        </h3>
      )}
    </div>
  );
}

export default EventHandle;