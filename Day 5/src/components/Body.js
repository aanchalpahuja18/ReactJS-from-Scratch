import ResCard from "./ResCard";
import resList  from "../utils/mockData";
import {useState} from "react";
const Body = () => {

    //Local State Variable - Superpowerful Variable
    const [listofRestaurants, setlistofRestaurants] = useState(resList)

    //Normal JS variable (Array)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                {
                    //Filter Logic here
                   const filteredList = listofRestaurants.filter( 
                        (res) =>  res.info.avgRating >= 4
                    );
                    setlistofRestaurants(filteredList);
            
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listofRestaurants.map((restaurant) => (
                        <ResCard key={restaurant.info.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}


export default Body;