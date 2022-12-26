import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Verification from "../pages/Auth/Verification";
import FlightDetail from "../pages/FlightDetail";
import Flight from "../pages/Flight";
import Swal from "sweetalert2";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/flight-detail/:id" element={<FlightDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
