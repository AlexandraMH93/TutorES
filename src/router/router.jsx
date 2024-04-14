import { createBrowserRouter, redirect  } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import MainLayout from "../layouts/MainLayout"
import TeacherCalendar from "../pages/TeacherCalendar/TeacherCalendar"
import TeacherSubjects from "../pages/TeacherSubjects/TeacherSubjects"
 import Classes from "../pages/Classes/Classes"
import BookingClass from "../pages/BookingClass/BookingClass"

import UserProfile from "../pages/UserProfile/UserProfile"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    loader: () => {
      if (localStorage.getItem("token")) {
       if(localStorage.getItem("role")=="teacher")
        return redirect("/teacher") 
      else return redirect("/student") 
      } else {
        return null;
      }
    },
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/teacher",
    element: <MainLayout />,
    loader: () => {
      if (localStorage.getItem("token")) {
       if(localStorage.getItem("role")=="student")
        return redirect("/student") 
      else return null 
      } else {
        return redirect("/") 
      }
    },
    children: [
      {
        path: "",
        element: <TeacherCalendar />,
      },

            {
                path: 'subjects',
                element: <TeacherSubjects />
            },
            {
                path: 'classes',
                element: <Classes />
            },
      {
        path: "profile",
        element: <UserProfile />,
      }

        ] 

    },
    {
        path: '/student',
        element: <MainLayout />,
        loader: () => {
          if (localStorage.getItem("token")) {
           if(localStorage.getItem("role")=="teacher")
            return redirect("/teacher") 
          else return null 
          } else {
            return redirect("/") 
          }
        },
        children:[
      {
        path: "booking",
        element: <BookingClass />,
      },
      {
        path: "",
        element: <Classes />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
  

])

export default router


