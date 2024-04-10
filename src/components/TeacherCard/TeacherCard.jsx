import React from 'react'
import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'
import { Avatar, Card, CardContent, Typography } from '@mui/material'
import "./TeacherCard.css"

const TeacherCard = ({ teacherInfo }) => {

    const { setBooking } = useContext(BookingContext)


    const teacherHandler = () => {

        setBooking((prev)=>{return {...prev, teacher: teacherInfo}})

    }

    return (
        <Card className="teacherCard" onClick={() => teacherHandler()}>
            <CardContent  className='teacherContainer'sx={{ display: 'flex', height: '100px', flexDirection: 'column', justifyContent: 'end' }}>
                <Avatar alt={teacherInfo.userId.firstName} src={teacherInfo.userId.profileImage}></Avatar>
                <Typography variant="h6">{teacherInfo.userId.firstName + " " + teacherInfo.userId.lastName}</Typography>
                <Typography> <strong>Precio:</strong> {teacherInfo.price}€</Typography>

            </CardContent>
        </Card>
    )
}

export default TeacherCard