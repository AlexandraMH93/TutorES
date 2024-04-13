import { useEffect, useState } from "react"
import {
  Alert,
  Box,
  Button,
  Typography,
  Divider,
  Avatar,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { getUserInfo, updateUserInfo } from "../../services/userService"
import Grid from "@mui/material/Grid"
import "./UserProfile.css"

const UserProfile = () => {
  const [user, setUser] = useState()
  const [teacherInfo, setTeacherInfo] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const [alertClass, setAlertClass] = useState("warning")
  const [alertText, setAlertText] = useState("Perfil actualizado correctamente")

  const handleUserInfo = async () => {
    const { userInfo, teacher } = await getUserInfo()

    userInfo && setUser(userInfo)
    teacher && setTeacherInfo(teacher)
  }

  const handleButton = async () => {
    let newUser = user
    delete newUser.password
    delete newUser.updatedAt
    delete newUser.createdAt
    let userUpdate = {
      userInfo: newUser,
    }
    if (localStorage.getItem("role") == "teacher") {
      let newTeacher = teacherInfo
      delete newTeacher.updatedAt
      delete newTeacher.createdAt
      userUpdate.teacherInfo = newTeacher
    }

    

    const result = await updateUserInfo(userUpdate)
    
    if (result){

      localStorage.setItem("token", result)
      setAlertClass("success")
      setAlertText("Perfil actualizado correctamente")
      setShowAlert(true)
    }else{
       
      setAlertClass("warning")
      setAlertText("Algo ha ido mal actualizando el perfil")
      setShowAlert(true)

    }

  }

  useEffect(() => {
    handleUserInfo()
  }, [])

  return (
    <Box className="mainContainer">
      <Box id="calendarContainer">
        <Box>
          <Typography sx={{ m: 2, textAlign: "start" }} variant="h4">
            Perfil
          </Typography>

          <Divider sx={{ m: 2 }} />
          <Box id="avatar-box">
            <Avatar
              sx={{ m: 2, width: "50%" }}
              src={user && user.profileImage}
            ></Avatar>
          </Box>
        </Box>

        <Box className="profileFormContainer" sx={{ m: 2 }}>
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {user && (
              <>
                <Grid item xs={3}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    value={user && user.firstName}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, firstName: e.target.value }
                      })
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="Primer apellido"
                    variant="outlined"
                    defaultValue={user && user.lastName}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, lastName: e.target.value }
                      })
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="Segundo apellido"
                    variant="outlined"
                    defaultValue={user && user.secondLastName}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, secondLastName: e.target.value }
                      })
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="Fecha de nacimiento"
                    variant="outlined"
                    type="date"
                    defaultValue={user && user.birthDate}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, birthDate: e.target.value }
                      })
                    }
                  />
                </Grid>

                <Grid item xs={3}>
               

                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Género"
                    defaultValue={user && user.gender}
                  >
                    <MenuItem value={"Female"}>Femenino</MenuItem>
                    <MenuItem value={"Male"}>Masculino</MenuItem>
                    <MenuItem value={"Undefined"}>Indefinido</MenuItem>
                    <MenuItem value={"Nonbinary"}>No binario</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    defaultValue={user && user.email}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, email: e.target.value }
                      })
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="Teléfono"
                    variant="outlined"
                    defaultValue={user && user.phone}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, phone: e.target.value }
                      })
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Ubicación"
                    variant="outlined"
                    defaultValue={user && user.location}
                    onChange={(e) =>
                      setUser((prev) => {
                        return { ...prev, location: e.target.value }
                      })
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    disabled
                    label="Rol"
                    variant="outlined"
                    defaultValue={user && user.role}
                  />
                </Grid>
              </>
            )}

            {user && localStorage.getItem("role") == "teacher" && (
              <>
                <Grid item xs={3}>
                  <TextField
                    label="Plataforma"
                    variant="outlined"
                    defaultValue={teacherInfo && teacherInfo.location}
                    onChange={(e) =>
                      setTeacherInfo((prev) => {
                        return { ...prev, location: e.target.value }
                      })
                    }
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    onChange={(e) =>
                      setTeacherInfo((prev) => {
                        return { ...prev, price: e.target.value }
                      })
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment disableTypography position="end">
                          €
                        </InputAdornment>
                      ),
                    }}
                    label="Precio"
                    variant="outlined"
                    type="number"
                    defaultValue={teacherInfo && teacherInfo.price}
                  />
                </Grid>

                <Grid item xs={6} id="DescriptionInput">
                  <TextField
                  onChange={(e) =>
                    setTeacherInfo((prev) => {
                      return { ...prev, description: e.target.value }
                    })
                  }
                    multiline
                    maxRows={6}
                    type="text"
                    label="Descripción"
                    variant="outlined"
                    defaultValue={teacherInfo && teacherInfo.description}
                  />
                </Grid>
              
              </>
            )}
              <Grid item xs={localStorage.getItem("role")== "teacher" ? 6: 9} id="buttonContainer">
                  <Button
                    onClick={() => {
                      handleButton()
                    }}
                    variant="contained"
                    color="primary"
                  >
                  
                    Guardar cambios 
                  </Button>
                
                </Grid>

                {showAlert && (
              <Grid item xs={12}>  <Alert id="alert" severity={alertClass}>
                 {alertText}
                </Alert>
                </Grid>
              )}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default UserProfile
