import { useEffect, useState } from "react";
import Restaurants from "../components/Restaurants";
import { useLoaderData, useNavigation} from "react-router-dom";
import classes from "./Home.module.css";
import Filters from "../components/Filters";

export default function Home()
{
    const navigation=useNavigation();
    const [loading,setLoading]=useState(false);

    const {data,page}=useLoaderData();
    const {restaurants,total,limit}=data;
    // console.log(total);
    // console.log(typeof(total));
    // console.log(restaurants);
    // let temp=parseInt(limit);
    const [restaurantsList,setRestaurantsList]=useState(restaurants);
    const [originalRestaurantsList,setOriginalRestaurantsList]=useState(restaurants);
    const [pageLimit,setPageLimit]=useState(limit);
    const [currentPage,setCurrentPage]=useState(page);
    useEffect(()=>{
        async function fetchRestaurants()
        {
            setLoading(true);
            const response=await fetch(`http://localhost:3000/backend/restaurants?page=${currentPage}`);
            if(!response.ok)
                console.log("An error occured in fetching the data from use Effect");
            const data=await response.json();
            // console.log(data);
            const {restaurants,total,limit}=data;
            // let temp=parseInt(total);
            // console.log("Limit2:",limit);
            setPageLimit(limit);
            setRestaurantsList([...restaurants]);
            setOriginalRestaurantsList([...restaurants]);
            setLoading(false);
        }
        fetchRestaurants();
    },[currentPage]);

    function handleSearch(e)
    {
        setRestaurantsList(originalRestaurantsList);
        const keyword=e.target.value;
        if(keyword=="")
        {
            return;
        }
        setRestaurantsList((prev)=>{
            const updated=[...prev];
            const newUpdated=updated.filter(({_id,restaurant})=>{return (restaurant.name.toUpperCase().includes(keyword.toUpperCase()))});
            console.log(newUpdated);
            return newUpdated;
        });
    }

    return (
        <>
        <div className={classes.searchContainer}><div><input type="text" placeholder="Search any restaurant" className={classes.search} onChange={handleSearch}></input></div></div>
        <div className={classes.home}>
        <div className={classes.filter}>
        <Filters restaurants={restaurantsList} setRestaurants={setRestaurantsList} original={originalRestaurantsList} setOriginal={setOriginalRestaurantsList}></Filters>
        </div>
        <main className={classes.restaurants}>
        {!loading&&restaurantsList.length===0&&<div className={classes.no}><img src="https://img.freepik.com/premium-photo/search-icon-magnifying-glass-zoom-symbol-investigation-concept-magnification-tool-searching_980716-82435.jpg" height="300px" width="300px"></img><h2>Seems like there are no restaurants....</h2></div>}
        {loading&&<div className={classes.load}></div>}
        {!loading&&restaurantsList.length>0&&<Restaurants restaurants={restaurantsList} currentPage={currentPage} total={total} limit={pageLimit} setCurrentPage={setCurrentPage}></Restaurants>}
        </main>
        </div>
        </>
    );
}

export async function loader({params,request})
{
    const page=(new URL(request.url)).searchParams.get('page')||1;
    const response=await fetch(`http://localhost:3000/backend/restaurants?page=${page}`);
    if(!response.ok)
        console.log("error");
    const data=await response.json();
    return {data,page:parseInt(page)};
}