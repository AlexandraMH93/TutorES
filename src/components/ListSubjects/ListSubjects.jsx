import './ListSubjects.css'
import  {CardTeacherSubject}  from '../CardTeacherSubject/CardTeacherSubject'
import { Box } from '@mui/material'
import CardStudentSubject from '../CardStudentSubject/CardStudentSubject'
import Typography from "@mui/material/Typography";


export const ListSubjects = ({ subjectsObj, onDelete }) => {
  return (
   
        
    
         
    <Box id="subjectsCard-container">
      {subjectsObj &&
        subjectsObj.map((element, idx) => {
          return localStorage.getItem("role")=="teacher" ?  <CardTeacherSubject       key={idx}  subjectImgUrl={element.subjectImage}  subjectName={element.name}          subjectId={element.id}  onDelete={(id) => onDelete(id)}
            /> : <CardStudentSubject subject={element}/>  

        }
          
        
      )}
 

    </Box>
  )
}
