import { useState,useEffect } from "react";
import axios from "../api/axios";
import React from 'react'
import useRefreshToken from "../hooks/useRefreshToken";

const Users = () => {

  const [users, setUsers] = useState([{}])
  const refresh = useRefreshToken()

  useEffect(()=>{
    let isMounted = true;
    const controller = new AbortController();
    
    const getUsers = async () => {
    
      try{
        const res= await axios.get('/player', {
          signal: controller.signal,
        })
        console.log(res?.data);
        isMounted && setUsers(res?.data)

      }catch(error){
        console.log(error)
        
      }

      getUsers()
      return () => {
        isMounted = false;
        controller.abort();
      };
    }},[])


  return (
    <article>
     {
      users?.length 
      ? (
        <ul>

          {
            users?.map((user:any, i:number) => (
              <li key={i}>
                {user?.name}
              </li>
            ))

          }
        </ul>
      ) : (
        <p>No users to display</p>
      )

     }
    <button onClick={()=>refresh()}>Refresh</button>
    <br />
      </article>
  )
}

export default Users