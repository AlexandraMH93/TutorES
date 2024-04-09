import React from 'react'
import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'
import { Avatar, Card, CardContent, Typography } from '@mui/material'


const TeacherCard = ({ teacherInfo }) => {

    const { setBooking } = useContext(BookingContext)


    const teacherHandler = () => {

        setBooking((prev)=>{return {...prev, teacher: teacherInfo}})

    }

    return (
        <Card onClick={() => teacherHandler()}>
            <CardContent sx={{ display: 'flex', height: '100px', flexDirection: 'column', justifyContent: 'end' }}>
                <Avatar alt={teacherInfo.userId.firstName} src={teacherInfo.userId.profileImage}></Avatar>
                <Typography>{teacherInfo.userId.firstName + " " + teacherInfo.userId.lastName}</Typography>

            </CardContent>
        </Card>
    )
}

export default TeacherCard