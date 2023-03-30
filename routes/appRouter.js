/**
 * @swagger
 * components:
 *        schemas:
 *              Notes:
 *                type: object
 *                properties:
 *                  text:
 *                    type: string
 *                    description: Things to do
 *                  action: 
 *                     type: boolean
 *                     description: Saving note
 *                required:
 *                   - text
 *                   - action
 *                example:
 *                    text: This is my first note
 *                    action: true
 */

/**
 * @swagger
 * paths:
 *  /api/get-todos:
 *   get:
 *     tags:
 *      - Get all notes
 *     summary: Saved notes
 *     description: Return all saved notes
 *     responses:
 *       '200':
 *         description: All saved notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notes'     
 *
 * /api/save-todo:
 *   post:
 *    tags:
 *      - New note
 *    summary: Create a new to-do
 *    requestBody:
 *    responses:
 *      '200':
 *        description: Adding a new note
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Notes'
*/  

const express = require("express")
const controller = require("../controllers/appController")
const router = express.Router()

router.get("/api/get-todos", controller.getNotes)
router.post("/api/save-todo", controller.postNote)
router.delete("/api/get-todos", controller.deleteTodo)

module.exports = router

