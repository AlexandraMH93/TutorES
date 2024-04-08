import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const CardTeacherSubject = ({subjectName}) => { /* hay que cargar las img desde la base de datos */
  return (
   
      <Card className='subject'  > {/* defino la card de la subject del teacher */}
                <CardContent sx={{display: 'flex', height:'100px', flexDirection: 'column', justifyContent: 'end'}}> 
                    <Typography>{subjectName}</Typography>
                    <Button>Delete</Button>
                </CardContent>
     </Card>
    
  )
}

export default CardTeacherSubject
