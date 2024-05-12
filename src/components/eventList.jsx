import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        fetch("https://localhost:7017/event")
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setEvents(response);
        })
      },[])

    return (
      <div className="row mt-4 mb-5">
        {events && events.length>0 && events.map((event) => (
          <div className="col-4" key={event.id}>
            <div className="card" style={{ width: "26rem" }}>
              <img
                className="card-img-top"
                src="/image.png"
                alt="Card image cap"
                style={{ width: "415px", height: "350px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">
                  {event.description.substring(0, 150)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{event.location}</li>
                <li className="list-group-item">{event.date}</li>
              </ul>
              <div className="card-body">
                <Link
                  to={{ pathname: "/event" }}
                  state={{ event }}
                  className="card-link"
                >
                  Event Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default EventList;