import { Button, Card, CardContent, Typography, Avatar } from '@mui/material'
import './CardTeacherSubject.css'
import PropTypes from 'prop-types'

const TeacherSubject = ({subjectName, subjectImgUrl}) => {
  return (
   
      <Card className='subject'>
                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '5px'}}>
                    <Typography>{subjectName}</Typography>
                    <Avatar className='avatar' alt={subjectName} src={subjectImgUrl} />
                    <Button>Delete</Button>
                </CardContent>
     </Card>
    
  )
}

TeacherSubject.propTypes = {
  subjectName: PropTypes.string,
  subjectImgUrl: PropTypes.string
}

export default TeacherSubject
