import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/IndividualProduct/ProductDetails";
import Cart from "./components/IndividualProduct/Cart";
import ScrollToTop from "./ScrollToTop";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";

import { SignInContext } from "./context/SignInContext";
import { UserDataContext } from "./context/UserDataContext";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <div>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <SignInContext.Provider value={{ loggedIn, setLoggedIn }}>
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </SignInContext.Provider>
      </UserDataContext.Provider>
    </div>
  );
};

export default App;
