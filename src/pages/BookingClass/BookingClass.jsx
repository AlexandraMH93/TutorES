import { Box, Tabs , Tab} from '@mui/material'
import React, { useEffect, useState } from 'react'
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';
import { BookingContext } from '../../Context/Booking'
import { ListSubjects } from '../../components/ListSubjects/ListSubjects';
import { getAllSubjects } from '../../services/subjectService';
import { getTimeTableBySubject } from '../../services/studentService';


const BookingClass = () => {

    const [value, setValue] = useState(0);
    const [options, setOptions]= useState(false)
    const [booking, setBooking] =useState({subject:"", date:"", teacher:""})
    const [subjects, setSubjects] = useState([])
    const [timeTable, setTimeTable] = useState([])

    const getSubjects= async ()=>{

        const results = await getAllSubjects()
        setSubjects(results)

    }

    const subjectHandler= async ()=>{

        if(booking.subject!=""){
        setOptions(true)
        setValue(1)
        const result =await getTimeTableBySubject(booking.subject.id)
        setTimeTable(result)
        
        }
    }

    useEffect(()=>{

        getSubjects() 

    },[])

    useEffect(()=>{

       subjectHandler()

    },[booking])








    return (
        <Box id="mainContainer">
            <Box id="BookingContainer">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value="0" aria-label="basic tabs example">
                    <Tab  value="0"  label="Asignatura" onClick={()=>setValue(0)} />
                    {options && (<><Tab  value="1" label="Calendario"  onClick={()=>setValue(1)} /> <Tab value="2"  label="Profesor" onClick={()=>setValue(2)}/></> ) }
                    
                </Tabs>
            </Box>
            <BookingContext.Provider value={{booking,setBooking}}>
            <Box id="bookingElementContainer">
                { value==0 && <ListSubjects subjectsObj={subjects && subjects}/> }
                { value==1 && <BookingCalendar dates={timeTable}/>}
                { value==2 && <h1>Profesores</h1> }
            </Box>
            </BookingContext.Provider>
            </Box>
        </Box>
    )
}

export default BookingClass