import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/Hooks/useRestaurantMenu";
import { DishTab } from "./DishTab";
import { useState } from "react";
import Preloader from "../../Assets/skeleton-preloader.gif";

export const Menu = () => {
    const { resId } = useParams();
    
    const [ showIndex, setShowIndex ] = useState(null);
    const resInfo = useRestaurantMenu(resId);

    return (resInfo == null) ? (<div className="h-[100vh] rounded-lg flex justify-center items-center max-w-[800px] w-9/12 m-auto mb-8 bg-gray-200">
            <img className="w-[20%] max-w-[100px]" src={Preloader} />
        </div>)
         :
        (<div className="max-w-[800px] w-9/12 m-auto mb-8">
            {console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)}
            <span className="mb-8 p-4 font-mono text-2xl font-bold flex w-12/12 justify-center">{resInfo?.data?.cards[0]?.card?.card?.info?.name}</span>
            <ul>{resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card, index) => { 
                console.log(index, (showIndex===index))
                if (card.card.card.itemCards == undefined)
                    return;
                return (<DishTab setShowList={(flag) => {(flag) ? setShowIndex(index) : setShowIndex(null)}} index={index} showList={showIndex === index} key={(Math.random() * 5000000) + 100000} card={card}/>)
            })}</ul>
        </div>
    );
};