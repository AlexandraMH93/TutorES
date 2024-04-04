import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import MainLayout from "../layouts/MainLayout"
import { Subjects } from "../pages/Subjects/Subjects"


const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthLayout />,
        children:[
            {
                path:'/',
                element: <Login />
            },
            {
                path:'/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path:'/teacher',
        element: <MainLayout />
        // children:[
        //     {
        //         path:'/',
        //         element: < />
        //     },
        //     {
        //         path:'/',
        //         element: < />
        //     }
        // ]
    },
    {
        path:'student',
        element: <MainLayout />,
        children:[
             {
                 path:'subjects',
                 element: <Subjects />
            }
        ]
             //{
        //         path:'/',
        //         element: < />
        //     }
        // ]
    }

]) 

export default router


