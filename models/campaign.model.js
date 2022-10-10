const mongoose = require("mongoose")

const campaignSchema = mongoose.Schema({
   category: {
        type: String
   },
   budget: {
    type: Number
   },
   return_on_investment: {
    type: Number
   }
})

const campaignModel = mongoose.model("Campaign", campaignSchema)

module.exports = campaignModel