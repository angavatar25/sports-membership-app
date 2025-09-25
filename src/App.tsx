import './App.css';

import { BrowserRouter as Router, useLocation, useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import ClassList from "@/pages/ClassList";
import ClassDetail from "@/pages/ClassDetail";
import Profile from "@/pages/Profile";
import Login from "@/pages/login";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import { useUser } from '@supabase/auth-helpers-react';

const AppRouter = () => {
  const location = useLocation();

  const protectedPath = [
    { path: '/class-list', element: (
      <ProtectedRoute>
        <ClassList/>
      </ProtectedRoute>
    ) },
    { path: '/class-detail/:id', element: (
      <ProtectedRoute>
        <ClassDetail/>
      </ProtectedRoute>
    ) },
    { path: '/profile', element: (
      <ProtectedRoute>
        <Profile/>
      </ProtectedRoute>
    ) },
  ];

  let routesPath = [
    { path: '/', element: (
      <PublicRoute>
        <Home/>
      </PublicRoute>
    ) },
    { path: '/login', element: (
      <PublicRoute>
        <Login/>
      </PublicRoute>
    ) },
    ...protectedPath,
  ];

  const routes = useRoutes(routesPath, location);

  return (
    <div key={location.pathname}>{routes}</div>
  )
}

const App = () => {
  const user = useUser();

  return (
    <div className="bg-white-primary">
      <Router>
        <Navbar/>
        <AppRouter/>
        {user && (
          <Footer/>
        )}
      </Router>
    </div>
  )
}

export default App
