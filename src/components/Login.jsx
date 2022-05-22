
import { useState, useEffect } from "react";
import "../styles/Login.css";
import Chart from "./Chart";
// import { useNavigate } from "react-router-dom";

function Login() {
  // let history = useHistory();
  // const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.phone) {
        errors.phone = "Phone number is required!";
      }



    return errors;
  };

  return (
    <div>
      
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        // <div className="messageSuccess">Signed in successfully</div>
        <Chart />
      ) : (
        null
      )}

      <form onSubmit={handleSubmit}>

      <h2>Create an account</h2>      
            <label>Your Email Address</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
        
          <p>{formErrors.email}</p>
          
            <label>Your Password</label>
            <input
              type="password"
              name="password"
    
              value={formValues.password}
              onChange={handleChange}
            />
         
          <p>{formErrors.password}</p>
          
            <label>Confirm Your Password</label>
            <input
              type="password"
              name="password"
    
              value={formValues.password}
              onChange={handleChange}
            />
         
          <p>{formErrors.password}</p>

          <label>Your full name</label>
            <input
              type="text"
              name="username"
    
              value={formValues.username}
              onChange={handleChange}
            />
         
          <p>{formErrors.username}</p>

          <label>Your Phone number</label>
            <input
              type="number"
              name="phone"

              value={formValues.phone}
              onChange={handleChange}
            />
         
          <p>{formErrors.phone}</p>


          <button> Create account</button>
        
      </form>
    </div>
  );
}

export default Login;
