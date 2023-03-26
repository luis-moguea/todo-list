const express = require("express")

const controller = require("../controllers/appController")

const router = express.Router()

router.get("/api/get-todos", controller.getNotes)
router.post("/api/save-todo", controller.postNote)
router.delete("/api/get-todos", controller.deleteTodo)

module.exports = router