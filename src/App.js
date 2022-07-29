import { Route, Routes} from "react-router-dom";
import './App.css';
import Home from './screens/HomePage/Home';
import Services from './screens/Services/Services';
import Cars from './screens/Cars/Cars';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element= {<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>


    </div>
  );
}

export default App;
