import { Typography,Checkbox,ListItemText, MenuItem,Divider, CardHeader,OutlinedInput, Card , CardContent, FormControl, InputLabel, Select, Icon, IconButton} from '@mui/material'
import { useEffect, useState } from 'react'
import {ListSubjects}   from '../../components/ListSubjects/ListSubjects'
import { getAllSubjects } from '../../services/subjectService'
import { addSubject } from '../../services/teacherService'
import './TeacherSubjects.css'
import AddIcon from '@mui/icons-material/Add'


export const TeacherSubjects = () => {
    const [subjects, setSubjects] = useState([])
    const [listAddSubjects, setListAddSubjects] = useState([]) 
    
    const handleSubjects = async () => {
        const res = await getAllSubjects()

        setSubjects(res)
        console.log(subjects)

    }

    
    const handleAddSubject = async (e) => {
      setListAddSubjects([...e.target.value])
      console.log(listAddSubjects)
       /* const res2 = await addSubject()  añadir asignaturas al teacher */
    }

    const onAddSubjects = async (subjects) => {
      subjects.map(async subject => await addSubject(subject))
    }

    useEffect(() => {handleSubjects()}, [])
    
  return (
    <Card id='subjects' > {/* defino lo que se va a mostrar en la pestaña de subjects para el teacher */}
       
        <CardContent>
          <Typography variant='h3'>Asignaturas</Typography>
          <Typography variant='h6'>Añadir asignaturas</Typography>
          <FormControl sx={{margin: '10px 0', display: 'flex', justifyContent: 'center'}}>
            <InputLabel id='ejem'>Asignatura</InputLabel>
              <Select renderValue={(selected) => selected.join(', ')} 
                labelId='ejem' 
                input={<OutlinedInput label="Asignatura" />} 
                id="addSubjects" 
                multiple value={listAddSubjects} 
                onChange={handleAddSubject}>

                {subjects.map((el, id) => {
                  return (
                    <MenuItem key={id} value={el.name}>
                      
                      <ListItemText primary={el.name} />
                    </MenuItem>
                  )}
                )}
              </Select>

              <IconButton onClick={()=> {onAddSubjects(listAddSubjects)}}><AddIcon></AddIcon></IconButton>
    
          </FormControl>
          
          <Divider />
          
          <Typography variant='h6'>Mis asignaturas</Typography>
          <ListSubjects subjectsObj={subjects} /> 
        </CardContent>
      
    </Card>
  )
}

