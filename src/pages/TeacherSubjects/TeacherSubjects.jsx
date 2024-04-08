import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ListSubjects } from '../../components/ListSubjects/ListSubjects'
import { getAllSubjects } from '../../services/subjectService'

const TeacherSubjects = () => {

 const [subjects, setSubjects] = useState([]) 
    
    const handleSubjects = async () => {
        const res = await getAllSubjects()
        setSubjects(res)
        console.log(subjects)
    }
    useEffect(() => {handleSubjects()}, [])
    
  return (
    <div id='subjects' > {/* defino lo que se va a mostrar en la pestaña de subjects para el teacher */}
        <Typography id='title' variant='h3'>Subjects</Typography>
        <ListSubjects subjectsObj={subjects} /> {/* muestro las asignaturas */}
    </div>
  )
}

export default TeacherSubjects
