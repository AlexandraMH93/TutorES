import React from 'react'
import TeacherCard from '../TeacherCard/TeacherCard'
import { useContext } from 'react'
import { BookingContext } from '../../Context/Booking'


const ListTeachers = ({teachers}) => {

  const {booking}= useContext(BookingContext)
  console.log(teachers)
  return (
    <>
    {teachers.map((elem, idx)=>{
         return <TeacherCard teacherInfo={elem.teacherId} />
    })}
    </>
  )
}

export default ListTeachers