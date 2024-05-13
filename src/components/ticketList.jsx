import { useState, useEffect } from "react";

const TicketList = () => {
    const [tickets, setTickets] = useState([]);


    useEffect(() => {
        fetch("https://localhost:7017/ticket")
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setTickets(response);
        })
      },[])

    return(
        <>
            <div className="text-center mt-3">
                <h1>Ticket List</h1>
                <table class="table table-dark mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Event</th>
                            <th scope="col">Date</th>
                            <th scope="col">Attended?</th>
                            <th scope="col">Ticket Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets && tickets.length && tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <th scope="row">1</th>
                                <td>{ticket.name}</td>
                                <td>{ticket.email}</td>
                                <td>{ticket.eventName}</td>
                                <td>{ticket.purchaseDate}</td>
                                <td>{ticket.attended? "Yes" : "No"}</td>
                                <td>{ticket.ticketNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TicketList;