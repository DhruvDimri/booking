import React from 'react'
import './footer2.css'
import book from './Images/book.png'
import price from './Images/price.png'
import kayak from './Images/kayak.png'
import agoda from './Images/agoda.png'
import rent from './Images/rent.png'
import open from './Images/open.png'

const Footer2 = () => {
  return (
    <div className='footer2Container'>
   <div className="category">
    <div className="col1">
        <ul>
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
        </ul>
    </div>
    <div className="col2">
    <ul>
            <li>Homes</li>
            <li>Apartments</li>
            <li>CResorts</li>
            <li>Villas</li>
            <li>Hotels</li>
        </ul>
    </div>
    <div className="col3">
        <ul>
            <li>Unique places to stay</li>
            <li>All destinations</li>
            <li>All flight destinations</li>
            <li>Discover</li>
            <li>Reviews</li>
        </ul>
    </div>
    <div className="col4">
        <ul>
            <li>Car hire</li>
            <li>Flight finder</li>
            <li>Restaurants reservations</li>
            <li>Booking.com</li>
            <li>Travels Agents</li>
        </ul>
    </div>
    <div className="col5">
        <ul>
            <li>Coronavirus(COVID-19) FAQs</li>
            <li>About Booking.com</li>
            <li>Customer Service help</li>
            <li>Partner help</li>
            <li>Sustainability</li>
        </ul>
    </div>
   </div>
   <div className="copy">Copyright &copy; 1996-2024 Booking.com <sup>TM</sup>.All rights reserved.</div>
   <div className="foot">
    <div>Booking.com is part of Booking Holdings Inc, the world leader in online travel and related services.</div>
    <div className="footImage">
        <img src={book} alt="sorry" />
        <img src={price} alt="sorry" />
        <img src={kayak} alt="sorry" />
        <img src={agoda} alt="sorry" />
        <img src={rent} alt="sorry" />
        <img src={open} alt="sorry" />
    </div>
   </div>
    </div>
  )
}

export default Footer2