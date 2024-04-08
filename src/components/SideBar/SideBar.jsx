import { AppBar, Box, Button, Typography } from "@mui/material";
import "./SideBar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useEffect, useState } from "react";
const SideBar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState({
    calendar: "secondary",
    classes: "secondary",
    subjects: "secondary",
  });
  

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const colorController = (option) => {
    const newObj = {
      calendar: "secondary",
      classes: "secondary",
      subjects: "secondary",
    };

    switch (option) {
      case "calendar":
        newObj.calendar = "primary";
        break;
      case "classes":
        newObj.classes = "primary";
        break;
      case "subjects":
        newObj.subjects = "primary";
        break;
    }

    setCurrentPage(newObj);
  };

  
  return (
    <Box id="sidebar">
      <Box id="sidebarLinks">
        {localStorage.getItem("role") == "teacher" ? (
          <>
            <Box className="sideBarOption">
              <Link to="/teacher/"  onClick={()=>colorController("calendar")}>
                <ArticleOutlinedIcon color={currentPage.calendar} />
                <Typography color="secondary" variant="body1">
                  Calendario
                </Typography>
              </Link>
            </Box>
            <Box className="sideBarOption">
              <Link to="/teacher/classes" onClick={()=>colorController("classes")}>
                <CalendarTodayOutlinedIcon color="secondary" />
                <Typography color="secondary" variant="body1">
                  Clases
                </Typography>
              </Link>
            </Box>
            <Box className="sideBarOption">
              <Link to="/teacher/subjects" onClick={()=>colorController("subjects")}>
                <ListOutlinedIcon color={currentPage.subjects} />
                <Typography color="secondary" variant="body1">
                  Asignaturas
                </Typography>
              </Link>
            </Box>
          </>
        ):
        (
          <>
           
          <Box className="sideBarOption">
            <Link to="/student/" onClick={()=>colorController("classes")}>
              <CalendarTodayOutlinedIcon color="secondary" />
              <Typography color="secondary" variant="body1">
                Clases
              </Typography>
            </Link>
          </Box>
          <Box className="sideBarOption">
            <Link to="/student/booking" onClick={()=>colorController("subjects")}>
              <BookmarkBorderOutlinedIcon color={currentPage.subjects} />
              <Typography color="secondary" variant="body1">
                Reserva una clase
              </Typography>
            </Link>
          </Box>
        </>




        )
        
        
        }
      </Box>

      <Box>
        <Button
          id="logout"
          onClick={() => {
            onLogout();
          }}
        >
          <LogoutIcon>Log out</LogoutIcon>
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
