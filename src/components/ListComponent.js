import React from 'react'
import './listcomponent.css'
import kumaon from "./Images/kumaon.webp"
import ivy from "./Images/ivy.webp"
import radha from "./Images/glamping.jpeg"
import { useLocation } from 'react-router-dom'

const ListComponent = () => {
    const location = useLocation();
    
  return (
    <div className="mainContainer">
    <div className="property">{location.state.destination}: 3 properties found</div>
    <div className='ListcompContainer'>
        <div className="list1">
            <div className="list1Inner">
                <img src={kumaon} alt="no result" />
                <div className='div1'>
                    <div className="phela">
                        <div className="phela1">
                            <p>Resort</p>
                            <h6>{location.state.destination} Roop Resort Near Main <br /> Market <span><i className="bi bi-hand-thumbs-up-fill"></i><i className="bi bi-hand-index-thumb-fill"></i></span></h6>
                            <a className='a1' href="/">{location.state.destination}</a> <a className='a2' href="/">Show on map</a><span>9.7 km from centre</span><br />
                            <button>Early 2024  Deal</button>
                        </div>
                        <div className="phela2">
                            <div>Very good <span>8.0</span></div>
                            <p>Comfort 8.2</p>
                        </div>
                    </div>
                    <div className="dusra">
                        <div className="dusra1">
                            <p className='dusrap1'>Deluxe Double Room with Balcony</p><span>1 extra-large double bed</span>
                            <p className='dusrap2'><i className="bi bi-check"></i>Free cancellation</p>
                            <p className='dusrap3'><i className="bi bi-check"></i>No prepayment needed - pay at the propperty</p>
                        </div>
                        <div className="dusra2">
                            <p>11 nights, 2 adults</p>
                            <div className='clear float'><span className='dusra2span1'><i className="bi bi-currency-rupee rupee1"></i>24,200</span><span className='dusra2span2'><i className="bi bi-currency-rupee"></i>15,972</span></div>
                            <div className='dusra2div clear'>+<i className="bi bi-currency-rupee rupee2"></i>1,917 taxes and charges</div>
                            <button>See availability<i className="bi bi-arrow-right-short"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="list1">
            <div className="list1Inner">
                <img src={ivy} alt="no result" />
                <div className='div1'>
                    <div className="phela">
                        <div className="phela1">
                            <p>Hotel</p>
                            <h6>IVY The Boutique Hotel By Sukhmani Resorts<span><i className="bi bi-hand-thumbs-up-fill"></i><i className="bi bi-hand-index-thumb-fill"></i></span></h6>
                            <a className='a1' href="/">{location.state.destination}</a> <a className='a2' href="/">Show on map</a><span>10.2 km from centre</span><br />
                            <button>Early 2024  Deal</button>
                        </div>
                        <div className="phela2">
                            <div>Very good <span>8.5</span></div>
                            <p>Comfort 8.1</p>
                        </div>
                    </div>
                    <div className="dusra">
                        <div className="dusra1">
                            <p className='dusrap1'>Double Room with Mountain View</p><span>1 large double bed</span>
                            <p className='dusrap2'><i className="bi bi-check"></i>Free cancellation</p>
                            <p className='dusrap3'><i className="bi bi-check"></i>No prepayment needed - pay at the propperty</p>
                        </div>
                        <div className="dusra2">
                            <p>11 nights, 2 adults</p>
                            <div className='clear float'><span className='dusra2span1'><i className="bi bi-currency-rupee rupee1"></i>43,200</span><span className='dusra2span2'><i className="bi bi-currency-rupee"></i>26,784</span></div>
                            <div className='dusra2div clear'>+<i className="bi bi-currency-rupee rupee2"></i>3,214 taxes and charges</div>
                            <button>See availability<i className="bi bi-arrow-right-short"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="list1">
            <div className="list1Inner">
                <img src={radha} alt="no result" />
                <div className='div1'>
                    <div className="phela">
                        <div className="phela1">
                            <p>Hotel</p>
                            <h6>Radha Continental Nanital By Goroomgo <span><i className="bi bi-hand-thumbs-up-fill"></i><i className="bi bi-hand-index-thumb-fill"></i></span></h6>
                            <a className='a1' href="/">{location.state.destination}</a> <a className='a2' href="/">Show on map</a><span>1.1 km from centre</span><br />
                            <button>Early 2024  Deal</button>
                        </div>
                        <div className="phela2">
                            <div>Good <span>7.5</span></div>
                            <p className='comfort'>Comfort 7.9</p>
                        </div>
                    </div>
                    <div className="dusra">
                        <div className="dusra1">
                            <p className='dusrap1'>Deluxe Double Room</p><span>1 extra-large double bed</span>
                            <p className='dusrap2'><i className="bi bi-check"></i>Free cancellation</p>
                            <p className='dusrap3'><i className="bi bi-check"></i>No prepayment needed - pay at the propperty</p>
                        </div>
                        <div className="dusra2">
                            <p>11 nights, 2 adults</p>
                            <div className='clear float'><span className='dusra2span2'><i className="bi bi-currency-rupee"></i>13,180</span></div>
                            <div className='dusra2div clear1'>+<i className="bi bi-currency-rupee rupee2"></i>1,583 taxes and charges</div>
                            <button>See availability<i className="bi bi-arrow-right-short"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}


export default ListComponent