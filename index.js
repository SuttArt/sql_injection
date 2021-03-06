const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydbTest"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get("/getUsers", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
        if (err) {
            res.send(sql + "<br> <br>" + JSON.stringify(err));
            return;
        }
        res.send(sql + "<br> <br>" + JSON.stringify(result));
    })
})

app.get("/getUser/:id", (req, res) => {
    let sql = `SELECT name FROM users WHERE id='${req.params.id}'`;
    db.query(sql, (err, result) => {
        if (err) {
            res.send(sql + "<br> <br>" + JSON.stringify(err));
            return;
        }
        res.send(sql + "<br> <br>" + JSON.stringify(result));
    })
})

app.get("/getUserInfo/:id", (req, res) => {
    let sql = `SELECT id, name, mail FROM users WHERE id='${req.params.id}'`;
    db.query(sql, (err, result) => {
        if (err) {
            res.send(sql + "<br> <br>" + JSON.stringify(err));
            return;
        }
        res.send(sql + "<br> <br>" + JSON.stringify(result));
    })
})

app.get("/loginLike/:log&:pass", (req, res) => {
    let sql = `SELECT mail FROM users WHERE name LIKE '${req.params.log}' AND password LIKE '${req.params.pass}'`;
    db.query(sql, (err, result) => {
        if (err) {
            res.send(sql + "<br> <br>" + JSON.stringify(err));
            return;
        }
        res.send(sql + "<br> <br>" + JSON.stringify(result));
    })
})

app.get("/login/:log&:pass", (req, res) => {
    let sql = `SELECT mail FROM users WHERE name = '${req.params.log}' AND password = '${req.params.pass}'`;
    db.query(sql, (err, result) => {
        if (err) {
            res.send(sql + "<br> <br>" + JSON.stringify(err));
            return;
        }
        res.send(sql + "<br> <br>" + JSON.stringify(result));
    })
})

const start = async () => {
    try {
        await app.listen(port);
    } catch (e) {
        console.log(e);
    }
}
start().then(() => {
    console.log(`Der Server wurde gestartet! http://localhost:${port}`);
}).catch(e => {
    console.error(e)
});

