import { useEffect, useState } from "react";
import classes from "./RestaurantDetail.module.css";
import Details from "./Details";
import Events from "./Events";
import Menu from "./Menu";
import Photos from "./Photos";
import { Form } from "react-router-dom";

export default function RestaurantDetail({ restaurant,data }) {
    const userReviews=data.reviews;
    // console.log(userReviews);
    const [activeTab,currentActiveTab]=useState(null);
    // const[reviews,setUserReviews]=useState(userReviews);

    function handleTabChange(section)
    {
        currentActiveTab(section);
    }


  return (
    <>
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.basicDetails}>
          <img src={restaurant.featured_image}></img>
          <div className={classes.mainDetails}>
            <h2>{restaurant.name}</h2>
            <address>{restaurant.location.address}</address>
            <div ><p className={restaurant.user_rating.aggregate_rating>=4?classes.positive:classes.negative}>
              {/* <img src="https://w7.pngwing.com/pngs/793/163/png-transparent-computer-icons-star-star-rating-4-9-angle-triangle-symmetry-thumbnail.png" height="15px" width="15px" ></img> */}
              {restaurant.user_rating.aggregate_rating}</p></div>
            {restaurant.has_online_delivery
              ? "Online Delivery is available"
              : "Oops Online delivery is unavailable"}
            <p><strong>Cuisines: </strong>{restaurant.cuisines}</p>
            <p><strong>Average cost for two: </strong>{restaurant.average_cost_for_two}</p>
          </div>
          {/* end of maindetails */}
        </div>
        {/*end of basic details*/}
        <div>
          <nav className={classes.navigationButtons}>
            <button className={activeTab==="details"?classes.active:undefined} onClick={()=>handleTabChange("details")}>Details</button>
            <button className={activeTab==="events"?classes.active:undefined} onClick={()=>handleTabChange("events")}>Events</button>
            <button className={activeTab==="menu"?classes.active:undefined} onClick={()=>handleTabChange("menu")}>Menu</button>
            <button className={activeTab==="photos"?classes.active:undefined} onClick={()=>handleTabChange("photos")}>Photos</button>
          </nav>
        </div>
        <div className={classes.content}>
        <div>
            {!activeTab&&<p className={classes.note}><strong>Please select to know more about this restaurant....</strong></p>}
            {activeTab==="details"&&<Details restaurant={restaurant}></Details>}
            {activeTab==="events"&&<Events restaurant={restaurant}></Events>}
            {activeTab==="menu"&&<Menu restaurant={restaurant}></Menu>}
            {activeTab==="photos"&&<Photos restaurant={restaurant}></Photos>}
        </div>
        </div>
        <div>
          <h2>User reviews and ratings</h2>
          {userReviews&&userReviews.length>0?userReviews.map((userReview)=>{
            return <div key={userReview.name}><p><strong>{userReview.name}</strong></p><p>Rating:{userReview.rating}</p><p>Review:{userReview.review}</p><hr></hr></div>
          }):<p>Currently there are no reviews for this restaurant.You will be first</p>}
        </div>
        <div className={classes.form}>
        <h2>Provide your review and rating</h2>
        <Form method="post">
          <div className={classes.userinput}>
            <label htmlFor="username">Name </label>
            <input type="text" name="username" id="username" required></input>
          </div>
          <div className={classes.userinput}>
            <label htmlFor="rating">Rating </label>
            <input type="text" name="rating" id="rating" required></input>
          </div>
          <div className={classes.userinput}>
            <label htmlFor="review">Review</label>
            <textarea id="review" name="review" required rows="3" cols="10" className={classes.input}></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </Form>
        </div>
      </div>
      </div>
    </>
  );
}