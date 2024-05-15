import { useState } from 'react'
import { useAuth } from "../utils/authProvider";

const CheckIn = () => {
    const [inputs, setInputs] = useState({});
    const { authToken } = useAuth();  // Get the token from the auth context

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      const apiUrl = process.env.REACT_APP_API_URL;

      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization":  `Bearer ${authToken}`},
        body: JSON.stringify({ticketNumber : inputs.ticketNumber}),
      };
      fetch(`${apiUrl}/ticket`, requestOptions).then((response) => {
        console.log("status code", response.status);
      });
    };

    return (
        <div className="text-center">
            <div className="row mt-3">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>Check-In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Ticket Number</label>
                            <input className="form-control"
                                id='ticketNumber'
                                name='ticketNumber'
                                value={inputs.ticketNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary">Scan</button>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
};

export default CheckIn;