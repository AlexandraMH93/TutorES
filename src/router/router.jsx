import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import MainLayout from "../layouts/MainLayout"
import TeacherCalendar from "../pages/TeacherCalendar/TeacherCalendar"
import TeacherSubjects from "../pages/TeacherSubjects/TeacherSubjects"
import TeacherClasses from "../pages/TeacherClasses/TeacherClasses"


const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthLayout />,
        children:[
            {
                path:'',
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
        element: <MainLayout />,
        children:[
             {
                 path:'',
                 element: <TeacherCalendar/>
             },{
                path:'subjects',
                element: <TeacherSubjects />
            },{
                path:'classes',
                element: <TeacherClasses />
            }
              
        ]
        
    },
    {
        path:'student',
        element: <MainLayout />
    /*     children:[
             {
                 path:'subjects',
                 element: <Subjects />
            }
        ] */
             //{
        //         path:'/',
        //         element: < />
        //     }
        // ]
    }

]) 

export default router


