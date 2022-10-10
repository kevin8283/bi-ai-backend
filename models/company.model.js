const mongoose = require("mongoose")

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activity_domains: {
        type: Array
    },
    current_value: {
        type: Number
    },
    financings: [{
        beneficiary: mongoose.Types.ObjectId,
        amount: Number
    }],
    financing_budget: {
        type: Number
    }
})

const companyModel = mongoose.model("Company", companySchema)

module.exports = companyModel