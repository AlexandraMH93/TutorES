import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography } from "@mui/material";
import { useEffect, useState  } from "react";
import {
  getTimeTable,
  createTimeTable,
  getStudent,getSubject
} from "../../services/teacherService";

import "./TeacherCalendar.css";
import { Button } from "@mui/base";

const TeacherCalendar = () => {
  const [timeTable, setTimeTable] = useState([]);

  const getSchedule = async () => {
    const result = await getTimeTable();
    const newSchedule = await Promise.all(
      result.map(async (element) => {
        if (element.class_date != null) {
          const student = await getStudent(element.class_date.student_id);
          const subject = await getSubject(element.class_date.subjectId);
             
          return {
            id:element.id,
            title: "Clase con " + student.firstName,
            start: element.date + "T" + element.time,
            extendedProps:{
                subject:subject.name,
                

            }
          };
        } else {
          return {
            id:element.id,
            title: "Clase no escogida",
            start: element.date + "T" + element.time,
          };
        }
      })
    );

    setTimeTable(newSchedule);
  };

  const deleteSchedule=( id)=>{
    console.log(id);

  }

  useEffect(() => {
    getSchedule();
  }, [timeTable]);

  const handleEventClick = (eventInfo) => {
    console.log(eventInfo);
  };

  const handleHourClick = async (dateInfo) => {
    const result = await createTimeTable({
      date: dateInfo.dateStr.split("T")[0],
      time: dateInfo.dateStr.split("T")[1],
    });
    getSchedule();
  };

  const renderEventContent = (eventContent) => {
    
    return (
    <>
    <Typography variant="h7" className="eventTitle">{eventContent.event.title}</Typography>
    { eventContent.event.extendedProps.subject ? <Typography  variant="h7"> Asignatura: {eventContent.event.extendedProps.subject}</Typography>: <Button variant="" onClick={()=>deleteSchedule(eventContent.event.id)}>Eliminar clase</Button> }
    </>
    );
  };

  return (
    <Box id="mainContainer">
      <Box id="calendarContainer">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          timeZone="GMT"
          selectable={true}
          eventClick={handleEventClick}
          events={timeTable}
          dateClick={handleHourClick}
          initialView="timeGridFiveDay"
          eventContent={renderEventContent}
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
    </Box>
  );
};

export default TeacherCalendar;
