const mongoose = require("mongoose")

const schoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    students_count: {
        type: Number
    },
    activity_domains: [{
        type: mongoose.Schema.Types.ObjectId
    }],
    status: {
        type: String
    },
    expositions: [{
        year: {
            type: Number
        },
        count: {
            type: Number
        }
    }],
    financing_requests: [{
        year: {
            type: Number
        },
        count: {
            type: Number
        }
    }],
    received_financings: [{
        year: {
            type: Number
        },
        amount: {
            type: Number
        }
    }],
    webpage_views_count: [{
        date: Date,
        count: Number
    }]
})

const schoolModel = mongoose.model("School", schoolSchema)

module.exports = schoolModel