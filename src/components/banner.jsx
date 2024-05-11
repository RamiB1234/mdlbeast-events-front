import { Link } from "react-router-dom";

const Banner = ()=>{
    return(
        <>
            <div className="text-center">
                <Link to={{pathname: '/'}} style={{textDecoration: "none"}}><h1>MDLBeast Events</h1></Link>            
            </div>
        </>
    );
};

export default Banner;