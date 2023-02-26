import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page cannot be found</p>
            <Link to="/">Go to Home Page</Link>
        </div>
     );
}
 
export default PageNotFound;