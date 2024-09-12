import { redirect, useLoaderData, useParams } from "react-router-dom";
import RestaurantDetail from "../components/RestaurantDetail";
import { useState } from "react";
export default function Restaurant()
{
    const data=useLoaderData();
    
    return (
        <>
        <RestaurantDetail restaurant={data.restaurant} data={data}></RestaurantDetail>
        </>
    );
}

export async function loader({params})
{
    const restaurant=params.restaurantid;
    // console.log("Request");
    const response=await fetch("http://localhost:3000/backend/restaurants/"+restaurant);
    if(!response.ok)
        console.log("error");
    const data=await response.json();
    return data;
}

export async function action({params,request})
{
    const restaurant=params.restaurantid;
    const userData=await request.formData();
    const name=userData.get("username");
    const rating=userData.get("rating");
    const review=userData.get("review");
    const currentReview={name,rating,review};

    const response=await fetch("http://localhost:3000/backend/restaurants/"+restaurant,{
        method:"POST",
        body:JSON.stringify({...currentReview}),
        headers:{
            "Content-Type":"application/json",
        }
    });
     if(!response.ok)
        console.log("Updation failed");
    return redirect(`/${restaurant}`);
}