const express = require("express");
const app = express();
const PORT = 8004;

app.get('/', (req, res)=>{res.sendFile(__dirname + "/public/index.html")});

app.use((req, res)=>{res.status(404).sendFile(__dirname + "/public/nopage.html")});

app.listen(PORT, ()=>{console.log(PORT+"번으로 노드서버 구동")});