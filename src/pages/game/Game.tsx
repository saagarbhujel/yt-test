import React from 'react'
import LeftAside from "../../components/LeftAside";
import NavBar from "../home/NavBar";
import PlayGame from './PlayGame';

const Game = () => {
  return (
    <section className="flex">
      <div className="fixed">
        <LeftAside />

      </div>
      <div className=" ml-[20vw]">
        <NavBar />
        <PlayGame />
      </div>
    </section>
  );
}

export default Game