import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import MainLayout from "../layouts/MainLayout"
import TeacherCalendar from "../pages/TeacherCalendar/TeacherCalendar"
import TeacherSubjects from "../pages/TeacherSubjects/TeacherSubjects"
 import Classes from "../pages/Classes/Classes"
import BookingClass from "../pages/BookingClass/BookingClass"


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
    {
        path: '/teacher',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <TeacherCalendar />
            },

            {
                path: 'subjects',
                element: <TeacherSubjects />
            },
            {
                path: 'classes',
                element: <Classes />
            }

        ]

    },
    {
        path: '/student',
        element: <MainLayout />,

        children: [
            {
                path: '',
                element: <Classes/>
            },
            {
                path: 'booking',
                element: <BookingClass/>
            },
            
            
        ]
       
    }

])

export default router


