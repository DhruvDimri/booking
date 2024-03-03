import React from 'react'
import './property.css'
import hotels from './Images/hotels.jpeg'
import apartments from './Images/apartments.jpeg'
import resorts from './Images/resorts.jpeg'
import villas from './Images/villas.jpeg'

const Property = () => {
  return (
    <div className='propertyContainer'>
        <div className="heading">
            <p>Browse by property type</p>
        </div>
        <div className="propertyImage">
            <div className="hotels">
            <img className='img' src={hotels} alt="sorry" />
            <div className='hot'>Hotels</div>
            </div>
            
            <div className="apartments">
            <img className='img' src={apartments} alt="" />
            <div className='apar'>Apartments</div>
            </div>
            <div className="resorts">
            <img className='img' src={resorts} alt="" />
            <div className='res'>Resorts</div>
            </div>
            <div className="villas">
            <img className='img' src={villas} alt="" />
            <div className='vill'>Villas</div>
            </div>
        </div>
    </div>
  )
}

export default Property