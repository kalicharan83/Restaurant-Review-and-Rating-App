import { Link } from "react-router-dom";

export default function Menu({restaurant})
{
    return (
        <>
        <ul>
            <li><strong>Menu URL: </strong><Link to={restaurant.menu_url}>Click here</Link></li>
        </ul>
        </>
    );
}