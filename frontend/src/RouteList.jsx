import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Login from "./Login";
import Signup from "./Signup";
import Jobs from "./Jobs";
import Profile from "./Profile";

function RouteList() {
  return (
    <Routes>
      <Route 
      path="/"
      element={<Home />}
      />
 
      <Route 
      path="/companies"
      element={<Companies />}
      />
 
      <Route 
      path="/companies/:handle"
      element={<CompanyDetail />}
      />
 
      <Route 
      path="/jobs"
      element={<Jobs />}
      />
 
      <Route 
      path="/auth/login"
      element={<Login />}
      />
 
      <Route 
      path="/auth/signup"
      element={<Signup />}
      />
 
      <Route 
      path="/users/:username"
      element={<Profile />}
      />
 
    </Routes>
  )
}

export default RouteList;