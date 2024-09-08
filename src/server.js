const express = require("express");
const { dbconnect } = require("./config/database");
var cors = require('cors')
const app = express();
const books = require("./routes/bookroutes");
const PORT = require("./config/config");
app.use(express.json());

app.use(cors());
dbconnect();

app.use("/api",books);

app.listen(PORT,()=>{
    console.log(`Server Started Successfully at ${PORT}`);
})

