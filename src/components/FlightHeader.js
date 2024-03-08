import React from 'react'
import "./flightheader.css"
import mumbai from "./Images/mumbai.jpg"
import chennai from "./Images/chennai.jpg"
import jaipur from "./Images/jaipur.jpg"
import bangkok from "./Images/bangkok.jpg"
import "./Trending2"
import Trending2 from './Trending2'
import Footer2 from './Footer2'


const FlightHeader = () => {
  return (
    <>
    <div className='flightHeaderContainer'>
        <div className='flightHeaderContainer1'>
            <p className='compare'>Compare and book flights with ease</p>
            <span className='discover'>Discover your next dream destination</span> <br />
            <input className='input' type="radio" id='destination' name='destination' /><label className='label' htmlFor="destination">Round trip</label>
            <input className='input1' type="radio" id='destination1' name='destination' /><label className='label1' htmlFor="destination1">One way</label>
            <div className="choose">
                <div className="takeoff">
                <i className="bi bi-airplane-engines-fill"></i>
                <input type="text" placeholder="Where are you going?" ></input>
                </div>

                <div className="landing">
                <i className="bi bi-airplane-engines-fill"></i>
                <input type="text" placeholder="Where are you going?" ></input>
                </div>
                
                <div className="date">
                <i className="bi bi-calendar3"></i>
                <span>hello
                </span>
                </div>

                <div className="traveller">
                <i className="bi bi-person"></i>
                <span>
                hello guys
                </span>
                </div>

                <div className="buton">
                <button className="search">
                Search
                </button>
                </div>
            </div>
        </div>
    </div>

    <div className="flightHeaderContainer2">
        <p className='popularr'>Popular flights near you</p>
        <p className='deals'>Find deals on domestic and international flights</p>
        <p className='places'>Places</p>
        <div className="imageContainer">
            <div className="grp1">
            <img className='similiar' src={mumbai} alt="sorry" />
            <div className="similiar1">Delhi to Mumbai</div>
            </div>
            <div className="grp2">
            <img className='similiar' src={chennai} alt="sorry" />
            <div className="similiar1">Delhi to Chennai</div>
            </div>
            <div className="grp3">
            <img className='similiar' src={jaipur} alt="sorry" />
            <div className="similiar1">Delhi to Jaipur</div>
            </div>
            <div className="grp4">
            <img className='similiar' src={bangkok} alt="sorry" />
            <div className="similiar1">Delhi to Bangkok</div>
            </div>
        </div>
    </div>

    <div className="flightHeaderContainer21">
        <p className='popularr'>Trending cities</p>
        <p className='deals'>Book flights to a destination popular with travelers from India</p>
        <div className="imageContainer">
            <div className="grp1">
            <img className='similiar' src={chennai} alt="sorry" />
            <div className="similiar1">Chennai</div>
            </div>
            <div className="grp2">
            <img className='similiar' src={mumbai} alt="sorry" />
            <div className="similiar1">Mumbai</div>
            </div>
            <div className="grp3">
            <img className='similiar' src={bangkok} alt="sorry" />
            <div className="similiar1">Bangkok</div>
            </div>
            <div className="grp4">
            <img className='similiar' src={jaipur} alt="sorry" />
            <div className="similiar1">Jaipur</div>
            </div>
        </div>
    </div>

    <div className="flightHeaderContainer3">

        <div className="srchIcon">
            <i class="bi bi-search"></i>
            <div className="srchContainer">
            <span className='heading'>Search a huge selection</span><br />
            <span>Easily compare flights, airlines, and <br /> prices-all in one place</span>
            </div>
        </div>

        <div className="money">
            <i class="bi bi-currency-exchange"></i>
            <div className="moneyContainer">
            <span  className='heading'>Pay no hidden fees</span><br />
            <span>Get a clear price breakdown every step <br /> of the way</span>
            </div>
        </div>

        <div className="flexibility">
            <i class="bi bi-journal-richtext"></i>
            <div className="flexibilityContainer">
            <span  className='heading'>Get more flexibility</span><br />
            <span>Change your travel dates with the <br /> Flexible ticket option*</span>
            </div>
        </div>
    </div>

    <div className="tickets">*Flexible plane tickets are availabel for an cost on select airfares</div>
    <Trending2/>
    <Footer2/>
    </>
  )
}

export default FlightHeader