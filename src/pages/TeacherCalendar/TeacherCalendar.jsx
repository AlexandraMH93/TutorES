import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es'
import { Box, Typography, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getTimeTable,
  createTimeTable,
  getStudent,
  getSubject,
  deleteTimeTable,
} from "../../services/teacherService";

import "./TeacherCalendar.css";
import DatePopUp from "../../components/DatePopup/DatePopUp";

const TeacherCalendar = () => {
  const [open, setOpen] = useState(false);
  const [currentDateInfo, setcurrentDateInfo] = useState({});
  const [timeTable, setTimeTable] = useState([]);

  const getSchedule = async () => {
    const result = await getTimeTable();
    const newSchedule = await Promise.all(
      result.map(async (element) => {
        if (element.class_date != null) {
          const student = await getStudent(element.class_date.student_id);
          const subject = await getSubject(element.class_date.subjectId);
       
          return {
            id: element.id,
            title: "Clase con " + student.firstName,
            start: element.date + "T" + element.time,
            extendedProps: {
              timeTableid: element.id,
              classId: element.class_date.id,
              subject: subject.name,
              description: element.class_date.comments,
              student: student.firstName+" "+ student.lastName,
              studentImg: student.profileImage,
              date:element.date,
              time:element.time,
              email:student.email
              
            },
          };
        } else {
          return {
            id: element.id,
            title: "Clase no escogida",
            start: element.date + "T" + element.time,
          };
        }
      })
    );

    setTimeTable(newSchedule);
  };

  const deleteSchedule = async (eventId) => {
    setTimeTable((prev) => prev.filter((elem) => elem.id !== parseInt(eventId))
    );
    await deleteTimeTable(eventId);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const handleEventClick = (eventInfo) => {
    if (eventInfo.event.extendedProps.timeTableid) {
      setcurrentDateInfo(eventInfo.event.extendedProps)
      setOpen(true)
    }
  };

  const handleHourClick = async (dateInfo) => {
    const result = await createTimeTable({
      date: dateInfo.dateStr.split("T")[0],
      time: dateInfo.dateStr.split("T")[1],
    });

    setTimeTable((prev) => [
      ...prev,
      {
        id: result.data.timetable.id,
        title: "Clase no escogida",
        start: dateInfo.dateStr,
      },
    ]);
  };

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
    <Box className="mainContainer">
       <Box id="calendarContainer">
      <Typography sx={{m:2}} variant="h4">Calendario</Typography>

      <Divider sx={{m:2}} />
      
        <FullCalendar
          headerToolbar={{start:'', center:'title', end:'today prev,next' }}
          locale={esLocale}
          plugins={[timeGridPlugin, interactionPlugin]}
          timeZone="GMT"
          selectable={true}
          eventClick={handleEventClick}
          events={timeTable}
          dateClick={handleHourClick}
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
      <DatePopUp setOpen={setOpen} open={open} dateInfo={currentDateInfo} setTimeTable={setTimeTable} />
    </Box>

  );
};

export default TeacherCalendar;
