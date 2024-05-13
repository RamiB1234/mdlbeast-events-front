 import { useState } from "react";
 import '../common.css';
 
 const Login = () => {
    const[inputs, setInputs] = useState({});

    const handleChange = (e) => {
  
        const { name, value } = e.target;
        setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
      };


    return(
        <div className="text-center mt-4">
            <h1>Login</h1>
            <div className="row mt-3">
                <div className="col-4"></div>
                <div id='login-div' className="col-4 mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Username</label>
                            <input className="form-control"
                                id='userName'
                                name='userName'
                                value={inputs.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                aria-describedby="emailHelp"
                                id='password'
                                name='password'
                                value={inputs.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
 };

 export default Login;