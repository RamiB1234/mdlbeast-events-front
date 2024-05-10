import { Link } from "react-router-dom";



const EventList = () => {

    const events=
    [{
        name: 'Soundstorm',
        date: '12/12/2023',
        description:'MDLBEAST is an entertainment company rooted in music culture. Based in Saudi Arabia and shared globally – we are here to amplify the unseen. We invest in talent, production and content. As a lifestyle and entertainment experience brand, we create unmatched experiences & music events in Saudi Arabia and the region, and support music in the Middle East.',
    },
    {
        name: 'Soundstorm',
        date: '12/12/2023',
        description:'MDLBEAST is an entertainment company rooted in music culture. Based in Saudi Arabia and shared globally – we are here to amplify the unseen. We invest in talent, production and content. As a lifestyle and entertainment experience brand, we create unmatched experiences & music events in Saudi Arabia and the region, and support music in the Middle East.',
    },
    {
        name: 'Soundstorm',
        date: '12/12/2023',
        description:'MDLBEAST is an entertainment company rooted in music culture. Based in Saudi Arabia and shared globally – we are here to amplify the unseen. We invest in talent, production and content. As a lifestyle and entertainment experience brand, we create unmatched experiences & music events in Saudi Arabia and the region, and support music in the Middle East.',
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
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
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