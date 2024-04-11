import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  InputAdornment,
  Icon,
  OutlinedInput,
  FilledInput,
  Box, Grid
} from "@mui/material"
import { useState } from "react"
import { signUp } from "../../services/authService"
import { Link, useNavigate } from "react-router-dom"
import EmailIcon from "@mui/icons-material/Email"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import LockIcon from "@mui/icons-material/Lock"
import PersonIcon from "@mui/icons-material/Person"
import CreateIcon from "@mui/icons-material/Create"
import TransgenderIcon from "@mui/icons-material/Transgender"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EuroIcon from "@mui/icons-material/Euro"
import DescriptionIcon from "@mui/icons-material/Description"
import "./SignUp.css"

//Importación del desplegable Género
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

//Importación Cumpleaños
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

const SignUp = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [secondLastname, setSecondLastname] = useState("")
  const [gender, setGender] = useState("")
  const [birthDate, setbirthDate] = useState(new Date("2014-08-18T21:11:54"))
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [password, setPassword] = useState(false)
  const [description, setDescription] = useState("")
  const [price, setPrice]  = useState("")
  const [teacherLocation, setTeacherLocation]= useState("")
  const [isPassVisible, setIsPassVisible]  = useState(false)
 

  const [role, setRole] = useState("")
  const navigate = useNavigate()

  const handleSignup = async () => {

    const userData={
      "userInfo":{
      "firstName":firstname,
      "lastName": lastname,
      "secondLastName":secondLastname,
      "birthDate":birthDate.$y+"-"+birthDate.$M+"-"+birthDate.$D,
      "gender":gender,
      "phone":phone,
      "location":"España",
      "role":role,
      "email":email,
      "password":password
      },
      "teacherInfo":{
      "description":description,
      "location":teacherLocation,
      "price":price
        
      }
  }
    const res = await signUp(userData)
    localStorage.setItem("token", res.token)
    localStorage.setItem("role", res.role)
    navigate("/")
  }

  return (
    <div id='signup-container'>
      <Card sx={{ width: "40vw" }}>
        <CardHeader title="Registrarse">
          <Typography variant="h3"> Registrarse </Typography>
        </CardHeader>

        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
          <Grid container spacing={3}>


            <Grid item xs={12} md={6} lg={6} >

              <TextField
              required
                type="text"
                variant="outlined"
                label="Nombre"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>
                        <PersonIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setFirstname(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={6} >
              <TextField
              required
                type="text"
                variant="outlined"
                label="1º Apellido"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>
                        <CreateIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setLastname(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={6} >

              <TextField
              required
                type="text"
                variant="outlined"
                label="2º Apellido"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>
                        <CreateIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setSecondLastname(e.target.value)}
              ></TextField>
            </Grid>

            <Grid item xs={12} md={6} lg={6} >
              <TextField
              required
                type="email"
                variant="outlined"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>
                        <EmailIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </Grid>

            <Grid item xs={12} md={6} lg={6} >
              <TextField type= 'text'
                 variant="outlined"
                 required
                label="Contraseña"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>
                        <LockIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                 
                }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={6} >


              <TextField
              required
                type="text"
                variant="outlined"
                label="Telefono"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>
                        <PhoneIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPhone(e.target.value)}
              >
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={6} >
               <FormControl> 
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    onChange={(e) => setbirthDate(e)}
                    label="Fecha de nacimiento"
                  />
                </DemoContainer>
              </LocalizationProvider>
               </FormControl> 
            </Grid>

            <Grid item xs={12} md={6} lg={6} >
             <FormControl sx={{ width: "100%" }}> 
              <InputLabel  id="gender">Género</InputLabel>
              <Select 
                labelId="gender"
                id="gender-select"
                value={gender}
                label="Gender"

                startAdornment={
                  <InputAdornment position="start">
                    <Icon>
                      <TransgenderIcon />
                    </Icon>
                  </InputAdornment>
                }
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"Female"}>Femenino</MenuItem>
                <MenuItem value={"Male"}>Masculino</MenuItem>
                <MenuItem value={"Undefined"}>Indefinido</MenuItem>
                <MenuItem value={"Nonbinary"}>No binario</MenuItem>
              </Select>
               </FormControl> 
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
              <FormControl   sx={{ width: "100%" }}>
              <InputLabel id="role">Rol</InputLabel>
              <Select
              required
                sx={{ width: "100%" }}
                labelId="role"
                id="role-select"
                value={role}
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value={"teacher"}>Profesor</MenuItem>
                <MenuItem value={"student"}>Estudiante</MenuItem>
              </Select>
              </FormControl>
            </Grid>

            {role == "teacher" && (
            <>
             <Grid item xs={12} md={6} lg={6} >
              <FormControl  sx={{ width: "100%" }}>
                <InputLabel required id="role">Plataforma</InputLabel>
                <Select
                
                  labelId="location"
                  id="location-select"
                  value={teacherLocation}
                  label="Plataforma"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon>
                          <LocationOnIcon />
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setTeacherLocation(e.target.value)}
                >
                  <MenuItem value={"online"}>Online</MenuItem>
                  <MenuItem value={"inPerson"}>Presencial</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12} md={6} lg={6} >
              <FormControl>
                <TextField
                required
                  onChangeCapture={(e)=>setPrice(e.target.value)}
                  type="number"
                  variant="outlined"
                  label="Precio"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon>
                          <EuroIcon />
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                 ></TextField>
              </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={12} >

              <FormControl  sx={{ width: "100%" }} > 
                <TextField
                required
                 multiline
                 maxRows={4}
                  type="text"
                  variant="outlined"
                  label="Descripción"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon>
                          <DescriptionIcon />
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setDescription(e.target.value)}
                ></TextField>
              </FormControl>
              </Grid >

            </>
          )}

          </Grid>

          

        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Link to={"/"}>
            <Button variant="outlined">Cancelar</Button>
          </Link>

          <Link to={"/signup"}>
            <Button variant="contained" color='secondary' onClick={() => handleSignup()}>
              Registrarse
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

export default SignUp
