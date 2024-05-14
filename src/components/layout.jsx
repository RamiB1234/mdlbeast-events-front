import { Outlet, Link } from "react-router-dom";
import Banner from "./banner";
import { useAuth  } from "../utils/authProvider";
import { useNavigate } from 'react-router-dom';

const Layout = () =>{
    const { authToken, logout } = useAuth();  // Get the authentication token from context
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');  // Redirect to the home page
    };

    return(
        <>
            <div className="row mt-5">
                <div className="col-4 text-start">
                    <nav>
                        <ul>
                            <li style={{display: "inline", marginRight: "15px"}}>
                                <Link to="/" style={{textDecoration: "none"}}>Home</Link>
                            </li>
                            {authToken && (
                                <>
                                    <li style={{ display: "inline", marginRight: "15px" }}>
                                        <Link to="/ticketlist" style={{ textDecoration: "none" }}>Ticket List</Link>
                                    </li>
                                    <li style={{ display: "inline", marginRight: "15px" }}>
                                        <Link to="/checkin" style={{ textDecoration: "none" }}>CheckIn</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="col-4"><Banner/></div>
                <div className="col-4 text-end">
                    <nav>
                        <ul>
                            {authToken ? (
                                <li style={{display: "inline", marginRight: "15px"}}>
                                    <button onClick={handleLogout} style={{border: "none", background: "none", color: "inherit", cursor: "pointer", padding: 0}}>Logout</button>
                                </li>
                            ) : (
                                <li style={{display: "inline", marginRight: "15px"}}>
                                    <Link to="/login" style={{textDecoration: "none"}}>Admin Log In</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;