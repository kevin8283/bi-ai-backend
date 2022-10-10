const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

//Environment variables configuration
dotenv.config()

//API Routers
const schoolRouter = require("./routes/school.route")
const schoolDomainRouter = require("./routes/school_domain.route")

const app = express()
const port = process.env.PORT || 5566

const db_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//Database connection
mongoose.connect(process.env.DB_URI, db_options, () => {
    console.log(`Server has established connection with database`)
})

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use("/api/school", schoolRouter)
app.use("/api/school-domain", schoolDomainRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
