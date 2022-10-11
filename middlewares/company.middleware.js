const joi = require("joi")

const validateId = (req, res, next) => {
    const idSchema = joi.string().length(24).hex()

    const result = idSchema.validate(req.params.id)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }
    
    return next()
}

const validateCreateCompany = (req, res, next) => {
    const companySchema = joi.object({
        name: joi.string().min(2).required(),
        activity_domains: joi.array().items(joi.string().min(3)).required(),
        current_value: joi.number().min(0).required()
    })

    const result = companySchema.validate(req.body)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }

    return next()
}

module.exports = { validateId, validateCreateCompany }