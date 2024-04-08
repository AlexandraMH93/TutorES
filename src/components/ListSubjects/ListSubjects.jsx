import './ListSubjects.css'
import  {CardTeacherSubject}  from '../CardTeacherSubject/CardTeacherSubject'
import { Box } from '@mui/material'


export const ListSubjects = ({subjectsObj}) => {
   
  return (
   
        <Box id='subjectsCard-container'>
            {subjectsObj && subjectsObj.map((element, idx) => {
         
            return (
                 <CardTeacherSubject subjectName={element.name}  subjectImgUrl={element.url} />
            )
            })} 
        </Box>
  )
}
