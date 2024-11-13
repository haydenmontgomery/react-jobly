import React, {useState} from "react";
import "./Signup.css"
import { useNavigate } from "react-router-dom";

const Signup = ({ signupUser }) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)
  const [isInvalid, setIsInvalid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  //Once all forms input have been touched, it can submit unless the values are blank.
  const handleChange = (e) => {
    setIsTouched(true);
    const { name, value } = e.target;
    if(value === '') {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  //Sends the form data to the parent component and hopefully authenticates.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isInvalid) {
      try {
        await signupUser({...formData});
        navigate("/companies")
      } catch(err){
        console.log(err)
      }
      setFormData(INITIAL_STATE);
      setIsInvalid(true);
      setIsTouched(false);
    }
  }

  return(
    <>
    <div className="Signup container" style={{height: "100vh"}}>
      <p className="h1 text-center">Login</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input 
          id="first_name"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input 
          id="last_name"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          />
        </div>
          {isInvalid && isTouched && <span style={{ color: 'red' }}>Please enter all info</span>}
          <button className="btn btn-primary">Signup</button>
      </form>
    </div>
    </>
  )
}

export default Signup;