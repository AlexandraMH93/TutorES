import React, { useEffect, useState } from 'react'
import { getAllSubjects } from '../../services/subjectService'
import './Subjects.css'

export const Subjects = () => {
    const [subjects, setSubjects] = useState([]) 
    
    const handleSubjects = async () => {
        const res = await getAllSubjects()
        setSubjects(res)
        console.log(subjects)
    }

    useEffect(() => {handleSubjects()}, [])

  return (
    <div id='subjects' >
        <div id='title'><h1>Subjects</h1></div>
        <div id='subjectsCard-container'>
            {subjects && subjects.map((element, idx) => {
            console.log(element)
            return (
                <div className='subject' key={idx}>
                    <p>{element.name}</p>
                </div>
            )
            })} 
        </div>
    </div>
  )
}
