import { createHashRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorBoundary from "./pages/ErrorBoundary";
import { PathConstants } from "./constants/PathConstants";
import Personal from "./pages/Personal";
import Home from "./pages/Home";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary/>}>
      <Route path={PathConstants.DASHBOARD} element={<Home/>}/>
      <Route path={PathConstants.HOME} element={<Home/>}/>
      <Route path={PathConstants.CONTACT} element={<Contact/>}/>
      <Route path={PathConstants.ABOUT} element={<About/>}/>
      <Route path={PathConstants.RESUME} element={<Personal/>}/>
      <Route path={PathConstants.DASHBOARD} element={<Navigate to={"/#"} replace={true} />} />
      <Route path={""} element={<Navigate to={"/#"} replace={true} />} />
    </Route>
  )
);