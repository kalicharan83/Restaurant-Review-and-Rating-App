import { Link } from "react-router-dom";

export default function Events({restaurant})
{
    return (
        <>
        <ul>
            <li><strong>Events URL: </strong><Link to={restaurant.events_url}>Click here</Link></li>
        </ul>
        </>
    );
}