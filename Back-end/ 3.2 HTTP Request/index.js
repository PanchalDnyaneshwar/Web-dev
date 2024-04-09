import express from "express";
const app = express();

app.get("./", (req , res) =>{
    console.log(req);
})

app.listen(3000, () => {
    console.log("server run on port 3000");
})