import { Button, Card, CardContent, Typography, CardActions, Avatar } from '@mui/material'
import './CardTeacherSubject.css'

export const CardTeacherSubject = ({subjectName, subjectId, subjectImgUrl, onDelete}) => { /* hay que cargar las img desde la base de datos */

  return (
    <Card className="subject">
      {" "}
      {/* defino la card de la subject del teacher */}
      <CardContent
        sx={{
          display: "flex",
          height: "100px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>{subjectName}</Typography>
        <Avatar
          className="avatar"
          alt={subjectName}
          src={subjectImgUrl}
        ></Avatar>
      </CardContent>
      <CardActions>
        <Button onClick={() => onDelete(subjectId)}>Delete</Button>
      </CardActions>
    </Card>
  )
}
