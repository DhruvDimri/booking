import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footerContainer footerContainer1'>
        <div className='save'>Save time, save money!</div>
        <div className="sign">Sign up and we'll send the best deals to you</div>
        <div className="subscribe">
            <input type="text" placeholder='Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Footer