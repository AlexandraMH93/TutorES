import api from "./config";

const getTimeTable = async () => {
  const { data } = await api.get("/profile/teacherClassDate/", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  return data;
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
    });
  
    return data;
  };
  

const createTimeTable = async (timeData) => {
  const { data } = api.post("/profile/timeTable/", timeData, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return data;
};

 


export { getTimeTable, createTimeTable, getStudent,  getSubject};
