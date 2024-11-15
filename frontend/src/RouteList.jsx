import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyDetail from "./CompanyDetail";
import Login from "./Login";
import Signup from "./Signup";
import Jobs from "./Jobs";
import Profile from "./Profile";

function RouteList({ currentUser, loginUser, signupUser }) {
  //console.log(currentUser)
  return (
    <Routes>
      {!currentUser && 
      <>
        <Route 
        path="/auth/login"
        element={<Login loginUser={loginUser}/>}
        />
        <Route 
        path="/auth/signup"
        element={<Signup signupUser={signupUser}/>}
        />
      </>
      }
      <Route 
      path="/"
      element={<Home />}
      />
 

      {currentUser &&
      <>
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
        path="/users/:username"
        element={<Profile />}
        />
      </>
      }
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default RouteList;