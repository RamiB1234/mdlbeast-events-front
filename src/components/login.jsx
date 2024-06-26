import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../common.css";
import { useAuth } from "../utils/authProvider";

const Login = () => {
  const [inputs, setInputs] = useState({ userName: "", password: "" }); // Initialize states
  const [error, setError] = useState(""); // State to hold error messages
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;

    setError(""); // Clear previous errors

    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: inputs.userName,
          password: inputs.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.token, inputs.userName); // Using the login function from context
        console.log("Login successful");
        navigate("/"); // Redirect to the home page
      } else {
        setError("Login failed"); // Set error message
        setInputs({ userName: "", password: "" }); // Clear both fields
        console.error("Login failed:", data); // Handle errors
      }
    } catch (error) {
      setError("Login failed"); // Set error message
      setInputs({ userName: "", password: "" }); // Clear both fields
      console.error("Network error:", error);
    }
  };

  return (
    <div className="text-center mt-4">
      <h1>Login</h1>
      <div className="row mt-3">
        <div className="col-4"></div>
        <div id="login-div" className="col-4 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                id="userName"
                name="userName"
                value={inputs.userName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}{" "}
            {/* Display error message */}
            <button
              className="btn btn-primary"
              disabled={!inputs.userName || !inputs.password}
            >
              Login
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Login;
