import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/authService"

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
        <div className="auth">
        <Card>
            <CardHeader title='Login'></CardHeader>

            <CardContent> 
                <TextField type='email' variant="outlined" label='Email' onChange={(e) => setEmail(e.target.value)} ></TextField>
                <TextField type='password' variant="outlined" label='Password' onChange={(e) => setPassword(e.target.value)}></TextField>
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'end'}}>
                <Button color="success" onClick={() => {handleLogin()}}>Login</Button>
                <Button > Registrarse</Button>
            </CardActions>
        </Card>
        </div>
  )
}

export default Login
