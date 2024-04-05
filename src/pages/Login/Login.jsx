import { Button, Card, CardActions, CardContent, CardHeader, Icon, IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/authService"
import { Email, Lock, VisibilityOff } from "@mui/icons-material"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        const res = await login({email, password})
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        res.role == 'student' ? navigate('/student') : navigate('/teacher')
    }

    return (
        <>
        <div className="wrapper"></div>
        <div className="auth">
            <Card >
                <CardHeader title='Login' sx={{display: 'flex', textAlign: 'center'}} ></CardHeader>

                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'end', gap: '1em'}} > 
                    <TextField type='email' variant="outlined" label='Email'  
                    InputProps={{
                        startAdornment: (
                        <InputAdornment>
                            <Icon>
                                 <Email />
                            </Icon>
                        </InputAdornment>
                        )
                    }}
                     onChange={(e) => setEmail(e.target.value)} ></TextField>
                    <TextField type='password' variant="outlined" label='Password' 
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
                            <IconButton>
                                <VisibilityOff />
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                    onChange={(e) => setPassword(e.target.value)}></TextField>
                </CardContent>

                <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                    <Button color="success" onClick={() => {handleLogin()}}>Login</Button>
                    <Button > Registrarse</Button>
                </CardActions>
            </Card>
        </div>
    </>
  )
}

export default Login
