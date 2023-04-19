import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ChakraColourPicker from "./pages/chakra-colour-picker/chakra-colour-picker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "chakra-colours", element: <ChakraColourPicker /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
