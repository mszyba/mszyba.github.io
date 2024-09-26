import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@sap-ui/common-css/dist/sap-content-paddings.css';
import '@sap-ui/common-css/dist/common-css.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import './index.css';
import { router } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>


  // <StrictMode>
  //   <ThemeProvider>
  //     <HashRouter>
  //       {/*<MenuLeft />*/}
  //       <Routes>
  //         <Route path="/home" element={<PersonalPage />}/>
  //         <Route path="/contact" element={<Contact/>}/>
  //         <Route path="/about" element={<About/>}/>
  //         <Route path="/personal-page" element={<PersonalPage/>}/>
  //         {/*<Route path="*" element={<Navigate replace to="/home" />} />*/}
  //         {/*</Route>*/}
  //         {/*<Route path="/home" element={<Home />} />*/}
  //         {/*<Route path="/detail" element={<Detail />} />*/}
  //         {/*<Route path="/login" element={<Login />} />*/}
  //         {/*<Route path="*" element={<Navigate replace to="/home" />} />*/}
  //       </Routes>
  //     </HashRouter>
  //   </ThemeProvider>
  // </StrictMode>
);

reportWebVitals();
