import React from "react";
import Home from "./Pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Player from "./Pages/Player/Player.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="player/:id" element={<Player />}></Route>
      </Routes>
    </div>
  );
};

export default App;
