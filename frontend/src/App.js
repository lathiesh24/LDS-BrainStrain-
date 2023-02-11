import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events";
import Cards from "./Components/Cards";
import EventDetails from "./Components/EventDetails";

const App = () => {
  return (
    <div className="">
      {/* <div className="bg-slate-600 w-full h-screen"></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/cards" exact element={<Cards />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/eventdetails" exact element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
