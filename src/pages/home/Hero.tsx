import React from 'react'


const Hero = () => {
  return (
    <div className=" mt-[7vh]  flex justify-evenly items-center h-[44vh]">
      <div className="bg-gray-500/10 h-full w-[50%] m-4 ml-8 flex items-center justify-center">
        Left
      </div>
      <div className=" h-full w-[50%] m-4 mr-8 flex items-center justify-center">
        {" "}
        <img
          className="h-[40vh] w-[50vh]"
          src="public/assets/ludo.png"
          alt="Dice Image"
        />
      </div>
    </div>
  );
}

export default Hero
