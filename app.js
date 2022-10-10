const express = require("express")
const dotenv = require("dotenv")

const app = express()
const port = process.env.PORT || 5566

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
dotenv.config()

//Routes

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
