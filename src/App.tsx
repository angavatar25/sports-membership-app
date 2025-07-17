import { BrowserRouter as Router, useLocation, useRoutes } from "react-router-dom";
import Home from "@pages/Home";
import ClassList from "@pages/ClassList";
import ClassDetail from "@pages/ClassDetail";

import Navbar from "@components/Navbar";

import './App.css'

const AppRouter = () => {
  const location = useLocation();

  let routesPath = [
    { path: '/', element: <Home/> },
    { path: '/about', element: <ClassList/> },
    { path: '/projects', element: <ClassDetail/> },
  ];

  const routes = useRoutes(routesPath, location);

  return (
    <div key={location.pathname}>{routes}</div>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  )
}

export default App
