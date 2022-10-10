const joi = require("joi")

const validateCreateSchool = (req, res, next) => {
    const schoolSchema = joi.object({
        name: joi.string().min(3).required(),
        student_count: joi.number().required(),
        status: joi.string().min(3).required()
    })

    const result = schoolSchema.validate(req.body)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }
    return next()
}

const validateId = (req, res, next) => {
    const idSchema = joi.string().length(24).hex()

    const result = idSchema.validate(req.params.id)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }
    
    return next()
}

const validateFinancingRequestInfos = (req, res, next) => {
    const financingSchema = joi.object({
        year: joi.number().required().min(1960),
        count: joi.number().required(),
    })

    const result = financingSchema.validate(req.body)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }
    return next()
}

const validateReceivedFinancing = (req, res, next) => {
    const receivedFinancingSchema = joi.object({
        year: joi.number().required().min(1960),
        amount: joi.number().required(),
    })

    const result = receivedFinancingSchema.validate(req.body)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }
    return next()
}

const validateExposition = validateFinancingRequestInfos

module.exports = { validateCreateSchool, validateId,
    validateExposition, validateFinancingRequestInfos, validateReceivedFinancing
}