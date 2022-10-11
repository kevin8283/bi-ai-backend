const Company = require("../models/company.model")

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find()

        return res.json(companies)
    } 
    catch (error) {
        return res.json(error)
    }
}

const getCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id)

        return res.json(company)
    } 
    catch (error) {
        return res.json(error)
    }
}

const createCompany = async (req, res) => {
    try {
        const { name, activity_domains, current_value } = req.body
        
        const company = new Company({name, activity_domains, current_value})
        const createdCompany = await company.save()

        return res.json(createdCompany)
    } 
    catch (error) {
        return res.json(error)
    }
}

const deleteCompany = async (req, res) => {
    try {
        const deleted = await Company.findByIdAndDelete(req.params.id)
        
        return res.json(deleted)
    } 
    catch (error) {
        return res.json(error)
    }
}

module.exports = { getCompany, getAllCompanies, createCompany, deleteCompany }