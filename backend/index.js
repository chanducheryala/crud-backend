const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');



mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/testDb" ,(err) => {
    if(err) {
        console.log("error");
    } else
    console.log("connected to DB");
})

app.use(cors())
app.use(express.json())
const port = 8000;


const usersRouter = require('./routes/index.js')

app.use("/", usersRouter);


app.listen(port, () => {
    console.log("The server is runnig in 8000");
})
