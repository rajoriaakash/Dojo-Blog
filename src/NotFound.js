import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Sorry</h2>
            <h2>That page cannot be found</h2>
            <Link to="/">Back to the homepage....</Link>
        </div>
     );
}
 
export default NotFound;