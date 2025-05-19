
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

import User from "./Pages/Admin/User";
import Orders from "./Pages/Admin/Orders";
import AddAdmin from "./Pages/Admin/AddAdmin";
import ViewProduct from "./Pages/Admin/ViewProduct";
import AddProduct from "./Pages/Admin/AddProduct";
import AddCategory from "./Pages/Admin/AddCategory";





function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <ParticlesBackground />
         <BalloonTrail />
          <MainHeader/>
        {/* Routing */}
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/admin" element={<Admin/>}>
                <Route path="category" element={<AddCategory/>} />
                <Route path="addproduct" element={<AddProduct/>} />
                <Route path="viewproduct" element={<ViewProduct/>} />
                <Route path="addadmin" element={<AddAdmin/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="user" element={<User/>} />
              </Route>
              <Route path="/tandc" element={<TandCpage/>} />
              <Route path="/product" element={<Product/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        {/* Routing */}
      </div>
    </>
  );
}

export default App;
