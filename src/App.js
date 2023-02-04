import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events";
import Cards from "./Components/Cards";

const App = () => {
  return (
    <div className="bg-red-600">
      {/* <div className="bg-slate-600 w-full h-screen"></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/cards" exact element={<Cards />} />
          <Route path="/events" exact element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
