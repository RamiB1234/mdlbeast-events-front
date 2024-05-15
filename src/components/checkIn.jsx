import { useState } from 'react';
import { useAuth } from "../utils/authProvider";

const CheckIn = () => {
    const [inputs, setInputs] = useState({});
    const [feedback, setFeedback] = useState({ message: '', isValid: false }); // Combined state object for feedback
    const { authToken } = useAuth();  // Get the token from the auth context

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const apiUrl = process.env.REACT_APP_API_URL;

      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${authToken}` },
        body: JSON.stringify({ ticketNumber: inputs.ticketNumber }),
      };
      fetch(`${apiUrl}/ticket`, requestOptions)
        .then((response) => {
          if (response.ok) {
            setFeedback({ message: "Ticket Approved", isValid: true });
          } else {
            setFeedback({ message: "Ticket Denied", isValid: false });
          }
          setInputs({ ticketNumber: '' }); // Clear the ticket number field
        })
        .catch(() => {
          setFeedback({ message: "Network error, try again", isValid: false });
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
                                autoComplete="off"
                            />
                        </div>
                        <button className="btn btn-primary" disabled={!inputs.ticketNumber}>Scan</button>
                    </form>
                    {feedback.message && (
                        <div style={{ color: feedback.isValid ? 'green' : 'red' }}>{feedback.message}</div>
                    )}
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
};

export default CheckIn;
