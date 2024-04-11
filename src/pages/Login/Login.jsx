import {Alert, Button, Card, CardActions, CardContent, CardHeader, Icon, IconButton, InputAdornment, TextField, Typography, Divider } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../services/authService"
import { Email, Lock, VisibilityOff } from "@mui/icons-material"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPassVisible, setIsPassVisible]  = useState(false)
    const [alert, setAlert]  = useState(false)

    const navigate = useNavigate()
    const handleLogin = async () => {
        const res = await login({email, password})
        console.log(res.token)
        if(res){
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)

        res.role == 'student' ? navigate('/student') : navigate('/teacher')
        }else{
            setAlert(true)
        }
    }

    return (
      <>
        <div className="wrapper"></div>
        <div className="auth">
            <Card >
                <CardHeader title='Iniciar sesión' sx={{display: 'flex', textAlign: 'center'}} ></CardHeader>

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                gap: "1em",
              }}
            >
              <TextField
                type="email"
                variant="outlined"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <Icon>
                        <Email />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
              <TextField
                type={isPassVisible ? "text" : "password"}
                variant="outlined"
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <Icon>
                        <Lock />
                      </Icon>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        onClick={() => {
                          setIsPassVisible((oldState) => !oldState)
                        }}
                      >
                        {/* <VisibilityIcon /> */}
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </CardContent>

            <Divider />

                <CardActions sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
                    <Button variant="outlined" color="primary" onClick={() => {handleLogin()}} fullWidth>Login</Button>
                    
                    <Typography>¿No tienes cuenta? <Link to="/signup"><Button color="primary" > Registrate</Button></Link></Typography>
                    {alert && <Alert id="alert" severity="warning">
                        El email o la contraseña no es correcto
                    </Alert>}
                </CardActions>
            </Card>
        </div>
      </>
    )
}

export default Login;
