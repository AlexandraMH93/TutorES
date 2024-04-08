import './ListSubjects.css'
import  {CardTeacherSubject}  from '../CardTeacherSubject/CardTeacherSubject'
import { Box } from '@mui/material'
import CardStudentSubject from '../CardStudentSubject/CardStudentSubject'


export const ListSubjects = ({subjectsObj }) => {
   
  return (
   
        <Box id='subjectsCard-container'>
            {subjectsObj && subjectsObj.map((element, idx) => {
            return localStorage.getItem("role")=="teacher" ? <CardTeacherSubject subjectName={element.name}  subjectImgUrl={element.url} /> : <CardStudentSubject subject={element}  />    
            })} 
        </Box>
  )
}
