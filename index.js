const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const router = require("./routes/appRouter")

app.use(express.json())
app.use("/", router)

const port = process.env.PORT

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
