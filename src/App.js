
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import TandCpage from "./Pages/TandCpage";
import ParticlesBackground from "./Components/ParticlesBackground";
import BalloonTrail from "./Components/BalloonTrail";
import Product from "./Pages/Product";
import MainHeader from "./Components/MainHeader";


function App() {
  return (
    <>
      <div>
        <ParticlesBackground />
         <BalloonTrail />
          <MainHeader/>
        {/* Routing */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/tandc" element={<TandCpage/>} />
              <Route path="/product" element={<Product/>} />
            </Routes>
          </BrowserRouter>
        {/* Routing */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
