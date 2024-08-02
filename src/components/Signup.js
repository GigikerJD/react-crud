import { useState } from "react";
import { FormControl,
    Input, 
    InputLabel, 
    Button, 
    Box, 
    Typography, 
    Link, 
    Alert} from "@mui/material";
import axios from "axios";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const CreateAccount = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/user";
        setError("");

        try {
            const response = await axios.post(url, {
                email,
                username,
                firstname,
                lastname,
                age,
                DOB: date,
                password: password
            });
            console.log(response.data);
            setSuccess("Account created successfully !!!");
        } catch (error) {
            console.error("There was an error creating the account:", error);
            setError("Veuillez remplir le formulaire d'inscription.");
        }
    };

    return (
        <Box
            component="form"
            sx={{
                maxWidth: 500,
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 2
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: 30
                }}
            >
                Page d'inscription
            </Typography>
            {
                error && (
                    <Alert severity="error" sx={{marginBottom: 2}}>
                        {error}
                    </Alert>
                )
            }
            {
                success && (
                    <Alert severity="success" sx={{marginBottom: 2}}>
                        Vous avez créé un nouveau compte
                    </Alert>
                )
            }
            <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="email-address">Adresse e-mail</InputLabel>
                <Input
                    id="email-address"
                    type="email"
                    placeholder="Veuillez taper votre addresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </FormControl>
            <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="username">Nom d'utilisateur</InputLabel>
                <Input
                    id="username"
                    type="text"
                    placeholder="Veuillez taper votre nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </FormControl>
            <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="password">Mot de passe</InputLabel>
                <Input
                    id="password"
                    type="password"
                    placeholder="Veuillez entrer votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </FormControl>
            <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="firstname">Prénom</InputLabel>
                <Input
                    id="firstname"
                    type="text"
                    placeholder="Veuillez taper votre prénom"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="lastname">Nom de famille</InputLabel>
                <Input
                    id="lastname"
                    type="text"
                    placeholder="Veuillez taper votre nom de famille"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth margin="dense">
                <InputLabel htmlFor="age">Age</InputLabel>
                <Input
                    id="age"
                    type="number"
                    placeholder="Veuillez renseigner votre âge"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth margin="dense">
                <Input
                    id="date"
                    type="date"
                    placeholder="Date de naissance"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </FormControl>
            <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={CreateAccount}
            >
                S'inscrire
            </Button>
            <Link 
                href="/"
                sx={{
                    textAlign: "center",
                    fontSize: "larger",
                    fontFamily: "Arial",
                    textDecoration: "none",
                    color: "purple",
                    backgroundColor: "#eee",
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
    );
};
