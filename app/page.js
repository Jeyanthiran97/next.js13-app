
"use client"

import React, { useEffect, useState } from 'react'
import Loading from './loading';
import Users from './components/Users';
import UserSearch from './components/UserSearch';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchUsers = async()=>{
      const res = await fetch("/api/users")
      const data = await res.json();
      setUsers(data);
      setLoading(false)
    }

    fetchUsers()

  },[])

  // console.log(users);

  if(loading){
    return <Loading />
  }

  return (
    <div>
      <h3>Welcome to Home</h3>
      <UserSearch searchResults={(results) => setUsers(results)} />
      <Users users={users}/>
    </div>
  )
}

export default Home