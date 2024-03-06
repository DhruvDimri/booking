import React from 'react'
import './trending.css'
import delhi from './Images/new delhi.jpg'
import flag from './Images/flag.png'
import banglore from './Images/bangalore.jpg'
import mumbai from './Images/mumbai.jpg'
import chennai from './Images/chennai.jpg'
import jaipur from './Images/jaipur.jpg'

const Trending = () => {
  return (
    <div className='trendingContainer'>
        <div className='destinations'>Trending destinations</div>
        <div className='popular'>Most popular choices for travellers from India</div>
        <div className="imgContainer">
            <div className="img1">
                <img src={delhi} className='image1' alt="dsorry" />
                <div className="flag">
                    <span>New Delhi</span>
                    <img src={flag} alt="flag" />
                </div>
            </div>
            <div className="img2">
                <img src={banglore}className='image2' alt="dsorry" />
                <div className="flag1">
                    <span>Banglore</span>
                    <img src={flag} alt="flag" />
                </div>
            </div>
        </div>
        <div className="imgContainer1">
              <div className="img3">
                <img src={mumbai} className='image3' alt="sorry" />
                <div className="flag2">
                  <span>Mumbai</span>
                  <img src={flag} alt="flag" />
                </div>
              </div>
              <div className="img4">
                <img src={chennai} className='image3'  alt="sorry" />
                <div className="flag3">
                  <span>Chennai</span>
                  <img src={flag} alt="flag" />
                </div>
              </div>
              <div className="img5">
                <img src={jaipur} className='image3'  alt="sorry" />
                <div className="flag4">
                  <span>Jaipur</span>
                  <img src={flag} alt="flag" />
                </div>
              </div>
        </div>
    </div>
  )
}

export default Trending