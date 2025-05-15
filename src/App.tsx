import React from "react";
import "./main.scss";
import Header from "./components/Headers/Header";
import Home from "./Pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Home/> */}
      <Routes>
        {router.length > 0 &&
          router.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
      </Routes>
    </div>
  );
}

export default App;
