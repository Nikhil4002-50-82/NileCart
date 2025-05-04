import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/IndividualProduct/ProductDetails";
import Cart from "./components/IndividualProduct/Cart";
import ScrollToTop from "./ScrollToTop";
import SignIn from "./components/Login/SignIn";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
