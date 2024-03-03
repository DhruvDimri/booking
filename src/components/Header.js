import React from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //const contState = ("delhi", "mumbai", "goa");

  const [show, setShow] = useState(false);
  const [room, setRoom] = useState(false);
  const [adult, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [destination, setDestination] = useState("")

  function handleDate() {
    setShow(!show);
  }
  function handleRoom() {
    setRoom(!room);
  }
  function handleAdulti() {
    setAdult(adult + 1);
  }
  function handleAdultd() {
    setAdult(adult - 1);
  }
  function handleChildreni() {
    setChildren(children + 1);
  }
  function handleChildrend() {
    setChildren(children - 1);
  }
  function handleRoomsi() {
    setRooms(rooms + 1);
  }
  function handleRoomsd() {
    setRooms(rooms - 1);
  }
  function handleSrch() {
  if(destination === ""){
    alert("Please fill your destination first, before search")
  }
  else{
    navigate("/list", { state: { date, adult, children, rooms, destination } });
  }
  }

  function handleDestination(e) {
    setDestination((e.target.value.toUpperCase()));
  }
  
 
  return (
    <div className="headerMainContainer">
      <div className="headerContainer">
        <div className={location.pathname === "/list" ? "next" : "text"}>
          <div className="mainheading"> Find your next stay</div>
          <span className="span">
            Search low prices on hotels, homes and much more...
          </span>
        </div>

        <div className="selection">
          <div className="stay">
            <i className="bi bi-suitcase"></i>
            <input type="text" placeholder="Where are you going?" onChange={handleDestination} ></input>
          </div>

          <div className="checkin">
            <i className="bi bi-calendar3"></i>
            <span onClick={handleDate}> {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </span>
            
            {show && (
              <DateRange
                className="dateRange"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>

          <div className="room">
            <i className="bi bi-person"></i>
            <span onClick={handleRoom}>
              {adult}adult - {children} children - {rooms} room
            </span>
            {room && (
              <div className="box">
                <div className="adult">
                  <span>Adults</span>
                  <div className="adultsButton syno">
                    <button
                      disabled={adult === 0}
                      className={adult === 0 ? "red0" : "blue0"}
                      onClick={handleAdultd}
                    >
                      -
                    </button>
                    <span>{adult}</span>
                    <button
                      disabled={adult === 9}
                      className={adult === 9 ? "red0" : "blue0"}
                      onClick={handleAdulti}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="children">
                  <span>Children</span>
                  <div className="childrensButton syno">
                    <button
                      disabled={children === 0}
                      className={children === 0 ? "red0" : "blue0"}
                      onClick={handleChildrend}
                    >
                      -
                    </button>
                    <span>{children}</span>
                    <button
                      disabled={children === 9}
                      className={children === 9 ? "red0" : "blue0"}
                      onClick={handleChildreni}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="rooms">
                  <span>Room</span>
                  <div className="roomsButton syno">
                    <button
                      disabled={rooms === 0}
                      className={rooms === 0 ? "red0" : "blue0"}
                      onClick={handleRoomsd}
                    >
                      -
                    </button>
                    <span>{rooms}</span>
                    <button
                      disabled={rooms === 9}
                      className={rooms === 9 ? "red0" : "blue0"}
                      onClick={handleRoomsi}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="button">
            <button onClick={handleSrch} className="search">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
