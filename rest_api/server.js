require('dotenv').config(); // Cargamos variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cfenv = require('cfenv');

const app = express();

const port = process.env.PORT || 4000;

// Conexión a DB
var db = "";

try{
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true}, ()=>
        console.log("Connected to DB"));

    db = mongoose.connection;
    db.on("error", (err) => console.error(err));
    db.once("open", () => console.log("Conectando a la base de datos..."));
}catch (error){
    console.log("Could not connect to DB...");
}

//Petición tipo GET
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/inventario", require("./routes/inventario-routes"));

app.listen(port, ()=>{
    console.log("El servidor está escuchando...");
})