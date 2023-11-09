import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/Hooks/useOnlineStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBasketShopping, faAt, faCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    const onlineStatus = useOnlineStatus();
    
    return (
        <div id="header" className="z-10 fixed top-0 left-0 right-0 p-4 flex justify-between bg-yellow-300">
            <div id="header-logo" className="w-16">
                <Link to={"/"}>
                    <img className="rounded-full" id="logo" src={LOGO_URL} />
                </Link>
            </div>
            <div id="nav-items-list" className="flex items-center text-white font-mono">
                <ul className="flex align-middle">
                    <li className="mr-4">
                        <p>{/*Online status : */}<FontAwesomeIcon className={(onlineStatus) ? "text-green-500" : "text-red-500"} size="xs" icon={faCircle} /></p> 
                    </li>
                    <li className="mr-4">
                        <Link to={"/"}><FontAwesomeIcon icon={faHouse} /></Link>
                    </li>
                    <li className="mr-4">
                        <Link to={"/groceries"}><FontAwesomeIcon icon={faBasketShopping} /></Link>
                    </li>
                    {/* <li className="mr-4">
                        <Link to={"/about"}>About us</Link>
                    </li> */}
                    <li>
                        <Link to={"/contact"}><FontAwesomeIcon icon={faAt} /></Link>
                    </li>
                </ul> 
            </div>
        </div>
    );
};