import React, { useEffect } from "react";
import Home from "./Pages/Home/Home.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Player from "./Pages/Player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/");
      } else {
        console.log("Logged out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="player/:id" element={<Player />}></Route>
      </Routes>
    </div>
  );
};

export default App;
