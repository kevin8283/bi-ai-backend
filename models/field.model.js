const mongoose = require("mongoose")

const fieldSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const fieldModel = mongoose.model("Field", fieldSchema)

module.exports = fieldModel