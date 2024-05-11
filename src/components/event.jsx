import { useLocation } from 'react-router-dom';

const Event = () =>{

    const location = useLocation()

    return(
        <>
            <div className='row mt-5'>
                <div className='col-4'>
                    <img className="card-img-top" src="/image.png" alt="Card image cap" style={{ width: "415px", height: "350px" }} />
                    <span>Date: {location.state.event.date}</span>
                </div>
                <div className='col-8'>
                    <h1>{location.state.event.name}</h1>
                    <p>{location.state.event.description}</p>
                    <button type="button" className='btn btn-primary'>Pay Now</button>
                </div>
            </div>
        </>
    );
};

export default Event;