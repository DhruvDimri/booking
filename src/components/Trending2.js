import React from 'react'
import './trending2.css'
import udaipur from './Images/udaipur.jpg'
import puducherry from './Images/puducherry.jpg'
import goa from './Images/goa.jpg'
import ayodhya from './Images/ayodhya.jpg'
import southgoa from './Images/south goa.jpg'
import northgoa from './Images/north goa.jpg'


const Trending2 = () => {
  return (
    <div className='trending2Container'>
        <div className='destination'>Other popular destinations</div>
        <div className='popular'>Get vibe and explore the top destinations in India</div>
        <div className="imgContainer">
            <div className="img1">
                <img src={udaipur} className='image' alt="sorry" />
                <div className='same'>Udaipur</div>
            </div>
            <div className="img2">
                <img src={goa} className='image'  alt="sorry" />
                <div className='same'>Goa</div>
            </div>
            <div className="img3">
                <img src={southgoa} className='image'  alt="sorry" />
                <div className='same'>South Goa</div>
            </div>
            <div className="img4">
                <img src={ayodhya} className='image'  alt="sorry" />
                <div className='same'>Ayodhya</div>
            </div>
            <div className="img5">
                <img src={puducherry} className='image'  alt="sorry" />
                <div className='same'>Puducherry</div>
            </div>
            <div className="img6">
                <img src={northgoa} className='image'  alt="sorry" />
                <div className='same'> North Goa</div>
            </div>
        </div>
    </div>
  )
}

export default Trending2