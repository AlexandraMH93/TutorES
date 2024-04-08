import React, { useEffect, useState } from 'react'
import './Subjects.css'
import { Card, CardContent, Typography } from '@mui/material'
import TeacherSubject from '../CardTeacherSubject/CardTeacherSubject'


export const ListSubjects = ({subjectsObj}) => {
   
  return (
   
        <div id='subjectsCard-container'>
            {subjectsObj && subjectsObj.map((element, idx) => {
            console.log(element)
            return (
                 <TeacherSubject subjectName={element.name}   />
            )
            })} 
        </div>
  )
}
