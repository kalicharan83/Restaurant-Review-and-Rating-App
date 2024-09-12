import classes from "./HomeRestaurant.module.css";
import { Link } from "react-router-dom";

export default function HomeRestaurant({data,id})
{
    return (
        <>
        <div className={classes.card}>
        <Link to={`/${id}`}>
        <div className={classes.restaurantContainer}>
            <img src={data["featured_image"]}></img>
            <div className={classes.details}>
                <h3 className={classes.name}>{data.name}</h3>
                <address>{data.location.address}</address>
                <p><strong>Cuisines: </strong>{data.cuisines}</p>
                <p>{data.has_online_delivery?"Online delivery is available":"Online delivery is not available"}</p>
            </div>
        </div>
        {/* <hr></hr> */}
        </Link>
        </div>
        </>
    );
}