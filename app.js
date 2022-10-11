const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

//Environment variables configuration
dotenv.config()

//API Routers
const schoolRouter = require("./routes/school.route")
const companyRouter = require("./routes/company.route")
const fieldRouter = require("./routes/field.route")

const app = express()
const port = process.env.PORT || 5566

const db_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//Database connection
mongoose.connect(process.env.DB_URI, db_options, (error) => {
    if (error) {
        console.log(error)

        return
    }
    return console.log(`Server has established connection with database`)
})

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use("/api/school", schoolRouter)
app.use("/api/company", companyRouter)
app.use("/api/field", fieldRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
