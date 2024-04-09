import { Box, Typography } from '@mui/material'
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es'
import { useEffect, useState } from 'react';
import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'


const BookingCalendar = ({dates}) => {

    const [events,setEvents] = useState([]);
    const {booking,setBooking}= useContext(BookingContext)

    const loadEvents= ()=>{
 
      
      const newDates= dates.filter((value, index, self) => (index === self.findIndex((t) => ( t.date === value.date && t.time === value.time))))
      setEvents(newDates.map((element)=>{ return {
      id: element.id,
      title: "Hora Disponible",
      start: element.date + "T" + element.time,
      extendedProps: {
        timeTable: element
        
      },
    }}))
    }

  const handleEventClick = (eventInfo)=>{

    setBooking((prev)=>{return {...prev, date: eventInfo.event.extendedProps.timeTable }})


  }

  useEffect(()=>{

    dates && loadEvents()

  },
  [dates])

 


  const renderEventContent = (eventContent) => {
    return (
      <Box
        className="evenContainer classContainer"  
      >
        <Typography variant="h6" color="secondary" className="eventTitle">
          {eventContent.event.title}
        </Typography>
      </Box>
    );
  };




  return (
    <>
    <Box id="calendarContainer">
      <Typography variant="h4"> Escoge una fecha</Typography>
        <FullCalendar
          headerToolbar={{start:'', center:'title', end:'today prev,next' }}
          locale={esLocale}
          plugins={[timeGridPlugin, interactionPlugin]}
          timeZone="GMT"
          selectable={true}
          eventClick={handleEventClick}
          events={events}
          initialView="timeGridFiveDay"
          eventContent={renderEventContent}
          eventColor="rgba(255, 255, 255,0.0)"
          views={{
            timeGridFiveDay: {
              type: "timeGrid",
              duration: { days: 7 },
              allDaySlot: false,
              weekends: false,
              expandRows: true,
              slotDuration: "01:00:00",
              slotMinTime: "08:00:00",
              slotMaxTime: "21:00:00",
            },
          }}
        />
      </Box>
    
    </>
  )
}

export default BookingCalendar