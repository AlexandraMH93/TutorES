import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box } from '@mui/material'

const TeacherCalendar = () => {
  return (
    <Box id="mainContainer">
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
    </Box>
  )
}

export default TeacherCalendar