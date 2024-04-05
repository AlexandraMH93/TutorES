import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const TeacherSubject = ({subjectName, subjectImg}) => {
  return (
   
      <Card className='subject'  >
                <CardContent>
                    <Typography>{subjectName}</Typography>
                    <Button>Delete</Button>
                </CardContent>
     </Card>
    
  )
}

export default TeacherSubject
