import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../constants";

export const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetch(RESTAURANT_MENU_URL+resId)
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            setResInfo(json);
        });
    }, []);
    
    return resInfo;
}; 