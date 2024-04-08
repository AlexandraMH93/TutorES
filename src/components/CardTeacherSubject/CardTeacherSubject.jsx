import { Button, Card, CardContent, Typography, CardActions, Avatar } from '@mui/material'
import './CardTeacherSubject.css'

export const CardTeacherSubject = ({subjectName, subjectImgUrl}) => { /* hay que cargar las img desde la base de datos */



  return (
   
      <Card className='subject'  > {/* defino la card de la subject del teacher */}
                <CardContent sx={{display: 'flex', height:'100px', flexDirection: 'column',justifyContent: 'end'}}> 
                    <Typography>{subjectName}</Typography>
                    <Avatar alt={subjectName} src={subjectImgUrl}></Avatar>
                </CardContent>

                <CardActions>
                    <Button>Delete</Button>
                  
                </CardActions>
     </Card>
    
  )
}
