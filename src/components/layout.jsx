import { Outlet, Link } from "react-router-dom";
import Banner from "./banner";

const Layout = () =>{
    return(
        <>
            <div className="row mt-5">
                <div className="col-4 text-start">
                    <nav>
                        <ul>
                            <li style={{display: "inline", marginRight: "15px"}}>
                                <Link to="/" style={{textDecoration: "none"}}>Home</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-4"><Banner/></div>
                <div className="col-4 text-end">
                    <nav>
                        <ul>
                            <li style={{display: "inline", marginRight: "15px"}}>
                                <Link to="/login" style={{textDecoration: "none"}}>Admin Log In</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <Outlet />
        </>

    );
};

export default Layout;