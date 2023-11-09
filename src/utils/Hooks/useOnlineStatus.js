import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(true);
    
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
            console.log(onlineStatus);
        });
        
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
            console.log(onlineStatus);
        });

    }, []);

    return onlineStatus; 
};