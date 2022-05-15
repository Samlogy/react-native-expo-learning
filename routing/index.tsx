import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Home, Login } from "../views";

const Routing = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </NativeRouter>
  );
};

export default Routing;
