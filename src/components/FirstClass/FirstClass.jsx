import React, { useEffect, useState } from 'react'

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CircleIcon from "@mui/icons-material/Circle";
import { Avatar, Alert, Card, CardContent, Typography, Box, CardActions, Button } from '@mui/material'
import { deleteClassDate, deleteTimeTable } from '../../services/teacherService';
import "./FirstClass.css"

const FirstClass = ({ dateInfo, setClassDates, setFirstClass, classDate }) => {

  const [confirm, setConfirm] = useState(false)
  const [buttonText, setButtonText]= useState("Eliminar Clase")

  const handleDeleteStudentButton = async () => {

    if (confirm) {
      const result = await deleteClassDate(dateInfo.id)
      const result2 = await deleteTimeTable(dateInfo.timetableId.id)
      const newClasses = classDate.filter((elem) => elem.id !== parseInt(dateInfo.id))
      setButtonText("Eliminar Clase")
      setConfirm(false)
      setClassDates(newClasses)
      setFirstClass(newClasses[0])

    } else {
      setButtonText("Confirmar")
      setConfirm(true)
    }




  }

  const handleDeleteTeacherButton = async () => {
    if (confirm) {
      const result = await deleteClassDate(dateInfo.class_date.id)
      const result2 = await deleteTimeTable(dateInfo.id)
      const newClasses = classDate.filter((elem) => elem.id !== parseInt(dateInfo.id))
      setConfirm(false)
      setClassDates(newClasses)
      setFirstClass(newClasses[0])
    } else {

      setConfirm(true)
    }

  }


  if (localStorage.getItem("role") == "student") {
    return (
      <Card id="firstClassCard">
        <CardContent id="firstClassCardContent">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3} >
              <Avatar id="avatarImg" src={dateInfo.timetableId.teacherId.userId.profileImage} />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="body2">Clase con</Typography>
                  <Typography variant="h5"> {dateInfo.timetableId.teacherId.userId.firstName + " " + dateInfo.timetableId.teacherId.userId.lastName}</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Fecha</Typography>
                      <Typography variant="body2">{dateInfo.timetableId.date}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Hora</Typography>
                      <Typography variant="body2">{dateInfo.timetableId.time}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Tema</Typography>
                      <Typography variant="body2">{dateInfo.subject.name}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Precio</Typography>
                      <Typography variant="body2">{dateInfo.timetableId.teacherId.price}€</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        Comentario
                      </Typography>
                      <Typography variant="body2">
                        {dateInfo.comments}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions id="firstCardAction">
          <Link href={"mailto:" + dateInfo.timetableId.teacherId.userId.email} color="secondary" underline="none">
            Contactar profesor
          </Link>
          {confirm && <Alert severity="warning">
          ¿Está seguro de que quiere eliminar la clase?
          </Alert>}
          <Button onClick={() => handleDeleteStudentButton()} variant="contained" color="warning"> {buttonText}</Button>

        </CardActions>
      </Card>

    )
  }
  else {

    return (
      <Card id="firstClassCard">
        <CardContent id="firstClassCardContent">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3} >
              <Avatar id="avatarImg" src={dateInfo.class_date.userId.profileImage} />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="body2">Clase con</Typography>
                  <Typography variant="h5"> {dateInfo.class_date.userId.firstName + " " + dateInfo.class_date.userId.lastName}</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Fecha</Typography>
                      <Typography variant="body2">{dateInfo.date}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Hora</Typography>
                      <Typography variant="body2">{dateInfo.time}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6"> Tema</Typography>
                      <Typography variant="body2">{dateInfo.class_date.subject.name}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Box className="dateElementContainer">
                    <Box>
                      <CircleIcon color="primary" />
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        Comentario del estudiante
                      </Typography>
                      <Typography variant="body2">
                        {dateInfo.class_date.comments}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions id="firstCardAction">
          <Link href={"mailto:" + dateInfo.class_date.userId.email} color="secondary" underline="none">
            Contactar profesor
          </Link>
          {confirm && <Alert severity="warning">
            ¿Está seguro de que quiere eliminar la clase?
          </Alert>}
          <Button onClick={() => handleDeleteTeacherButton()} variant="contained" color="warning"> {buttonText} </Button>

        </CardActions>
      </Card>

    )




  }

}

export default FirstClass
