import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/Hooks/useOnlineStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCarrot, faAt, faCircle, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

export const Header = () => {

    const onlineStatus = useOnlineStatus();
    const userData = useContext(UserContext);

    /* Subscribing to our store */
    const cart = useSelector((store) => store.cart.items);

    return (
        <div id="header" className="z-10 fixed top-0 left-0 right-0 p-4 flex justify-between bg-yellow-300" data-testid="header">
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
                        <Link to={"/groceries"}><FontAwesomeIcon icon={faCarrot} /></Link>
                    </li>
                    {/* <li className="mr-4">
                        <Link to={"/about"}>About us</Link>
                    </li> */}
                    <li className="mr-4">
                        <Link to={"/contact"}><FontAwesomeIcon icon={faAt} /></Link>
                    </li>
                    <li className="mr-4">
                        <Link to={"/cart"}><FontAwesomeIcon icon={faCartShopping}/><span data-testid="cart-length"> {cart.length}</span></Link>
                    </li>
                    <li>
                        {userData.loggedInUser}
                    </li>
                </ul> 
            </div>
        </div>
    );
};