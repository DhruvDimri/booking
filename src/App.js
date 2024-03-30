import Stays from "./components/Stays";
import List from "./components/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flight from "./components/Flight";
import CarRentals from "./components/CarRentals";
import Attractions from "./components/Attractions";
import FlightResult from "./components/FlightResult";
import CarResult from "./components/CarResult";


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Stays/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/flight" element={<Flight/>}></Route>
      <Route path="/flight-result" element={<FlightResult/>} />
      <Route path="/carrentals" element={<CarRentals/>}></Route>
      <Route path="/car-result" element={<CarResult/>}></Route>
      <Route path="/attractions" element={<Attractions/>}></Route>
      </Routes>
     
      </BrowserRouter>
    </div>
    
  );
}

export default App;
