import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";
import TandCpage from "./Pages/TandCpage";
import Product from "./Pages/Category/Product";
import "./App.css"

//component
import Footer from "./Components/Footer";
import MainHeader from "./Components/MainHeader";
import ParticlesBackground from "./Components/ParticlesBackground";
import BalloonTrail from "./Components/BalloonTrail";

// Admin Pages
import User from "./Pages/Admin/User";
import Orders from "./Pages/Admin/Orders";
import AddAdmin from "./Pages/Admin/AddAdmin";
import ViewProduct from "./Pages/Admin/ViewProduct";
import AddProduct from "./Pages/Admin/AddProduct";
import AddCategory from "./Pages/Admin/AddCategory";

//category pages
import AirInfllatable from "./Pages/Category/AirInfllatable";
import EventSetup from "./Pages/Category/EventSetup";
import InflatableTent from "./Pages/Category/InflatableTent";
import Kids from "./Pages/Category/Kids";
import Printed from "./Pages/Category/Printed";
import PromotionalSky from "./Pages/Category/PromotionalSky";
import Aboutus from "./Pages/Aboutus";
import Form from "./Pages/Form";
import OurWork from "./Pages/OurWork";

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <BalloonTrail />
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactForm" element={<Form />} />
        {/* category */}
        <Route path="/airinflatable" element={<AirInfllatable />} />
        <Route path="/eventsetup" element={<EventSetup />} />
        <Route path="/inflatabletent" element={<InflatableTent />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/printed" element={<Printed />} />
        <Route path="/product" element={<Product />} />
        <Route path="/promotionalsky" element={<PromotionalSky />} />
        {/* category */}

        <Route path="/tandc" element={<TandCpage />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="category" element={<AddCategory />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="viewproduct" element={<ViewProduct />} />
          <Route path="addadmin" element={<AddAdmin />} />
          <Route path="orders" element={<Orders />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
