import React from 'react'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import "./carresult.css"
import { format } from "date-fns";
import Footer2 from "./Footer2"



const CarResult = () => {
const location = useLocation();
const navigation = useNavigate();


function handleEdit(){
    navigation("/carrentals")
}

  return (
    <>
    <Navbar/>
    <div className="carResultCont">
        <div className="firstBox">
            <div className="pickup">
                <span> <b> Pickup- location: </b> {location.state.from}</span> 
                <span><b>Drop location: </b> {location.state.to}</span>
                <span><b> Date: </b>{format(location.state.date[0].startDate, "dd/mm/yyyy")} - {format(
            location.state.date[0].endDate,
            "dd/mm/yyyy"
          )}</span>
            </div>

            <div className="edit">
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
        <div className="scndBox">
            <p className='nocars'>No cars available</p>
            <p>We're sorry, buy the companies we work in <b> {location.state.from} </b>don't have any cars available</p>
            <p className='cando'>What can I do?</p>
            <p>You could try:</p>
            <ul>
                <li>Changing your pick-up time or date</li>
                <li>Changing your drop-off time or date</li>
                <li>Searching for a car in a nearby location</li>
            </ul>
        </div>
        <Footer2/>
    </div>
    </>
  )
}

export default CarResult