const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log("listening on port:3000");
});