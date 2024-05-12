import { Link } from "react-router-dom";

const Banner = ()=>{
    return(
        <>
            <div className="text-center">
                <Link to={{pathname: '/'}} style={{textDecoration: "none"}}>
                    <img src="/mdlBeastLogo.png" alt="logo"/>
                </Link>            
            </div>
        </>
    );
};

export default Banner;