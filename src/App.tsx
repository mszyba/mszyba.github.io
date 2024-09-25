import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <RouterProvider router={router}/>
// <BrowserRouter basename={"/app"}>
//   <Routes>
//     <Route path="/" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/about" element={<About />} />
//     {/*<Route path="*" element={<Navigate replace to="/home" />} />*/}
//   </Routes>
// </BrowserRouter>
  );
}

