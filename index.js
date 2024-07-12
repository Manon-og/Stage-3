const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host: "127.0.0.1",
    user: "root", 
    password:"root",
    database: "sysdev_recruitment",
    });

app.post('/', (req, res) => {
    const { favorites } = req.body;
    const sql = `INSERT INTO programming_languages (favorites) VALUES (?)`;
    db.query(sql, [favorites], (err, result) => {
        if (err) {
            res.status(500).send("Error creating record");
        } else {
            res.status(200).send("Record created successfully");
        }
    });
});

app.get('/languages', (req, res) => {
    const sql = 'SELECT * FROM programming_languages';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data");
        } else {
            res.json(result); 
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});







/*

- create database sysdev_recruitment;
- show databases;
- use sysdev_recruitment;
- create table programming_languages (id int primary key auto_increment, favorites varchar(255));
- show tables;
- insert into programming_languages (favorites) values ('Python');
- select * from programming_languages;

*/
