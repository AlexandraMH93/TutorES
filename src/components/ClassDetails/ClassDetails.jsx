import   { useState } from 'react'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
 
import TextField from '@mui/material/TextField';
import avatarImg from "../../assets/images/defaultAvatar.png"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { Avatar, Card, CardContent, Typography } from '@mui/material'

import { createClassDate } from '../../services/studentService';
import { useNavigate } from "react-router-dom"
import "./ClassDetails.css"

const ClassDetails = ({ bookingDetail }) => {

  const navigate = useNavigate()
  const [comment, setComment] =useState("Sin comentarios")
  
  const handleButton= async()=>{
    const result= await createClassDate({timeTable_Id:bookingDetail.date.id, subject_Id:bookingDetail.subject.id, comments: comment})
    if(result== "ClassDate created") navigate("/student/")

  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} lg={8}>
        <Typography variant="h5">Información del profesor</Typography>
        <Card className="teacherBookingCard">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
              <Avatar alt={bookingDetail.teacher.userId.firstName} src={bookingDetail.teacher.userId.profileImage}></Avatar>
              </Grid>
              <Grid item xs={12} md={8} lg={8} id="teacherCardInfo">
              <Typography variant="h6">{bookingDetail.teacher.userId.firstName+" "+bookingDetail.teacher.userId.lastName }</Typography>
              <Typography variant="body1"><strong>Descripción del profesor: </strong>{bookingDetail.teacher.description}</Typography>
              </Grid>
            </Grid>
          </CardContent>

        </Card>
      </Grid>


      <Grid item xs={12} md={4} lg={4}>
        <Typography variant="h5">Información de la reserva</Typography>
        <Card className="teacherBookingCard" >
          <CardContent >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h6">Asignatura</Typography>
              <Typography variant="body1">{bookingDetail.subject.name}</Typography>
              <Typography variant="h6">Fecha</Typography>
              <Typography variant="body1">{bookingDetail.date.date}</Typography>
              <Typography variant="h6">Hora</Typography>
              <Typography variant="body1">{bookingDetail.date.time}</Typography>
              <Typography variant="h6">Precio</Typography>
              <Typography variant="body1">{bookingDetail.teacher.price}€</Typography>
              <Typography variant="h6">Comentario</Typography>
              <BaseTextareaAutosize aria-label="maximum height"   onChange={(e)=>setComment(e.target.value)} id="commentTextArea" minRows={5} > </BaseTextareaAutosize>
              <Button onClick={()=>handleButton()} id="confirmButton" sx={{color:"white"}}variant="contained" color="primary">Confirmar cita</Button>

              </Grid>
            </Grid>
          </CardContent>

        </Card>
      </Grid>

    </Grid>
  )
}

export default ClassDetails