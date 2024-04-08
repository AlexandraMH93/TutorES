 
import { Typography, Box } from "@mui/material"
import { getStudent, getSubject } from "../../services/teacherService";
import { useEffect, useState } from "react";
import "./ListClasses.css"

const ListClasses = ({classesObj}) => {
    const [classesList, setClassesList] =useState()
    
    const getClasses = async ()=>{
        console.log("hola")
        const classes = await Promise.all(classesObj.map( async (elem,idx) =>{
          
            const student = await getStudent(elem.class_date.student_id);
            const subject = await getSubject(elem.class_date.subjectId);
           
            return (<Box className="classItem">
                <img></img>
                <Typography>
                  {student.firstName}
                </Typography>
                <Typography>
                  Date:{elem.date}
                </Typography>
                <Typography>
                   subject: {subject.name}
                 </Typography>
                  </Box>)
        } ))  
       
        setClassesList(classes)
    }

    useEffect(()=>{
        
        getClasses()
    },[])

  return (
    < > 
    {classesList && classesList}  
    </>
  )
}

export default ListClasses
