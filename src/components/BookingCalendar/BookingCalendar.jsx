import { Box, Typography } from '@mui/material'
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es'
import { useEffect, useState } from 'react';

const BookingCalendar = (dates) => {

    const [events,setEvents] = useState([]);
    


  const handleEventClick = (eventInfo)=>{




  }


 


  const renderEventContent = (eventContent) => {
    return (
      <Box
        className={
          eventContent.event.extendedProps.subject
            ? "evenContainer classContainer"
            : "evenContainer dateContainer"
        }
      >
        <Typography variant="h6" color="secondary" className="eventTitle">
          {eventContent.event.title}
        </Typography>
        {eventContent.event.extendedProps.subject ? (
          <Typography color="secondary" variant="h7">
            
            Asignatura: {eventContent.event.extendedProps.subject}
          </Typography>
        ) : (
          <Button
            variant="text"
            onClick={() => deleteSchedule(eventContent.event.id)}
          >
            Eliminar clase
          </Button>
        )}
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