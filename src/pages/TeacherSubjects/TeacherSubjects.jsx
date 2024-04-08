import { Typography,Checkbox,ListItemText, MenuItem,Divider, CardHeader,OutlinedInput, Card , CardContent, FormControl, InputLabel, Select, Icon, IconButton} from '@mui/material'
import { useEffect, useState } from 'react'
import {ListSubjects}   from '../../components/ListSubjects/ListSubjects'
import { getAllSubjects } from '../../services/subjectService'
import { addSubject } from '../../services/teacherService'
import './TeacherSubjects.css'
import AddIcon from '@mui/icons-material/Add'


export const TeacherSubjects = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [subjects, setSubjects] = useState([])
    const [listAddSubjects, setListAddSubjects] = useState([]) 
    
    const handleSubjects = async () => {
        const res = await getAllSubjects()

        setSubjects(res)
        console.log(subjects)

    }
    const handleCheck = async (e) => {
      setIsChecked(e.target.value)
      
     

    }
    
    const handleAddSubject = async (e) => {
      setListAddSubjects(... [e.target.value])
     }

    useEffect(() => {handleSubjects()}, [])
    
  return (
    <Card id='subjects' > 
        <CardHeader title='Asignaturas'></CardHeader>
       
        <CardContent>
          <Typography variant='h6'>Añadir asignaturas</Typography>
          <FormControl sx={{margin: '10px 0', display: 'flex', justifyContent: 'center'}}>
            <InputLabel id='ejem'>Asignatura</InputLabel>
              <Select renderValue={(selected) => selected.join(', ')} labelId='ejem' input={<OutlinedInput label="Asignatura" />} id="addSubjects" multiple value={listAddSubjects} onChange={handleAddSubject}>
                {subjects.map((el, id) => {
                  return (
                    <MenuItem key={id} value={el.name}>
                      
                      <ListItemText primary={el.name} />
                    </MenuItem>
                  )}
                )}
              </Select>

              <IconButton><AddIcon></AddIcon></IconButton>
    
          </FormControl>
          
          <Divider />
          
          <Typography variant='h6'>Mis asignaturas</Typography>
          <ListSubjects subjectsObj={subjects} /> 
        </CardContent>
      
    </Card>
  )
}

