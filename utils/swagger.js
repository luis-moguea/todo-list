const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const path = require("path")
const { join } = require("path")
const { application } = require("express")


//Metadata info about the api

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
        title: "To-Do List",
        version: "1.0.0"
        },

        servers: [
            {
                url:"http://localhost:5000"
            }
        ],
    },

    apis: ["./routes/*.js"]
}

// transform DATA into JSON

const swaggerSpec = swaggerJsDoc(options)

// funtion to setup our docs

const swaggerDocs = (app, port) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    console.log(`Version 1 docs are available at https://express-todo-list-e9ic.onrender.com/api/docs`)
}

module.exports = { swaggerDocs }