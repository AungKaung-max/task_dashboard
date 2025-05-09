import {
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/api/v1/auth/sign-in`, {
        email,
        password,
      });

      const { token } = res.data.data;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 1, fontSize: "1.2rem" }}
      >
        TaskMaster
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: "text.secondary" }}>
        Login to your account
      </Typography>

      {errorMsg && (
        <Typography color="error" sx={{ mb: 2 }}>
          {errorMsg}
        </Typography>
      )}

      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
      />

      <Button
        onClick={handleLogin}
        variant="contained"
        fullWidth
        sx={{
          mb: 2,
          backgroundColor: "#f7931e",
          "&:hover": {
            backgroundColor: "#f7931e",
          },
          borderRadius: 5,
          py: 1,
          fontSize: "1rem",
          textTransform: "none",
        }}
      >
        Login
      </Button>

      <Button
        variant="outlined"
        fullWidth
        sx={{
          mb: 3,
          borderColor: "#FF6B35",
          color: "#FF6B35",
          "&:hover": {
            borderColor: "#E05A2B",
          },
          borderRadius: 5,
          py: 1,
          fontSize: "1rem",
          textTransform: "none",
        }}
        onClick={() => navigate("/register")}
      >
        Register
      </Button>

      <Divider sx={{ width: "100%", mb: 2 }} />

      <Stack direction="row" justifyContent="space-between" width="100%">
        <Link
          component={RouterLink}
          to="#"
          underline="hover"
          sx={{
            color: "text.secondary",
            "&:hover": {
              color: "#FF6B35",
            },
            fontSize: "1rem",
          }}
        >
          Forgot password?
        </Link>
        <Link
          component={RouterLink}
          to="/register"
          underline="hover"
          sx={{
            color: "text.secondary",
            "&:hover": {
              color: "#FF6B35",
            },
            fontSize: "1rem",
          }}
        >
          Register for new account
        </Link>
      </Stack>
    </Paper>
  );
};

export default Login;
