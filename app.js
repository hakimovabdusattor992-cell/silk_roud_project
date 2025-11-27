const navToggle=document.querySelector(".nav-toggle")
const toggileBtn=document.querySelector(".toggile-btn")
const toggileBtnImg=document.querySelector(".toggile-btn__img")

toggileBtn.addEventListener("click",()=>{
    navToggle.classList.toggle('show-tg')
    if(navToggle.classList.contains('show-tg')){
        toggileBtnImg.src='../img/close.png'
    }else{
      toggileBtnImg.src='../img/list.png'  
    }
})


const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// ----- POSTGRES CONNECTION -----
const db = new Pool({
 host: "localhost",
 user: "myproject",
 password: "a0b4d1u2",   // change if needed
 database: "test_db",
 port: 5432
});

// ----- ROUTES -----

// Read (list users)
app.get("/", async (req, res) => {
 const result = await db.query("SELECT * FROM users ORDER BY id ASC");
 res.render("users", { users: result.rows });
});

// Create user
app.post("/add", async (req, res) => {
 const { name, email } = req.body;
 await db.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
 res.redirect("/");
});

// Delete user
app.post("/delete/:id", async (req, res) => {
 await db.query("DELETE FROM users WHERE id = $1", [req.params.id]);
 res.redirect("/");
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
