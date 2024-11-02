import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/layouts";
import HomePage from "../pages/homePage";

// createBrowserRouter

const root = createBrowserRouter([
    {
        path:"/",
        element: <Layouts/>,
        children:[
            {
                path:"",
                element:<HomePage />

            }
        ]

    }
])  


export default root