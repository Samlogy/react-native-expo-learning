import { NativeBaseProvider } from "native-base";
import React from "react";
import theme from "./theme";
import Routing from "./routing";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Routing />
    </NativeBaseProvider>
  );
}
