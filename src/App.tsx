import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Mainpage from "./pages";
import Address from "./pages/address";


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Mainpage />} />
        <Route path="/address" element={<Address />} />
    </Route>
))

function App() {
  return (
      <>
        <RouterProvider router={router} />
      </>

  );
}

export default App;
