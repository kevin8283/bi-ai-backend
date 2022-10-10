const mongoose = require("mongoose")

const schoolDomainSchema = mongoose.Schema({
    name: {
        type: String
    }
})

const schoolDomainModel = mongoose.model("SchoolDomain", schoolDomainSchema)

module.exports = schoolDomainModel