import React from 'react'
import "./flightresult.css"
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";

const FlightResult = () => {
const location = useLocation();


function handleDetails(){
  alert("SORRY! doesn't work right now")
}

  return (
    <>
      <Navbar/>
      <div className='resultContainer'>
        <div className="resultCont1">
        <p className='air1'>Air India</p>
        
          <div className="flexCont">
          <p>{`From- ${location.state.from}`}</p>
          <p>{`Date- ${format(location.state.date[0].startDate, "dd/mm/yyyy")} - ${format(
            location.state.date[0].endDate,
            "dd/mm/yyyy"
          )}`}</p>
          <p>{`To- ${location.state.to}`}</p>
          </div>

          <div className="flexCont1">
            <div className="time">
              <p> 1<sup>s</sup><sup>t</sup> flight- 8:55 AM    -   1:00 PM</p>
              <p> 2<sup>n</sup><sup>d</sup> flight- 10:15 PM    -   2:55 AM</p>
            </div>
            <div className="price">
              <p className='icons'>
            <i class="bi bi-backpack2-fill"></i>
            <i class="bi bi-suitcase-lg-fill"></i>
            <i class="bi bi-suitcase2-fill"></i></p>
            <p className='carryBag'>Included: personal item, carry-on bag, <br /> checked bag</p>
            <p className='charge'>INR15,000</p>
            <p className='taxes'>Includes taxes and charges</p>
            <button className='details' onClick={handleDetails}>View details</button>
            </div>
            
          </div>
          
        </div>
        <div className="resultCont1">
        <p className='air1'>Vistara</p>

          <div className="flexCont">
          <p>{`From- ${location.state.from}`}</p>
          <p>{`Date- ${format(location.state.date[0].startDate, "dd/mm/yyyy")} - ${format(
            location.state.date[0].endDate,
            "dd/mm/yyyy"
          )}`}</p>
          <p>{`To- ${location.state.to}`}</p>
          </div>

          <div className="flexCont1">
            <div className="time">
              <p> 1<sup>s</sup><sup>t</sup> flight- 5:35 PM    -   8:20 PM</p>
              <p> 2<sup>n</sup><sup>d</sup> flight- 10:15 PM    -   6:55 AM</p>
            </div>
            <div className="price">
              <p className='icons'>
            <i class="bi bi-backpack2-fill"></i>
            <i class="bi bi-suitcase-lg-fill"></i>
            <i class="bi bi-suitcase2-fill"></i></p>
            <p className='carryBag'>Included: personal item, carry-on bag, <br /> checked bag</p>
            <p className='charge'>INR14,539.84</p>
            <p className='taxes'>Includes taxes and charges</p>
            <button className='details' onClick={handleDetails}>View details</button>
            </div>
            
          </div>
          
        </div>
        <div className="resultCont1">
        <p className='air1'>IndiGo</p>

          <div className="flexCont">
          <p>{`From- ${location.state.from}`}</p>
          <p>{`Date- ${format(location.state.date[0].startDate, "dd/mm/yyyy")} - ${format(
            location.state.date[0].endDate,
            "dd/mm/yyyy"
          )}`}</p>
          <p>{`To- ${location.state.to}`}</p>
          </div>

          <div className="flexCont1">
            <div className="time">
              <p> 1<sup>s</sup><sup>t</sup> flight- 11:05 PM    -   2:00AM</p>
              <p> 2<sup>n</sup><sup>d</sup> flight- 5:35 PM    -   8:20PM</p>
            </div>
            <div className="price">
              <p className='icons'>
            <i class="bi bi-backpack2-fill"></i>
            <i class="bi bi-suitcase-lg-fill"></i>
            <i class="bi bi-suitcase2-fill"></i></p>
            <p className='carryBag'>Included: personal item, carry-on bag, <br /> checked bag</p>
            <p className='charge'>INR14,988.15</p>
            <p className='taxes'>Includes taxes and charges</p>
            <button className='details' onClick={handleDetails}>View details</button>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default FlightResult