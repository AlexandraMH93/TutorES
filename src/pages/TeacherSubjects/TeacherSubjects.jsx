import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
    <div id='subjects' >
        <Typography id='title' variant='h1'>Subjects</Typography>
        <ListSubjects subjectsObj={subjects} />
    </div>
  )
}

export default TeacherSubjects
