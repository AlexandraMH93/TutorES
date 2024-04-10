import { getStudent, getSubject } from "../../services/teacherService";
import { useEffect, useState } from "react";
import avatarImg from "../../assets/images/defaultAvatar.png"
import { Avatar, Card, CardContent, Typography, Box, CardActions, Button } from '@mui/material'
import "./ListClasses.css";

const ListClasses = ({ classesObj, setcurrentDateInfo, setOpen }) => {


  const handleButton = (dateObj) => {

    if (localStorage.getItem("role") == "student") {
    setcurrentDateInfo({
      student: dateObj.timetableId.teacherId.userId.firstName + " " + dateObj.timetableId.teacherId.userId.lastName,
      date: dateObj.timetableId.date, time: dateObj.timetableId.time, subject: dateObj.subject.name, description: dateObj.comments,
      email: dateObj.timetableId.teacherId.userId.email, studentImg: dateObj.timetableId.teacherId.profileImage, timeTableid: dateObj.timetableId.id,
      classId: dateObj.id
    })}
    else{

      setcurrentDateInfo({
        student: dateObj.class_date.userId.firstName + " " + dateObj.class_date.userId.lastName,
        date: dateObj.date, time: dateObj.time, subject: dateObj.class_date.subject.name, description: dateObj.class_date.comments,
        email: dateObj.class_date.userId.email, studentImg: dateObj.class_date.userId.profileImage, timeTableid: dateObj.id,
        classId: dateObj.class_date.id
      })


    }

    setOpen(true)


  }


  return <Box id="ClassesContainer">
    {classesObj.map((elem) => {
       if (localStorage.getItem("role") == "student") {
        return (
          <Card onClick={() => { handleButton(elem) }} className="classCard" >
            <CardContent className="classCardContainer" >
              <Avatar src={elem.timetableId.teacherId.userId.profileImage} />
              <Typography variant="h6"> {elem.timetableId.teacherId.userId.firstName + " " + elem.timetableId.teacherId.userId.lastName} </Typography>
              <Typography variant="body1"> <strong>Fecha:</strong> {elem.timetableId.date + " " + elem.timetableId.time.split(":")[0] + ":" + elem.timetableId.time.split(":")[1]} </Typography>
              <Typography variant="body1"> <strong>Asignatura:</strong> {elem.subject.name} </Typography>

            </CardContent>

          </Card>

        )
      } else {
        return (
          <Card onClick={() => { handleButton(elem) }} className="classCard" >
            <CardContent className="classCardContainer" >
              <Avatar src={elem.class_date.userId.profileImage} />
              <Typography variant="h6"> {elem.class_date.userId.firstName + " " + elem.class_date.userId.lastName} </Typography>
              <Typography variant="body1"> <strong>Fecha:</strong> {elem.date + " " + elem.time.split(":")[0] + ":" + elem.time.split(":")[1]} </Typography>
              <Typography variant="body1"> <strong>Asignatura:</strong> {elem.class_date.subject.name} </Typography>
            </CardContent>
          </Card>
        )
      }

    })}</Box>;
};

export default ListClasses;
