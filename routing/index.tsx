import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Home, FormExample } from "../views";

const Routing = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormExample />} />
      </Routes>
    </NativeRouter>
  );
};

export default Routing;
