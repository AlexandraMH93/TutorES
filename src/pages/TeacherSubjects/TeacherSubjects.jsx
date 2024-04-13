import {
  Typography,
  Box,
  ListItemText,
  MenuItem,
  Divider,
  OutlinedInput,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  IconButton,
  Button,
} from "@mui/material"
import { useEffect, useState } from "react"
import { ListSubjects } from "../../components/ListSubjects/ListSubjects"
import { getAllSubjects } from "../../services/subjectService"
import { addSubject, deleteTeacherSubject, teacherSubjects } from "../../services/teacherService"
import "./TeacherSubjects.css"
import AddIcon from "@mui/icons-material/Add"

 const TeacherSubjects = () => {
  const [subjects, setSubjects] = useState([]) //todas las asignaturas de la base de datos
  const [dataBaseTeacherSubjects, setdataBaseTeacherSubjects] = useState([]) //todas las asignaturas del profesor de la base de datos
  const [currentSubjects, setCurrentSubjects] = useState([]) //asignaturas actuales del profesor que se muestran en mis asignaturas
  const [listAddSubjects, setListAddSubjects] = useState([]) //asignaturas que se tienen que añadir al profesor

  const handleTeacherSubjects = async () => { 
    const res = await teacherSubjects()
    setdataBaseTeacherSubjects(res) 
  }

  const handleSubjects = async () => {
    const res = await getAllSubjects()
    setSubjects(res)  
  }

  const onAddSubjects = async () => {
    const addSubj = subjects.filter((subjObj) => listAddSubjects.includes(subjObj.name))
    const uniqueSubjects = [...new Set([...dataBaseTeacherSubjects.map((subj) => subj.name),...addSubj.map((subj) => subj.name)])]
    const uniqueAddSubj = addSubj.filter((subj) => !dataBaseTeacherSubjects.map((subj) => subj.name).includes(subj.name))
    setCurrentSubjects(uniqueSubjects.map((name) => subjects.find((subj) => subj.name === name)))
    uniqueAddSubj.map(async (subjObj) => await addSubject(subjObj.id))
    await handleTeacherSubjects()
    setListAddSubjects([])
  }

  const onDelete = async (id) => {
    setCurrentSubjects((old) => old.filter((el) => id != el.id))
    await deleteTeacherSubject(id)
    await handleTeacherSubjects()
  }

  useEffect(() => { handleSubjects(), handleTeacherSubjects() }, [])
  useEffect(() => { handleTeacherSubjects() }, [dataBaseTeacherSubjects])

  return (
    <Box id="mainContainer" /* sx={{width: '80vw', height: '100vh'}} */>
      <Box id="calendarContainer">
        <Typography sx={{ m: 2, textAlign: "start" }} variant="h4">
          Asignaturas
        </Typography>

        <Divider sx={{ m: 2 }} />

        <Typography sx={{ m: 2, textAlign: "start" }} variant="h6">
          Mis asignaturas
        </Typography>

        <ListSubjects
        
          subjectsObj={dataBaseTeacherSubjects}
          onDelete={(id) => onDelete(id)}
        />
        <Divider sx={{ m: 2 }} />

        <Typography sx={{ m: 2, textAlign: "start" }} variant="h6">
          Añadir asignaturas
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            height: "50px",
          }}
        >
          <FormControl
            sx={{
              height: "100%",
              width: "80%",
              marginLeft: "10px",
            }}
          >
            <InputLabel id="ejem">Asignatura</InputLabel>
            <Select
              sx={{ height: "100%", width: "100%" }}
              renderValue={(selected) => selected.join(", ")}
              labelId="ejem"
              input={<OutlinedInput label="Asignatura" />}
              id="addSubjects"
              multiple
              value={listAddSubjects}
              onChange={(e) => {
                setListAddSubjects(e.target.value)
              }}
            >
              {subjects.map((el, id) => {
                return (
                  <MenuItem key={id} value={el.name}>
                    <ListItemText primary={el.name} />
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <Button
            sx={{
              width: "30px",
              height: "100%",
              alignSelf: "center",
              fontWeight: "bolder",
            }}
            variant="outlined"
            onClick={() => {
              onAddSubjects()
            }}
          >
            <AddIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TeacherSubjects