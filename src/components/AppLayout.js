import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
    return (
        <div id="main-layout-container" className="mt-32">
            <Header />
            <Outlet />
        </div>
    );
};
