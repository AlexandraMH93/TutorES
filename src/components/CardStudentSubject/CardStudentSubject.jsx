import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'
import { Avatar, Card, CardContent, Typography } from '@mui/material'

import "./CardSudentSubject.css"

const CardStudentSubject = ({ subject }) => {
  const { setBooking } = useContext(BookingContext)

  const subjectHandler = () => {
    setBooking({  subject: subject , date:"", teacher:""} )
  }

  return (
    <Card className='bookingSubject' onClick={() => subjectHandler()}>
      <CardContent className='subjectContainer'>
        <Avatar alt={subject.name} src={subject.subjectImage}></Avatar>
        <Typography variant="h6">{subject.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStudentSubject
