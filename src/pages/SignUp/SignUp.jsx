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
import './SignUp.css'

//Importación del desplegable Género
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Opacity } from "@mui/icons-material";

//Importación Cumpleaños
/* import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; */

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await signUp({
      email,
      name: { firstname, lastname },
      username,
      password,
    });
    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.role);
    navigate("/login");
  };

  const handleBirth = (event) => {
    setBirth(event.target.value);
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
        
            <TextField
              type="text"
              variant="filled"
              label="Usuario/a"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>
                      <PersonIcon />
                    </Icon>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>

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
              )}}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
           </FormControl>
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
