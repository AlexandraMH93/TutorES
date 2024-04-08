import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import avatarImg from "../../assets/images/defaultAvatar.png"
import CircleIcon from "@mui/icons-material/Circle";

import {
 
  getStudent,
  getSubject,
 
} from "../../services/teacherService";

const FirstClass = ({classObj}) => {

  const [firstClass, setFirstClass] =useState()
  const getClassData= async()=>{

    const student = await getStudent(classObj.class_date.student_id);
    const subject = await getSubject(classObj.class_date.subjectId);


    setFirstClass (
      <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <img id="avatarImg" src={student.studentImg ? student.studentImg : avatarImg} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="body2">Clase con</Typography>
                <Typography variant="h4"> {student.firstName}</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box className="dateElementContainer">
                  <Box>
                    <CircleIcon color="primary" />
                  </Box>
                  <Box>
                    <Typography variant="h6"> Fecha</Typography>
                    <Typography variant="body2">{classObj.date}</Typography>
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
                    <Typography variant="body2">{classObj.time}</Typography>
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
                    <Typography variant="body2">{subject.name}</Typography>
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
                      {classObj.class_date.comments}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )

  }

  useEffect(()=>{getClassData()},[])


  return (
    <div>
      {firstClass}
    </div>
  )
}

export default FirstClass
