import React from 'react'
import TeacherCard from '../TeacherCard/TeacherCard'
import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material'

import "./ListTeachers.css"

const ListTeachers = ({teachers}) => {

  const {booking}= useContext(BookingContext)
   
  return (
    <Box>
    <Typography variant="h5"> Escoge un profesor</Typography>
    <Box id="teachersContainer">
    {teachers.map((elem, idx)=>{
         return <TeacherCard teacherInfo={elem.teacherId} />
    })}
    </Box>
    </Box>
  )
}

export default ListTeachers