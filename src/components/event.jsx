import { useLocation, Link } from 'react-router-dom';

const Event = () =>{

    const location = useLocation()

    return(
        <>
            <div className='row mt-5'>
                <div className='col-4'>
                    <img className="card-img-top" src="/image.png" alt="Card image cap" style={{ width: "415px", height: "350px" }} />
                    <div>Location: {location.state.event.location}</div>
                    <div>Date: {location.state.event.date}</div>
                </div>
                <div className='col-8'>
                    <h1>{location.state.event.name}</h1>
                    <p>{location.state.event.description}</p>
                    <Link to={{pathname: '/buy'}} ><button className='btn btn-primary'>Pay Now</button></Link>
                </div>
            </div>
        </>
    );
};

export default Event;