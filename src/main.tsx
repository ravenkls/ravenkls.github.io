import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./root";
import ChakraColourPicker from "./pages/chakra-colour-picker/chakra-colour-picker";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "colorscheme", element: <ChakraColourPicker /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
