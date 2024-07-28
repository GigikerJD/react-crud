import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Box, Button, Paper, Link } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export const Users = () => {

    const [listusers, setListusers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const myUsers = await axios.get("http://localhost:5000/api/users");
                setListusers(myUsers.data);
                console.log("Fetching is a success !!!");
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    const UpdateUser = async (user) => {
        try {
            const updatedUser = await axios.put(`http://localhost:5000/api/user/${user.id}`, {
                // Update user data here
            });
            // Handle the updated user data here
        } catch (error) {
            console.log(error);
        }
    };

    const DeleteUser = async (user) => {
        try {
            await axios.delete(`http://localhost:5000/api/user/${user.id}`);
            setListusers(listusers.filter(u => u.id !== user.id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Link
                href="/"
                sx={{
                    textAlign: "center",
                    fontSize: "larger",
                    fontFamily: "Arial",
                    textDecoration: "none",
                    color: "purple",
                    backgroundColor: "#bbb",
                    width: "20%",
                    height: "50px",
                    wrap: "wrap",
                    margin: "auto",
                    marginTop: 2,
                    marginBottom: 2,
                    borderRadius: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                Revenir à la page d'accueil
            </Link>
            <TableContainer
                component={Paper}
                sx={{
                    margin: "auto",
                    overflow: "auto",
                    width: "80%",
                    maxWidth: "100%",
                    borderRadius: "40px"
                }}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>Nom d'utilisateur</TableCell>
                            <TableCell>Mot de passe</TableCell>
                            <TableCell>Prénom</TableCell>
                            <TableCell>Nom de famille</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Date de naissance</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listusers.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{user.email}</TableCell>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{user.username}</TableCell>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{user.password}</TableCell>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{user.firstname}</TableCell>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{user.lastname}</TableCell>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }}>{user.age}</TableCell>
                                <TableCell sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{user.DOB}</TableCell>
                                <TableCell>
                                    <Box>
                                        <Button variant="contained" color="primary" onClick={() => UpdateUser(user)}>Modifier</Button>
                                        <Button variant="contained" color="secondary" onClick={() => DeleteUser(user)}>Supprimer</Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
