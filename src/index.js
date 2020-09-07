import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/core";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
