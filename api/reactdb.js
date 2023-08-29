const express = require("express");
const router = express.Router();

const reactdb = require("./api/reactdb")

router.get("/",(req,res)=>{res.send("나는 엔트리 포인트 밑의 평범한 라우터에요.");})

module.exports = router;