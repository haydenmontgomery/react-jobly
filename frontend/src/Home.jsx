import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {

  return(
    <>
    <div style={{height: "100vh"}} className="Home">
      <div className="container text-center">
        <h1 className="my-4 fw-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        <Link className="btn btn-primary fw-bold mx-3" to="/auth/login">Login</Link>
        <Link className="btn btn-primary fw-bold" to="/auth/signup">Signup</Link>
      </div>
    </div>
    </>
  )
}

export default Home;