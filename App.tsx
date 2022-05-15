import { NativeBaseProvider } from "native-base";
import React from "react";
import theme from "./theme";
import { Home } from "./views";
import { Login } from "./components";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* <Home /> */}
      <Login />
    </NativeBaseProvider>
  );
}
