import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Avatar
} from "@mui/material"
import './CardTeacherSubject.css'

export const CardTeacherSubject = ({subjectName, subjectId, subjectImgUrl, onDelete}) => { /* hay que cargar las img desde la base de datos */

  return (
    <Card className="subject">
      <CardContent
      className="avatar-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
          <Avatar
            className="avatar"
            alt={subjectName}
            src={subjectImgUrl}
          ></Avatar>
       

        <Typography>{subjectName}</Typography>
        <Button onClick={() => onDelete(subjectId)}>Borrar</Button>
      </CardContent>
    </Card>
  )
}
