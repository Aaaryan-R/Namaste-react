import { React, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { AppLayout } from "./components/AppLayout";
import { Error } from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body";
import { Menu } from "./components/Menu";

const Groceries =  lazy(() => import('./components/Groceries'));
const Contact =  lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<p>Loading....</p>}><Contact /></Suspense>,
            },        
            {
                path: "/groceries",
                element: <Suspense fallback={<p>Loading....</p>}><Groceries /></Suspense>,
            },        
            {
                path: "/restaurants/:resId",
                element: <Menu />,
            }        
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);