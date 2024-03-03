import Stays from "./components/Stays";
import List from "./components/List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flight from "./components/Flight";
import CarRentals from "./components/CarRentals";
import Attractions from "./components/Attractions";


function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Stays/>} />
      <Route path="list" element={<List/>} />
      <Route path="/flight" element={<Flight/>}></Route>
      <Route path="/carrentals" element={<CarRentals/>}></Route>
      <Route path="/attractions" element={<Attractions/>}></Route>
      </Routes>
     
      </BrowserRouter>
    </div>
    
  );
}

export default App;
