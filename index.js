const express = require("express")
const dotenv = require("dotenv").config()
const router = require("./routes/appRouter")


const app = express()

app.use(express.json())
//app.use(express.urlencoded({ extended: false }))
app.use("/", router)

const port = process.env.PORT

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
