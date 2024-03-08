import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import FlightHeader from './FlightHeader';

const Flight = () => {
  const location = useLocation();
console.log(location);

  return (
    <div>
        <Navbar/>
        <FlightHeader/>
    </div>
  )
}

export default Flight