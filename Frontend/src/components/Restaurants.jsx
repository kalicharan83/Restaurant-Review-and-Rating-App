import HomeRestaurant from "./HomeRestaurant";
import classes from "./Restaurants.module.css";

export default function Restaurants({restaurants,currentPage,setCurrentPage,total,limit})
{
    function handleButtonClick(e,pageNumber)
    {
        e.preventDefault();
        setCurrentPage(pageNumber);
    }
    // console.log("limit:",limit);
    const NumberOfPages=Math.ceil(total/limit);
    // console.log(NumberOfPages);
    const arr=Array.from({length:NumberOfPages},(_,index)=>index+1);


    // const restaurantList = Object.values(restaurants);
    return (
        <>
        <div>
        <div className={classes.restaurants}>
        {restaurants.map(({_id,restaurant})=><HomeRestaurant data={restaurant} id={_id} key={_id}></HomeRestaurant>)}
        <div className={classes.pageNo}>
            {arr.map((pageNo)=>{
                return <button key={pageNo} className={classes.pageButtons} hidden={currentPage===pageNo} onClick={(e)=>handleButtonClick(e,pageNo)}>{pageNo}</button>
            })}
        </div>
        </div>
        </div>
        </>
    );
}