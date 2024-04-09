import React, { useState } from 'react'
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import avatarImg from "../../assets/images/defaultAvatar.png"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { createClassDate } from '../../services/studentService';
import { useNavigate } from "react-router-dom"



const ClassDetails = ({ bookingDetail }) => {

  const navigate = useNavigate()
  const [comment, setComment] =useState("")
  
  const handleButton= async()=>{

    const result= await createClassDate({timeTable_Id:bookingDetail.date.id, subject_Id:bookingDetail.subject.id, comments: comment})
    if(result== "ClassDate created") navigate("/student/classes")

  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} lg={8}>
        <Typography variant="h4">Información del profesor</Typography>
        <Card id="teacherBookingInfo">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <img id="avatarImg" src={avatarImg} />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h5">{bookingDetail.teacher.userId.firstName+" "+bookingDetail.teacher.userId.lastName }</Typography>
              <Typography variant="body1"><strong>Descripción del profesor:</strong>{bookingDetail.teacher.description}</Typography>
              </Grid>
            </Grid>
          </CardContent>

        </Card>
      </Grid>


      <Grid id="teacherBookingInfo" item xs={12} md={4} lg={4}>
        <Typography variant="h4">Información de la reserva</Typography>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h5">Asignatura</Typography>
              <Typography variant="body1">{bookingDetail.subject.name}</Typography>
              <Typography variant="h5">Fecha</Typography>
              <Typography variant="body1">{bookingDetail.date.date}</Typography>
              <Typography variant="h5">Hora</Typography>
              <Typography variant="body1">{bookingDetail.date.time}</Typography>
              <Typography variant="h5">Precio</Typography>
              <Typography variant="body1">{bookingDetail.teacher.price}€</Typography>
              <Typography variant="h5">Comentario</Typography>
              <BaseTextareaAutosize onChange={(e)=>setComment(e.target.value)} minRows={3} > </BaseTextareaAutosize>
              <Button onClick={()=>handleButton()} variant="contained" color="primary">Confirmar cita</Button>

              </Grid>
            </Grid>
          </CardContent>

        </Card>
      </Grid>

    </Grid>
  )
}

export default ClassDetails