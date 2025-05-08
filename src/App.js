import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Sliders from "./Components/Sliders";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";

function App() {
  return (
    <>
      <div>
        <Header1/>
        <Header2/>
        {/* Routing */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/admin" element={<Admin/>} />
            </Routes>
          </BrowserRouter>
        {/* Routing */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
