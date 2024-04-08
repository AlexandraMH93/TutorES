import api from "./config";

const getTimeTable = async () => {
  const { data } = await api.get("/profile/teacherClassDate/", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })

   return data.filter((elem)=>{ return new Date(elem.date+"T"+elem.time).getTime() >  new Date().getTime() });
};

const getStudent = async (id) => {
    const { data } = await api.get("/user/"+id, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
   
    return data;
  };

  const getSubject = async (id) => {
    const { data } = await api.get("/subject/"+id, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
  
    return data
  }
  

const createTimeTable = async (timeData) => {
  const res  = api.post("/profile/timeTable/", timeData, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
   
  return res
}

const deleteTimeTable = async (timeId) => {
  const { data } = api.delete("/profile/timeTable/"+timeId, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
  
  return data
}

const deleteClassDate = async (classId) => {
  const { data } = api.delete("/profile/classDate/"+classId, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
  
  return data
}

const addSubject = async () => {
  const { data } = api.post("/profile/subject/")
  return data
}

export { getTimeTable, createTimeTable, getStudent,  getSubject, deleteTimeTable, deleteClassDate, addSubject}
