import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Flight = () => {
  const location = useLocation();
console.log(location);

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Flight