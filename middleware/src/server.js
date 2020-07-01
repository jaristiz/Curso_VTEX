require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();

const router = require("./router")

server.use(express.json());
server.use(cors());
server.use(router);

server.get("/",(req,res)=> {
    res.send("Bienvenido a API");
})

server.listen(3001, () => {
  console.log("Servidor iniciado en Puerto 3001");
});
