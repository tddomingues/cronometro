import "./App.css";
import MarkupType from "./components/MarkupType/MarkupType";
import Stopwatch from "./pages/Stopwatch/Stopwatch";
import Clock from "./pages/Clock/Clock";
import Footer from "./components/Footer/Footer"

import {Route, Routes, BrowserRouter} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
      <MarkupType/>
      <Routes>
        <Route path="/" element={<Stopwatch/>}/>
        <Route path="/clock" element={<Clock/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
