import React from "react";
import "./main.scss";
import Header from "./components/Headers/Header";
import Home from "./Pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router.js";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        {router.length > 0 &&
          router.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
