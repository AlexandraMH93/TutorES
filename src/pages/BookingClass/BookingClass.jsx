import { Box, Tabs , Tab} from '@mui/material'
import React, { useState } from 'react'
import BookingCalendar from '../../components/BookingCalendar/BookingCalendar';

const BookingClass = () => {

    const [value, setValue] = useState(0);
    const [options, setOptions]= useState(false)
    const handleChange = (e) => {
        console.log(e.target)
        setValue(e.value);
      };



    return (
        <Box id="mainContainer">
            <Box id="BookingContainer">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs   aria-label="basic tabs example">
                    <Tab label="Asignatura" onClick={()=>setValue(0)} />
                    {options && (<><Tab label="Calendario"  onClick={()=>setValue(1)} /> <Tab label="Profesor" onClick={()=>setValue(2)}/></> ) }
                    
                </Tabs>
            </Box>
            <Box id="bookingElementContainer">
                { value==0 && <BookingCalendar/> }
                { value==1 && <BookingCalendar/>}
                { value==2 && <h1>Profesores</h1> }
            </Box>
            </Box>
        </Box>
    )
}

export default BookingClass