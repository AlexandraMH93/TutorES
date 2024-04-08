import './ListSubjects.css'
import CardTeacherSubject from '../CardTeacherSubject/CardTeacherSubject'


export const ListSubjects = ({subjectsObj}) => {
   
  return (
   
        <div id='subjectsCard-container'>
            {subjectsObj && subjectsObj.map((element, idx) => {
         
            return (
                 <CardTeacherSubject subjectName={element.name}   />
            )
            })} 
        </div>
  )
}
