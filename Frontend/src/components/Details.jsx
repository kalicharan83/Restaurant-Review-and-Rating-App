export default function Details({restaurant})
{
    return (
        <>
        <ul >
            <li><strong>Price Range: </strong>{restaurant.price_range}</li>
            <li><strong>User Rating: </strong>{restaurant.user_rating.rating_text}</li>
            <li><strong>Is Delivering Now:</strong>{restaurant.is_delivering_now?"Yes,You can order now":"Sorry the service is currently unavailable."}</li>
            <li><strong>Seperate Menu for online:</strong>{restaurant.switch_to_order_menu?"Yes":"No,The menu card is same"}</li>
            <li><strong>Currency:</strong>{restaurant.currency}</li>
        </ul>
        </>
    );
}