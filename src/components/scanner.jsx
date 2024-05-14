import { useState } from 'react'

const Scanner = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;
        setInputs((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (
        <div className="text-center">
            <div className="row mt-3">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>Scanner</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Name</label>
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

export default Scanner;