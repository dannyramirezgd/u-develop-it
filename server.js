const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username
        user: 'root',
        //Your MySQL password
        password:'Tesoro0716!',
        database:'election'
    },
    console.log('Connected to the election database')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//default response for any other request (NOT FOUND)  
app.use((req,res)=> {
    res.sendStatus(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
