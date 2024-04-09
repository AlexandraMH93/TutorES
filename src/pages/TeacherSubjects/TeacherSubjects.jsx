import {
  Typography,
  Box, ListItemText,
  MenuItem,
  Divider,
  OutlinedInput,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material"
import { useEffect, useState } from "react"
import { ListSubjects } from "../../components/ListSubjects/ListSubjects"
import { getAllSubjects } from "../../services/subjectService"
import { addSubject, deleteTeacherSubject, teacherSubjects } from "../../services/teacherService"
import "./TeacherSubjects.css"
import AddIcon from "@mui/icons-material/Add"

export const TeacherSubjects = () => {
  const [subjects, setSubjects] = useState([]) //todas las asignaturas de la base de datos
  const [dataBaseTeacherSubjects, setdataBaseTeacherSubjects] = useState([]) //todas las asignaturas del profesor de la base de datos
  const [currentSubjects, setCurrentSubjects] = useState([]) //asignaturas actuales del profesor que se muestran en mis asignaturas
  const [listAddSubjects, setListAddSubjects] = useState([]) //asignaturas que se tienen que añadir al profesor

  const handleTeacherSubjects = async () => {
    const res = await teacherSubjects()
    setdataBaseTeacherSubjects(res) //las asignaturas del profesor que ya tiene en la base de datos
  }

  const handleSubjects = async () => {
    const res = await getAllSubjects()
    setSubjects(res) //todas las asignaturas de la base de datos
  }

  const onAddSubjects = async () => {
    /*     const addSubj = subjects.filter((subjObj) => listAddSubjects.includes(subjObj.name) ) // addSubject es un array de objetos de las asignaturas a añadir

    setCurrentSubjects([...dataBaseTeacherSubjects, ...addSubj.filter((subj) => !Object.values(dataBaseTeacherSubjects).includes(subj.name))]) //añade las asignaturas que no están en la base de datos

    currentSubjects.map(async (subjObj) => await addSubject(subjObj.id)) //me añade las asignaturas en la base de datos

    handleTeacherSubjects()
    setListAddSubjects([]) */

    // Obtener las nuevas asignaturas seleccionadas
    const addSubj = subjects.filter((subjObj) =>
      listAddSubjects.includes(subjObj.name)
    )

    // Filtrar las asignaturas duplicadas entre las asignaturas del profesor y las nuevas asignaturas
    const uniqueSubjects = [
      ...new Set([
        ...dataBaseTeacherSubjects.map((subj) => subj.name),
        ...addSubj.map((subj) => subj.name),
      ]),
    ]

    // Filtrar las nuevas asignaturas que no están en la base de datos del profesor
    const uniqueAddSubj = addSubj.filter((subj) => !dataBaseTeacherSubjects.map((subj) => subj.name).includes(subj.name))

    // Actualizar el estado de las asignaturas del profesor
    setCurrentSubjects(uniqueSubjects.map((name) => subjects.find((subj) => subj.name === name)))

    // Agregar las asignaturas en la base de datos
    uniqueAddSubj.map(async (subjObj) => await addSubject(subjObj.id))

    // Actualizar las asignaturas del profesor obtenidas de la base de datos
    await handleTeacherSubjects()

    // Limpiar la lista de asignaturas seleccionadas
    setListAddSubjects([])
  }

  //Delete subjects
  const onDelete = async (id) => {
    setCurrentSubjects((old) => old.filter((el) => id != el.id))
    await deleteTeacherSubject(id)
    await handleTeacherSubjects()
  }

  useEffect(() => { handleSubjects(), handleTeacherSubjects() }, [])
  useEffect(() => { handleTeacherSubjects() }, [dataBaseTeacherSubjects])

  return (
    <Card id="subjects">
      <CardContent>
        <Typography sx={{ m: 2 }} variant="h3">
          Asignaturas
        </Typography>
        <Typography sx={{ m: 2 }} variant="h6">
          Mis asignaturas
        </Typography>
        <ListSubjects
          sx={{ m: 2 }}
          subjectsObj={dataBaseTeacherSubjects}
          onDelete={(id) => onDelete(id)}
        />
        <Divider sx={{ m: 2 }} />
        <Typography sx={{ m: 2 }} variant="h6">
          Añadir asignaturas
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControl
            sx={{
              margin: "10px 0",
              width: '90%'
            }}
          >
            <InputLabel id="ejem">Asignatura</InputLabel>
            <Select
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

          <IconButton
            sx={{ width: "10%"}}
            onClick={() => {
              onAddSubjects()
            }}
          >
            <AddIcon></AddIcon>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
