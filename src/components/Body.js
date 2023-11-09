import { ResCardContainer } from "./ResCardContainer";
import { useEffect, useState } from "react";
import { SkeletonContainer } from "./SkeletonContainer";
import { useOnlineStatus } from "../utils/Hooks/useOnlineStatus";

export const Body = () => {

    const [ restList, setRestList ] = useState([]);
    const [ filteredList, setFilteredList ] = useState([]);
    
    const onlineStatus = useOnlineStatus();

    let searchQuery = "";

    useEffect( () => {
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9073473&lng=77.6011195&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            setRestList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return onlineStatus ? (
        <div id="body" className=" text-center">
            
            <span className="flex justify-center">
                <button className="text-zinc-300 hover:text-yellow-300 transition-all bg-zinc-100 border-yellow-300 border font-mono rounded-l-md border-r-0 px-2" id="filter-btn"
                    onClick={(e) => {
                        setFilteredList(restList.filter( res => res.info.avgRating > 4));
                    }}
                >Top rated</button>
                <input className=" text-yellow-600 text-sm px-2 focus:outline-none focus:border-yellow-600 border-solid border border-yellow-300" type="text"  onChange={(e) => {
                    searchQuery = e.target.value;
                }}/>
                <button className="transition-all border border-yellow-300 hover:bg-white hover:text-yellow-300 rounded-r-md bg-yellow-300 px-4 py-2 text-xs text-white font-bold font-mono  border-l-0" onClick={(e) => {
                        e.target.parentNode.children[1].value = "";
                        setFilteredList(restList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchQuery)));      
                        console.log();
                }}>SEARCH</button>
            </span>
            {(restList?.length === 0) ? <SkeletonContainer/> : <ResCardContainer restList={filteredList}/>}
        </div>
    ) : (<>Oops!! looks like you are offline!!</>);
};