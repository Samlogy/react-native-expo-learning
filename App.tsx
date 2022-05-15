import { NativeBaseProvider } from "native-base";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./theme";
import Routing from "./routing";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
