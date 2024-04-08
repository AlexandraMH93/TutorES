import { Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './TeacherClasses.css'
import { useState, useEffect } from "react"
import { getTimeTable } from "../../services/teacherService"
import ListClasses from "../../components/ListClasses/ListClasses"
import FirstClass from "../../components/FirstClass/FirstClass"

const Class = () => { 
    
    const [classDate, setclassDate] = useState([])
    const [firstclassDate, setfirstclassDate] = useState([])
    const handleClassDate = async () => {
        const res = await getTimeTable()
        setclassDate(res.filter((elem)=> elem.class_date!=null))

    }
 
    useEffect(() => {handleClassDate()}, [])

  return (
    <div id="mainContainer">
       <Card>
        <CardContent>
            <Typography variant="h5"  >
              Your next Class
            </Typography>

            <div id="box1">
            <FirstClass classObj={classDate[0]}/>
 
            </div>

            <Typography variant="h5" >
              Your other Classes
            </Typography>
            <input type="search" /> 
            <input type="date" />

        <div id="box2">
            {classDate && <ListClasses classesObj={classDate} />} 
        </div>
        </CardContent>
       </Card>
    </div>
  )
}

export default Class