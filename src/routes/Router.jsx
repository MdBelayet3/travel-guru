import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register"
import TouristSpot from "../pages/TouristSpot";
import Booking from "../pages/Booking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/tourist/:id",
                element: <TouristSpot></TouristSpot>,
                loader: ()=> fetch("/places.json"),
            },
            {
                path: "/tourist/:id/booking",
                element: <Booking></Booking>
            }
        ]
    }
])

export default router;
