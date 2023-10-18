import React from 'react'
// import Users from '../../Player';

import NavBar from '../../../pages/home/NavBar';

import AddUser from './addUser';
import AdminLeftAside from './adminAside';
import AdminNavBar from './adminNav';


const Dashboard = () => {
  return (
    <>
      <section className="flex">
        <div className="fixed">
          <AdminLeftAside />
        </div>
        
        <div className=" ml-[20vw]">
          <AdminNavBar />
         <AddUser />
        </div>
        
      </section>
    </>
  );
}

export default Dashboard