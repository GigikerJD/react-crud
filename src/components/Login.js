import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link, Alert } from '@mui/material';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.get("http://localhost:5000/api/user",
        {
          USERNAME: username,
          PASSWORD: password
        });
      if(response.status === 200){
        setMsg("Logged in successfully...");
      }else{
        setMsg("Login failed. Please check your credentials and try again !");
      }
    }catch(error){
      setMsg("An error occured during login session. Please try again !");
    }
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Page de connexion
        </Typography>
        {
          msg && (
            <Alert 
              severity={msg.includes("successfully") ? "success":"error"} 
              sx={{marginBottom: 2}}
            >
              {msg}
            </Alert>
          )
        }
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nom d'utilisateur"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Se connecter
          </Button>
          <Link 
                href="/"
                sx={{
                    textAlign: "center",
                    fontSize: "larger",
                    fontFamily: "Arial",
                    textDecoration: "none",
                    color: "purple",
                    backgroundColor: "#bbb",
                    width: "70%",
                    height: "50px",
                    margin: "auto",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    wrap: "wrap"
                }}>
                    Revenir à la page d'accueil
            </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
