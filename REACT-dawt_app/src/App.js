import Navbar from "./components/Navbar";
import 'swiper/css';
import Slider from "./components/Slider"
import Counter from "./components/Counter";
import User from "./components/User";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom"
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import ProductDesc from "./components/ProductDesc";
function App() {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<User/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/about" element={<AboutUs/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/products/:id" element={<ProductDesc/>}></Route>

  </Routes>

  </>
  );
}

export default App;



