const express = require("express");
const cors = require("cors");
const mysql = require("mysql2"); // Corrected this line
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "usersdb"
});

db.connect(err => {
    if (err) {
        console.error("Error trying to connect to the database:", err);
        return;
    }
    console.log("Connected to database:", db.config.database);
});

// Default route
app.get("/", (req, res) => {
    res.send('Hello World!');
});

// GET all users
app.get("/api/users", (req, res) => {
    const query = "SELECT * FROM Users";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// GET single user based on their email or username
app.get("/api/user/:id", (req, res) => {
    const param = req.params.id;
    const query = "SELECT * FROM Users WHERE email = ? OR username = ?";
    db.query(query, [param, param], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
});

// POST a new user to the database
app.post("/api/user", (req, res) => {
    const { email, username, firstname, lastname, age, DOB, password } = req.body;
    bcrypt.hash(password, 12, (err, hashedPassword) => {
        if (err) {
            console.error("Error hashing password", err);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        const query = "INSERT INTO Users (email, username, firstname, lastname, age, DOB, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(query, [email, username, firstname, lastname, age, DOB, hashedPassword], (err, results) => {
            if (err) {
                console.error("Error executing query", err);
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({
                message: "User created successfully...",
                userId: results.insertId
            });
        });
    });
});


/*
UPDATE AN EXISTING USER
app.put("/api/user", (req, res) => {
    const { email, username, firstname, lastname, age, DOB } = req.body;
    const query = "UPDATE Users SET firstname, lastname, age, DOB WHERE email = ? and username = ?";
    db.query(query, [email, username, firstname, lastname, age, DOB], (err, results) => {
        if(err){
            console.error("Error retrieving user...", err);
            res.status(400).json({error: err.message});
            return;
        }
        res.status(201).json({
            message: "User has been updated...",
            userId: results.insertIde
        })
    })
})*/

app.delete("/api/user/:id", (req, res) => {
    const param = req.params.id;
    const query = "DELETE FROM Users WHERE email = ? or username = ?";
    db.query(query, [param, param], (err, results) => {
        if(err){
            console.error("Coudn't delete user...");
            res.status(500).json({error: err.message});
            return;
        }
        res.status(200).json({
            message: "User has been deleted...",
        })
    })
})

// Initialize the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
