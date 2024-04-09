import './ListSubjects.css'
import  {CardTeacherSubject}  from '../CardTeacherSubject/CardTeacherSubject'
import { Box } from '@mui/material'


export const ListSubjects = ({ subjectsObj, onDelete }) => {
  return (
    <Box id="subjectsCard-container">
      {subjectsObj &&
        subjectsObj.map((element, idx) => {
          return (
            <CardTeacherSubject
              key={idx}
              subjectName={element.name}
              subjectImgUrl={element.url}
              subjectId={element.id}
              onDelete={(id) => onDelete(id)}
            />
          )
        })}
    </Box>
  )
}
