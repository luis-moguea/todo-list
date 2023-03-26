const mongoose = require("mongoose")

const Note = require("../models/mongodb")
Note()

module.exports = {
    getNotes: (req, res)=> {
        Note.find({}).then(notes =>{
            res.send(notes)
        })
        mongoose.connection.close
    },

    postNote: (req, res)=> {
        const note = req.body

        if(!note.note){
            res.status(400).send("Note empty, please type something")
        }
        
        const newNote = new Note ({
            note: req.body.note,
            done: req.body.done
        })

        newNote.save().then(savedNote =>{
            res.send(savedNote)
        })

        mongoose.connection.close
    }
}