const School = require("../models/school.model")

const getSchool = async (req, res) => {
    try {
        const school = await School.findById(req.params.id)

        return res.json(school)   
    } 
    catch (error) {
        return res.json(error)    
    }
}

const getAllSchool = async (req, res) => {
    try {
        const schools = await School.find()

        return res.json(schools)
    } catch (error) {
        return res.json(error)
    }
}

const createSchool = async (req, res) => {
    try {
        const school = new School({
            name: req.body.name,
            student_count: req.body.student_count,
            status: req.body.status,
            activity_domains: req.body.activity_domains
        })
    
        const result = await school.save()
        return res.json(result)    
    } 
    catch (error) {
        return res.json(error)
    }
}

const deleteSchool = async (req, res) => {
    try {
        const deleted = await School.findByIdAndDelete(req.params.id)    

        return res.json(deleted)
    } 
    catch (error) {
        return res.json(error)
    }
}

const addFinancingRequestInfos = async (req, res) => {
    try {
        const school = await School.findById(req.params.id)

        school.financing_requests.push({
            year: req.body.year,
            count: req.body.count
        })

        school.markModified()

        const result = await school.save()
        return res.json(result)    
    } 
    catch (error) {
        return res.json(error)
    }
} 

const addReceivedFinancing = async (req, res) => {
    try {
        const school = await School.findById(req.params.id)

        school.received_financings.push({
            year: req.body.year,
            amount: req.body.amount
        })

        school.markModified()

        const result = await school.save()
        return res.json(result) 
    } 
    catch (error) {
        return res.json(error)
    }
}

const addExposition = async (req, res) => {
    try {
        const school = await School.findById(req.params.id)

        school.expositions.push({
            year: req.body.year,
            count: req.body.amount
        })

        school.markModified()

        const result = await school.save()
        return res.json(result) 
    } 
    catch (error) {
        return res.json(error)
    }
}

const getWebPageInsights = async (req, res) => {
    try {
        const { day, month, year } = req.body
        const id = req.params.id
        
        const school = await School.findById(id)
        let resultIndex = 0

        const result = school.webpage_views_count.find((item, index) => {
            const review_date = new Date(item.date)
            const review_day = review_date.getDate()
            const review_month = review_date.getMonth()
            const review_year = review_date.getFullYear()

            if (review_day === day && review_month === (month - 1) && review_year === year) {
                resultIndex = index

                return true
            }
            return false 
        })

        const yesterday_count = school.webpage_views_count[resultIndex - 1].count

        return res.json({
            date: result.date,
            count: result.count,
            growth: ((result.count - yesterday_count) / yesterday_count).toPrecision(2) * 100
        })
    } 
    catch (error) {
        return res.json(error)
    }
}

module.exports = { getSchool, getAllSchool, createSchool, deleteSchool,
    addFinancingRequestInfos, addReceivedFinancing, addExposition,
    getWebPageInsights
}