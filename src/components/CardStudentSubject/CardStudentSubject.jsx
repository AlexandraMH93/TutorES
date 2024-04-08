import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'
import { Avatar, Card, CardContent, Typography } from '@mui/material'

const CardStudentSubject = ({subject}) => {
  const {setBooking}= useContext(BookingContext)

  const subjectHandler= ()=>{
    setBooking((prev)=>{return {...prev, subject: subject }})
  } 

  return (
    <Card className='subject'  onClick={()=> subjectHandler() }>  
                <CardContent sx={{display: 'flex', height:'100px', flexDirection: 'column',justifyContent: 'end'}}> 
                    <Typography>{subject.name}</Typography>
                    <Avatar alt={subject.name} src={subject.subjectImage}></Avatar>
                </CardContent>

               
     </Card>
  )
}

export default CardStudentSubject
