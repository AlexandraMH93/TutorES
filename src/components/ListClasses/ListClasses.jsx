import { Typography, Box } from "@mui/material";
import { getStudent, getSubject } from "../../services/teacherService";
import { useEffect, useState } from "react";
import "./ListClasses.css";
import avatarImg from "../../assets/images/defaultAvatar.png"

const ListClasses = ({ classesObj }) => {
  const [classesList, setClassesList] = useState();

  const getClasses = async () => {
    const classes =
      classesObj.length > 0 &&
      (await Promise.all(
        classesObj.map(async (elem, idx) => {
          const student = await getStudent(elem.class_date.student_id);
          const subject = await getSubject(elem.class_date.subjectId);
          return (
            <Box   className="classItem">
              <img src={student.studentImg ? student.studentImg : avatarImg} />
              <Typography>{student.firstName}</Typography>
              <Typography>Date:{elem.date}</Typography>
              <Typography>subject: {subject.name}</Typography>
            </Box>
          );
        })
      ));

    setClassesList(classes);
  };

  useEffect(() => {
    getClasses();
  }, [classesObj]);

  return <>{classesList}</>;
};

export default ListClasses;
