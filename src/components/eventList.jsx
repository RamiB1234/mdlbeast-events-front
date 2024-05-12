import { Link } from "react-router-dom";

const EventList = () => {
    const events=
    [{
        name: 'Soundstorm',
        date: '14/12/2023',
        location: 'Riyadh',
        description:'Another One In The Bag! For our 4th Soundstorm - we went bigger and wilder with 3 thrilling nights, 8 stages, and 200 artists to form your memorable experience. If you missed this year’s Storm, here’s a recap of the loudest music event in the region! This is Soundstorm.',
    },
    {
        name: 'Balad Social',
        date: '25/04/2024',
        location: 'Jeddah',
        description:"It's time to get Social. Join our intimate gathering of Jeddah's music heads on Bait Zainal's rooftop in the heart of historic Al-Balad.With iconic views, carefully curated tunes by the finest homegrown and international DJ's and crave-worthy bites... we could go on and on, but the dancefloor is calling.",
    },
    {
        name: 'KOKOUB',
        date: '01/03/2024',
        location: 'Al Ula',
        description:'Introducing Kokub, AlUla’s supernova of music. This is planet sound - get ready to dance amongst the stars. Every other Friday, take off to Kokub - AlUla',
    }]

    return(
        <>
            <div className="row mt-5">
            {events.map((event) => 
                <div className="col-4">
                    <div className="card" style={{width: "18rem;"}}>
                            <img className="card-img-top" src="/image.png" alt="Card image cap" style={{width:"415px",height:"350px"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <p className="card-text">{event.description.substring(0, 150)}...</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{event.location}</li>
                                <li className="list-group-item">{event.date}</li>
                            </ul>
                            <div className="card-body">
                                {console.log(event)}
                                <Link to={{pathname: '/event'}} state={{event}}  className="card-link">Event Details</Link>
                            </div>
                        </div>  
                </div>)}
            </div>
        </>
    );
};

export default EventList;