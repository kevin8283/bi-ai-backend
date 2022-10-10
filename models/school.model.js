const mongoose = require("mongoose")

const schoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    students_count: {
        type: Number
    },
    status: {
        type: String
    },
    expositions: {
        type: Number
    },
    financing_request: {
        type: Number
    },
    received_financing: {
        year: Number,
        amount: Number
    },
    webpage_views_count: {
        date: Date,
        count: Number
    }
})

const schoolModel = mongoose.model("School", schoolSchema)

module.exports = schoolModel