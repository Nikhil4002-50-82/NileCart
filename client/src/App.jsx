import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
