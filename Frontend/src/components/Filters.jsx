import { useState } from "react";
import classes from "./Filters.module.css";
import { convertsCountry } from "../../util/countryCode";

export default function Filters({restaurants,setRestaurants,original,setOriginal})
{
    function handleApplyFilters(e)
    {
        if(countries.country.length==0)
            return;
        setRestaurants(original); 
        e.preventDefault();
        setRestaurants((prev)=>{
            let updatedOne=[...prev];
            console.log(updatedOne);
            // let temp=updatedOne.filter(({_id,restaurant})=>!(countries.country.includes(convertsCountry(restaurant.location.country_id))));

            let temp = updatedOne.filter(({ restaurant }) => {
                const countryId = restaurant.location.country_id;
                const countryName = convertsCountry(countryId);
                const shouldFilterOut = countries.country.includes(countryName);
                return shouldFilterOut;
            });

            console.log([...temp]);
            return [...temp];
        });
    }
    function handleSelectCountry(e)
    {
        // need to see once
        const {name,checked,value}=e.target;
        setCountries((prev) => {
            const updatedCountries = checked
                ? [...prev.country, value]
                : prev.country.filter((val) => val !== value);
            // console.log({...prev,country:updatedCountries});
            return {
                ...prev,
                country: updatedCountries
            };
        });
        
    }
    // const [restaurants,setRestaurants]=useState(restaurantsList);
    const [countries,setCountries]=useState({country:[]});
    return (
        <>
        <div className={classes.filter}>
            <h2>Filters</h2>
            <hr></hr>
            <div className={classes.country}>
                <h3 className={classes.filterHeading}>Country</h3>
                <hr></hr>
                <div className={classes.input}>
                <input type="checkbox" id="India" name="country" onClick={handleSelectCountry} value="India"></input>
                <label htmlFor="India"  className={classes.label}>India</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Australia" name="country" onClick={handleSelectCountry} value="Australia"></input>
                <label htmlFor="Australia" className={classes.label}>Australia</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Brazil" name="country" onClick={handleSelectCountry} value="Brazil"></input>
                <label htmlFor="Brazil" className={classes.label}>Brazil</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Canada" name="country" onClick={handleSelectCountry} value="Canada"></input>
                <label htmlFor="Canada" className={classes.label}>Canada</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Indonesia" name="country" onClick={handleSelectCountry} value="Indonesia"></input>
                <label htmlFor="Indonesia" className={classes.label}>Indonesia</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="New Zealand" name="country" onClick={handleSelectCountry} value="New Zeland"></input>
                <label htmlFor="New Zealand" className={classes.label}>New Zeland</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Phillipines" name="country" onClick={handleSelectCountry} value="Phillipines"></input>
                <label htmlFor="Phillipines" className={classes.label}>Phillipines</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Qatar" name="country" onClick={handleSelectCountry} value="Qatar"></input>
                <label htmlFor="Qatar" className={classes.label}>Qatar</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Singapore" name="country" onClick={handleSelectCountry} value="Singapore"></input>
                <label htmlFor="Singapore" className={classes.label}>Singapore</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="South Africa" name="country" onClick={handleSelectCountry} value="South Africa"></input>
                <label htmlFor="South Africa" className={classes.label}>South Africa</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Sri Lanka" name="country" onClick={handleSelectCountry} value="Sri Lanka"></input>
                <label htmlFor="Sri Lanka" className={classes.label}>Sri Lanka</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="Turkey" name="country" onClick={handleSelectCountry} value="Turkey"></input>
                <label htmlFor="Turkey" className={classes.label}>Turkey</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="UAE" name="country" onClick={handleSelectCountry} value="UAE"></input>
                <label htmlFor="UAE" className={classes.label}>UAE</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="United Kingdom" name="country" onClick={handleSelectCountry} value="United Kingdom"></input>
                <label htmlFor="United Kingdom" className={classes.label}>United Kingdom</label>
                </div>
                <div className={classes.input}>
                <input type="checkbox" id="United State" name="country" onClick={handleSelectCountry} value="United States"></input>
                <label htmlFor="United State" className={classes.label}>United States</label>
                </div>
            </div>
            <hr></hr>
            <div className={classes.buttonContainer}>
            <button onClick={handleApplyFilters} className={classes.button}>Apply filters</button>
            </div>
            </div>
        </>
    );
}