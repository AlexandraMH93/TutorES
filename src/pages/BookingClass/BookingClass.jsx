import { Box, Tabs, Tab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import { BookingContext } from '../../Context/Booking'
import { ListSubjects } from '../../components/ListSubjects/ListSubjects';
import { getAvailableSubjects } from '../../services/subjectService';
import { getTimeTableBySubject, getTeachersByDate } from '../../services/studentService';
import ListTeachers from '../../components/ListTeachers/ListTeachers';
import ClassDetails from '../../components/ClassDetails/ClassDetails';
import Typography from "@mui/material/Typography";
import "./BookingClass.css"

const BookingClass = () => {

    const [value, setValue] = useState(0);
    const [options, setOptions] = useState(false)
    const [booking, setBooking] = useState({ subject: "", date: "", teacher: "" })
    const [subjects, setSubjects] = useState([])
    const [timeTable, setTimeTable] = useState([])
    const [teachers, setTeachers] = useState([])


    const getSubjects = async () => {

        const results = await getAvailableSubjects()
        const array = results.filter((elem) => { 
         
            if (elem.teacherId.subjects.length > 0 && new Date(elem.date+"T"+elem.time).getTime() >  new Date().getTime() )
             return true })
        const newSubjects = []
        array.forEach((elem) => {
             
            elem.teacherId.subjects.forEach((elem2) => {
                newSubjects.push(elem2)
            })
        })
        setSubjects(newSubjects.filter((value, idx, self) => idx === self.findIndex((t) => (t.name === value.name && t.name === value.name))))
    }

    const handleSubject = async () => {
        if (booking.subject != "" && booking.teacher=="" && booking.date=="") {
            setOptions(true)
            setValue(1)
            const result = await getTimeTableBySubject(booking.subject.id)
            setTimeTable(result)
        }
    }


    const handleTeacher = async () => {

        if (booking.teacher != "") {
            setValue(3)
            
        }



    }

    const handleDate = async () => {
        if (booking.date != "") {
            setValue(2)
            const result = await getTeachersByDate({ "date": booking.date.date, "time": booking.date.time  })
            setTeachers(result)
        }
    }

    useEffect(() => {getSubjects()}, [])
    useEffect(() => {handleSubject()}, [booking.subject])
    useEffect(() => {handleDate()}, [booking.date])
    useEffect(() => {handleTeacher()}, [booking.teacher])


   


    return (
        <Box id="mainContainer">

            <Box id="BookingContainer">
            <Typography variant="h4"> Reservar una clase</Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                     
                    
                    <Tabs value={value} aria-label="basic tabs example">
                        <Tab value={0} label="Asignatura" onClick={() => setValue(0)} />
                        { value >=1 && <Tab value={1} label="Calendario" onClick={() => setValue(1)} /> }
                        {value >=2 && <Tab value={2} label="Profesor" onClick={() => setValue(2)} />}
                        {value >=3 && <Tab value={3} label="Confirmación" onClick={() => setValue(3)} />}

                    </Tabs>
                </Box>
                <BookingContext.Provider value={{ booking, setBooking }}>
                    <Box id="bookingElementContainer">
                        {value == 0 && <ListSubjects subjectsObj={subjects && subjects} />}
                        {value == 1 && timeTable && <BookingCalendar dates={timeTable} />}
                        {value == 2 && <ListTeachers teachers={teachers} />}
                        {value == 3 && <ClassDetails  bookingDetail={booking} />}

                    </Box>
                </BookingContext.Provider>
            </Box>
        </Box>
    )
}

export default BookingClass