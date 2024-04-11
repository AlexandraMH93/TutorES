import { Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './TeacherClasses.css'
import { useState, useEffect } from "react"
import { getTimeTable } from "../../services/teacherService"
import ListClasses from "../../components/ListClasses/ListClasses"
import FirstClass from "../../components/FirstClass/FirstClass"
import {
 
    getStudent,
    getSubject,
   
  } from "../../services/teacherService";
  
const Class = () => { 
    
    const [classDate, setclassDate] = useState({})
    const [firstClass, setfirstClass] = useState({})
    const [classInfo, setclassInfo] = useState({})
    const [student, setStudent]= useState("")
    const [subject, setSubject]= useState("")
    
    const handleClassDate = async () => {
        const res = await getTimeTable()
         
        setclassDate(res.filter((elem)=> elem.class_date!=null))
        const firsC= res.filter((elem)=> elem.class_date!=null)[0]
        setfirstClass(firsC);
         
        const newStudent = await getStudent(firsC.class_date.student_id);
        const newSubject = await getSubject(firsC.class_date.subjectId);
        setclassInfo(firsC.class_date)
        setStudent(newStudent)
        setSubject(newSubject)

    }
 
    useEffect(() => {handleClassDate()}, [])

   return (
    <div className="mainContainer">
       <Card>
        <CardContent>
            <Typography variant="h5">
              Your next Class
            </Typography>
            <div id="box1">

            {   firstClass && <FirstClass dateInfo={firstClass} student={student} subject={subject} classInfo={classInfo} />}
            </div>
            <Typography variant="h5">
              Your other Classes
            </Typography>
            <input type="search" /> 
            <input type="date" />

        <div id="box2">
          <ListClasses classesObj={classDate} /> 
        </div>
        </CardContent>
       </Card>
    </div>
  )
}

export default Class