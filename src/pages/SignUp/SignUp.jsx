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
  Box
} from "@mui/material";
import { useState } from "react";
import { signUp } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import TransgenderIcon from '@mui/icons-material/Transgender';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './SignUp.css'

//Importación del desplegable Género
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//Importación Cumpleaños
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; 

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [secondLastname, setSecondLastname] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setbirthDate] = useState(new Date('2014-08-18T21:11:54'));
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await signUp({
      firstname,
      lastname,
      secondLastname,
      birthDate,
      gender,
      email,
      phone,
      location,
      role,
      password,
    });
    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.role);
    navigate("");
  };

  

  return (
    <div className="main">
      <Card sx={{ width: "25vw" }}>
        <CardHeader title="Registrarse">
          <Typography variant="h3"> Registrarse </Typography>
        </CardHeader>

        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1em" }}
        >
          <FormControl variant='filled' fullWidth>
          <TextField
            type="text"
            variant="filled"
            label="Nombre"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>
                    <CreateIcon />
                  </Icon>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setFirstname(e.target.value)}
          ></TextField>

          <TextField
            type="text"
            variant="filled"
            label="Apellidos"
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
        
  

       {/*   <form>
      <label htmlFor="birthdate">Fecha de nacimiento:</label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        value={birthDate}
        onChange={(e) => setbirthDate(e.target.value)}
      />
    </form> */}

{/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
<KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="birthDate"
          label="Fecha de nacimiento"
          value={birthDate}
          onChange={(e)=> setbirthDate(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

    </MuiPickersUtilsProvider> */}

          <TextField
            type="email"
            variant="filled"
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
          <TextField
            type="text"
            variant="filled"
            label="Contraseña"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>
                    <LockIcon />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>
                    <VisibilityOffIcon />
                  </Icon>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>

            <TextField
              type="text"
              variant="filled"
              label="Phone"
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
            ></TextField>

           <TextField
            type="text"
            variant="filled"
            label="Location"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>
                    <LocationOnIcon />
                  </Icon>
                </InputAdornment>
              ),
            }}
            
            onChange={(e) => setFirstname(e.target.value)}
          ></TextField>
           </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider> 

           <FormControl >
        <InputLabel id="gender">Género</InputLabel>
        <Select
    
          labelId="gender"
          id="gender-select"
          value={gender}
          label="Gender"
          /* input={<FilledInput label='Género' />} */
    
              startAdornment={
                <InputAdornment position="start">
                  <Icon>
                    <TransgenderIcon />
                  </Icon>
                </InputAdornment>
              }
            
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem  value={'Female'}>Femenino</MenuItem>
          <MenuItem value={'Male'}>Masculino</MenuItem>
          <MenuItem  value={'Undefined'}>Indefinido</MenuItem>
          <MenuItem  value={'Nonbinary'}>No binario</MenuItem>
        </Select>
        </FormControl>

        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Link to={"/"}>
            <Button>Cancelar</Button>
          </Link>

          <Link to={"/signup"}>
            <Button variant="contained" onClick={() => handleSignup()}>
              Registrarse
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};



export default SignUp;
