import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorBoundary from "./pages/ErrorBoundary";
import Dashboard from "./pages/Dashboard";
import PersonalPage from "./pages/PersonalPage";
import { PathConstants } from "./constants/PathConstants";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route path={PathConstants.DASHBOARD} element={<Dashboard />} />
      <Route path={PathConstants.CONTACT} element={<Contact />} />
      <Route path={PathConstants.ABOUT} element={<About />} />
      <Route path={PathConstants.PERSONAL_PAGE} element={<PersonalPage />} />
    </Route>
  )
);