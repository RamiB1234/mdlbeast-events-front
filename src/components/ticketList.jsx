import { useState, useEffect } from "react";
import { useAuth } from "../utils/authProvider";

const TicketList = () => {
    const [tickets, setTickets] = useState([]);
    const { authToken } = useAuth();  // Get the token from the auth context

    useEffect(() => {
        console.log('AuthToken:', authToken);  // Log the authToken to ensure it's correct
        const headers = authToken ? { 'Authorization': `Bearer ${authToken}` } : {};
        const apiUrl = process.env.REACT_APP_API_URL; 
        fetch(`${apiUrl}/ticket`, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`); // More specific error
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetch successful:', data);
                setTickets(data);
            })
            .catch(error => {
                console.error('Fetch error:', error.message); // Log specific error message
            });
    }, [authToken]);  // Ensure effect runs when authToken changes
    

    return(
        <>
            <div className="text-center mt-3">
                <h1>Ticket List</h1>
                <table className="table table-dark mt-5">
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