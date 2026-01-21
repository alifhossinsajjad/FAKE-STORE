import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter ([
    {
        path : '/',
        element : <RootLayout/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
        ]
    }
])

export default router;