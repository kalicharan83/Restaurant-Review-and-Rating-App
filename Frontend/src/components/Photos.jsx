import { Link } from "react-router-dom";

export default function Photos({restaurant})
{
    return (
        <>
        <ul>
            <li><strong>Photos URL: </strong><Link to={restaurant.photos_url}>Click here</Link></li>
        </ul>
        </>
    );
}