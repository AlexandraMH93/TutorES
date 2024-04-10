import { Card, CardContent, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getTimeTable } from "../../services/teacherService"
import ListClasses from "../../components/ListClasses/ListClasses"
import FirstClass from "../../components/FirstClass/FirstClass"
import { getStudentClassDates } from "../../services/studentService"
import DatePopUp from "../../components/DatePopup/DatePopUp"
 
const Classes = () => {

  const [classDate, setClassDate] = useState()
  const [firstClass, setFirstClass] = useState()
  const [open, setOpen] = useState(false);
  const [currentDateInfo, setcurrentDateInfo] = useState();

//new Date(a.timeTableid.date+"T"+a.timeTableid.time).getTime() - new Date(b.timeTableid.date+"T"+b.timeTableid.time).getTime()
  const getClasses = async()=>{

    let result
    let sortResult
    if(localStorage.getItem("role")=="student"){
     result= await getStudentClassDates()
     sortResult= result.sort((a,b)=>{ return new Date(a.timetableId.date+"T"+a.timetableId.time).getTime() - new Date(b.timetableId.date+"T"+b.timetableId.time).getTime()} )

    }else{
      result= await getTimeTable()
      sortResult=result.filter((element)=>element.class_date).sort((a,b)=>{ return new Date(a.date+"T"+a.time).getTime() - new Date(b.date+"T"+b.time).getTime()} )

    }




    setClassDate(sortResult.filter((elem,idx)=> idx!=0))
    setFirstClass(sortResult[0])
    
  }

  

  useEffect(()=>{

    getClasses()
  },[])

  


  return (
    <Box id="mainContainer">
      <Box id="BookingContainer">
        <Typography variant="h4"> Mi siguiente clase </Typography>
        {firstClass  ? <FirstClass dateInfo={firstClass} classDate={classDate} setClassDates={setClassDate} setFirstClass={setFirstClass}/> :  <Typography variant="h5"> Aún no tienes ninguna clase </Typography> }
        <Typography variant="h4" > Mis otras Clases </Typography>
        { classDate && <ListClasses classesObj={classDate} setcurrentDateInfo={setcurrentDateInfo} setOpen={setOpen} />}
      </Box>
      {currentDateInfo && <DatePopUp open={open} setOpen={setOpen} dateInfo={currentDateInfo} setTimeTable={setClassDate}  />}
    </Box>
  )
}

export default Classes