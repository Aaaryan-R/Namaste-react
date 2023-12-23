import { UserContext } from "../utils/UserContext";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

export const AppLayout = () => {

    const [ userName, setUserName ] = useState("Guest");

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName  }}>
                <div id="main-layout-container" className="mt-32">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};
