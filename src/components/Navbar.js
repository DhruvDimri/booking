import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
//import { Location } from "react-router-dom";

const Navbar = () => {
const location = useLocation();

  return (
    <div className="navContainer">
      <div className="navContainer1">
            <div className="navCont1">
            <span>Booking.com</span>
            </div>
            { location.pathname === "/" && <div className="navButtons">
            <button>Register</button>
            <button>Sign in</button>
            </div>}
      </div>


      <div className="navContainer2">
        <div className= {location.pathname === "/" ? "stayContainer  border order" : "stayContainer  border"}>
        <i className="bi bi-suitcase-fill"></i>
        <Link className="link" to="/">
        <span className="font">Stays</span>
        </Link>  
        </div>
        <div className={location.pathname === "/flight" ? "flightContainer same border order" : "flightContainer same border"}>
        <i className="bi bi-airplane-fill"></i>
        <Link className="link" to="/flight">
          <span className="font">Flights</span>
        </Link>
        </div>
        <div className={location.pathname === "/carrentals" ? "carContainer same border order": "carContainer same border"}>
        <i className="bi bi-taxi-front-fill"></i>
        <Link className="link" to="/carrentals">
        <span className="font">Car Rentals</span>
        </Link>
        </div>
        <div className={location.pathname === "/attractions" ? "attractContainer border order" : "attractContainer border"}>
        <i className="bi bi-heart-fill"></i>
        <Link className="link" to="/attractions"><span className="font">Attractions</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
