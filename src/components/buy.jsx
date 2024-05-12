import {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom';

const Buy = () =>{
const location = useLocation();
const[inputs, setInputs] = useState({'eventName': location.state.eventName});
const navigate = useNavigate();

const handleChange = (e) => {
  
  const { name, value } = e.target;
  setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
}

const handleSubmit = (event) => {
  event.preventDefault();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputs),
  };
  fetch("https://localhost:7017/event", requestOptions).then((response) => {
    console.log("status code", response.status);
  });
  navigate("/confirm");
};

    return (
      <div className="row mt-3">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label className="form-label">Name</label>
              <input className="form-control" 
              id='name'
              name='name'
              value={inputs.name} 
              onChange={handleChange}   
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                id='email'
                name='email'
                value={inputs.email} 
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <input type='hidden' id='eventName' name='eventName' />
            <button className="btn btn-primary">Pay</button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    );

};

export default Buy;