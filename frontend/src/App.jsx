import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events";
import Cards from "./Components/Cards";
import EventDetails from "./Components/EventDetails";
import Login from "./Pages/Login";
import Register from './Pages/Register'


const App = () => {
  return (
    <div className="">
      {/* <div className="bg-slate-600 w-full h-screen"></div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/cards" exact element={<Cards />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/eventdetails" exact element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
