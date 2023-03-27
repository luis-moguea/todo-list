const mongoose = require("mongoose")
const path = require("path")
const dotenv = require("dotenv").config({path: path.resolve(__dirname, "../.env")})
const mongooseHidden = require("mongoose-hidden")()

const mongoUri = `mongodb+srv://luismogueadp:Lm.24277690@cluster0.n9lxkrd.mongodb.net/todo-list?retryWrites=true&w=majority`

mongoose.connect(mongoUri).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(`Error: ${err}`)
})


const noteSchema = mongoose.Schema({
    note: String,
    done: Boolean
})

noteSchema.plugin(mongooseHidden)

const Note = mongoose.model("Notes", noteSchema)

module.exports = Note



