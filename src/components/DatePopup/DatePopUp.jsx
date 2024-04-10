import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CircleIcon from "@mui/icons-material/Circle";
import { Avatar, Card, CardContent, Typography, Box, CardActions, Button } from '@mui/material'

import {
  deleteTimeTable,
  deleteClassDate,
} from "../../services/teacherService";

import "./DatePopup.css";


const DatePopUp = ({ open, setOpen, dateInfo, setTimeTable }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteButton = async() => {

    const result = await deleteClassDate(dateInfo.classId)
    const result2 = await deleteTimeTable(dateInfo.timeTableid)
    
    if(localStorage.getItem("role")=="teacher"){
      setTimeTable((prev) => prev.filter((elem) => elem.id !== parseInt(dateInfo.timeTableid)))

    }else{
     
       setTimeTable((prev) => prev.filter((elem) => elem.id !== parseInt(dateInfo.classId)))


    }
    
    
    setOpen(false)
  };

  return (
    <Dialog open={open} className="datePopup" sx={{ //You can copy the code below in your theme
        background: '#FFFFFFD9',
        '& .MuiPaper-root': {
          background: '#FFFFFF',
          padding: "3% 2%"
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent' // Try to remove this to see the result
        }
      }}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Avatar id="avatarImg" src={dateInfo.studentImg} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="body2">Clase con</Typography>
                <Typography variant="h4"> {dateInfo.student}</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box className="dateElementContainer">
                  <Box>
                    <CircleIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="h6"> Fecha</Typography>
                    <Typography variant="body2">{dateInfo.date}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box className="dateElementContainer">
                  <Box>
                    <CircleIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="h6"> Hora</Typography>
                    <Typography variant="body2">{dateInfo.time}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box className="dateElementContainer">
                  <Box>
                    <CircleIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="h6"> Tema</Typography>
                    <Typography variant="body2">{dateInfo.subject}</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box className="dateElementContainer">
                  <Box>
                    <CircleIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="h6">
                      Comentario del estudiante
                    </Typography>
                    <Typography variant="body2">
                      {dateInfo.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Link href={"mailto:" + dateInfo.email} color="secondary" underline="none">
          Contactar estudiante
        </Link>
        <Button id="cancelButton" onClick={()=>handleDeleteButton()} variant="contained" color="warning"> Eliminar Clase </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DatePopUp;
