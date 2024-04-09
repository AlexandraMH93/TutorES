import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { Email, Lock, VisibilityOff } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await login({ email, password });
    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.role);
    res.role == "student" ? navigate("/student") : navigate("/teacher");
  };
  const handleSignup = async () => {
    navigate("/signUp");
  };
  return (
    <>
      <div className="wrapper"></div>
      <div className="auth">
        <Card>
          <CardHeader
            title="Login"
            sx={{ display: "flex", textAlign: "center" }}
          ></CardHeader>

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
                  <InputAdornment position="start">
                    <Icon>
                      <EmailIcon />
                    </Icon>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth={true}
            />
            <TextField
              type="password"
              variant="outlined"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>
                      <Lock />
                    </Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              color="success"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
            <Button onClick={handleSignup}> Registrarse</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Login;
