const SchoolDomain = require("../models/school_domains.model")

    const getSchoolDomains = async (req, res) => {
        try {
            const schoolDomains = await SchoolDomain.find()

            return res.json(schoolDomains)
        }

        catch (error) {
            return res.json(error)
        }
    }

    const addSchoolDomain = async (req, res) => {
        const schoolDomain = new SchoolDomain({name: req.body.name})

       try {
            const result = await schoolDomain.save()

            return res.json(result)
       } 
       catch (error) {
            return res.json(error) 
       }
    }

    const deleteSchoolDomain = async (req, res) => {
        try {
            const deleted = await SchoolDomain.findByIdAndDelete(req.params.id)
            
            return res.json(deleted)
        } 
        catch (error) {
            return res.json(error)
        }
    }

module.exports = { getSchoolDomains, addSchoolDomain, deleteSchoolDomain }