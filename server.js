const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;


app.get("/api", (req, res) => {
    res.json({msg: "Ok"});
});


app.listen(PORT, () => {
    console.log("Server is starting at port ", PORT);
});