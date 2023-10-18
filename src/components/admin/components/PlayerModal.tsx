import React from 'react';

const PlayerModal = ({ isOpen, onClose, playerInfo }:{isOpen:boolean, onClose:any, playerInfo:any}) => {
  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
    <div className="bg-white p-8 rounded shadow-md">
      

      <div>
      <h2 className="text-xl font-semibold mb-4">Player Information</h2>
      <p> <span className='font-semibold first-letter:capitalize'> Name: {playerInfo.name} </span> </p>
      <p><span className='font-semibold first-letter:capitalize'>Country: </span> {playerInfo.country}</p>
      <p><span className='font-semibold first-letter:capitalize'>Id: </span> {playerInfo.id}</p>
      <p><span className='font-semibold first-letter:capitalize'>Rank: </span> {playerInfo.rank ? playerInfo.rank : "Not Found"}</p>
      <p><span className='font-semibold first-letter:capitalize'>Coins: </span> {playerInfo.statistics.coins}</p>
      <p><span className='font-semibold first-letter:capitalize'>Experience Points: </span> {playerInfo.statistics.experience_point}</p>
      <p><span className='font-semibold first-letter:capitalize'>Games Won: </span> {playerInfo.statistics.games_won}</p>
      <p><span className='font-semibold first-letter:capitalize'>Games Played: </span> {playerInfo.statistics.games_played}</p>
      <p><span className='font-semibold first-letter:capitalize'>Active: </span> {playerInfo.active ? 'Yes' : 'No'}</p>
      
      </div>
      <div className='flex justify-end'>
      <button onClick={onClose} className=" text-white   mt-5 bg-orange-500/90 hover:bg-orange-500 rounded-md  border pl-3 pr-3 pb-1 pt-1">
        Close
      </button>

      </div>
      
    
    </div>
  </div>
  );
};

export default PlayerModal;