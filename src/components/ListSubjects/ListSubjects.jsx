import './ListSubjects.css'
import  {CardTeacherSubject}  from '../CardTeacherSubject/CardTeacherSubject'
import { Box } from '@mui/material'
import CardStudentSubject from '../CardStudentSubject/CardStudentSubject'
import Typography from "@mui/material/Typography";


export const ListSubjects = ({subjectsObj }) => {
   
  return (
   
        <Box>
        <Typography variant="h5"> Escoge una asignatura</Typography>

        <Box id='subjectsCard-container'>
            {subjectsObj && subjectsObj.map((element, idx) => {
            return localStorage.getItem("role")=="teacher" ? <CardTeacherSubject subjectName={element.name}  subjectImgUrl={element.url} /> : <CardStudentSubject subject={element}  />    
            })} 
        </Box>
        </Box>
  )
}
