import React from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "./header1.css";

const Header1 = () => {
  const location = useLocation();
  const { date, adult, children, rooms, destination } = location.state;

  return (
    <div className="header1Container">
      <div className="wrapper">
        <div className="stay">
          <i className="bi bi-suitcase"></i>
          <span>{destination}</span>
        </div>

        <div className="checkin">
          <i className="bi bi-calendar3"></i>
          <span>
            {`${format(date[0].startDate, "dd/mm/yyyy")} - ${format(
              date[0].endDate,
              "dd/mm/yyyy"
            )}`}
          </span>
        </div>

        <div className="room">
          <i className="bi bi-person"></i>
          <span>
            {adult}adult - {children} children - {rooms} room
          </span>
        </div>
        <div className="button">
          <button className="search">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header1;
