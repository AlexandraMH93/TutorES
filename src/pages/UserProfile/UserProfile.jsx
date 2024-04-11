import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  Avatar,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem

} from "@mui/material"
import { getUserInfo } from '../../services/userService'
import Grid from "@mui/material/Grid"
import './UserProfile.css'

/* import { NameContext } from '../../context/userContext' */

const UserProfile = () => {
   const [user, setUser] = useState()
   const [teacherInfo, setTeacherInfo] = useState()

    const handleUserInfo = async () => {
      const { userInfo, teacher } = await getUserInfo()
      console.log(userInfo)
      userInfo && setUser(userInfo)
      teacher && setTeacherInfo(teacher)
      
       
    } 
    
   useEffect(() => {
     handleUserInfo()
   }, [])


  return (
    <Box
      sx={{
        height: "80vh",
        width: "80vw",
        marginLeft: "12vw",
        marginTop: "15vh",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "auto",
          color: "black",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography sx={{ m: 2, textAlign: "start" }} variant="h4">
          Perfil
        </Typography>

        <Divider sx={{ m: 2 }} />
        <Box id="avatar-box">
          <Avatar
            sx={{ m: 2, width: '50%' }}
            /* alt={subjectName} */
            src={user && user.profileImage}
          ></Avatar>
        </Box>
      </Box>

      <Box sx={{ m: 2 }}>
        <Grid container spacing={3} sx={{ width: "90%" }}>
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
                {/* <TextField
                  label="Género"
                  variant="outlined"
                  defaultValue={user && user.gender}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value }
                    })
                  }
                /> */}

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Género"
                  defaultValue={user && user.gender}
                  helperText="Please select your gender"
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
                  label="Role"
                  variant="outlined"
                  defaultValue={user && user.role}
                />
              </Grid>
              {/*  <Grid item xs={3}>
                <TextField
                  label="Contraseña"
                  type='text'
                  variant="outlined"
                  defaultValue='password'
                />
              </Grid> */}
            </>
          )}
        </Grid>
      </Box>

      <Divider sx={{ m: 2, width: "90%" }} />

      <Box sx={{ m: 2 }}>
        <Grid container spacing={1} sx={{ width: "90%" }}>
          {user && localStorage.getItem("role") == "teacher" ? (
            <>
              <Grid item xs={3}>
                <TextField
                  multiline
                  maxRows={4}
                  type="text"
                  label="Descripción"
                  variant="outlined"
                  defaultValue={teacherInfo && teacherInfo.description}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="Plataforma"
                  variant="outlined"
                  defaultValue={teacherInfo && teacherInfo.location}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
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
            </>
          ) : (
             ""
          )}
        </Grid>
      </Box>
    </Box>
  ) }


export default UserProfile
