const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ----- POSTGRES CONNECTION -----
const db = new Pool({
 host: "localhost",
 user: "postgres",
 password: "a0b4d1u2",   // change if needed
 database: "myproject",
 port: 5432
});

// ----- ROUTES -----


app.get("/", async (req, res) => {
    // const result = await db.query("SELECT * FROM generals_cards LIMIT 6");
    
    res.render("/index");
  });

app.get("/singIn", async (req, res) => {
    const { name, email } = req.body;
  await db.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
 res.render("singIn");
});


app.get("/singUp", async (req, res) => {
 
 res.render("singUp");
});
app.get("/main", async (req, res) => {
 
 res.render("main");
});
app.get("/mainCard", async (req, res) => {
 
 res.render("mainCard");
});



app.listen(3000, () => console.log("Server running on http://localhost:3000"));