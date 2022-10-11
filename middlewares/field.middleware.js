const joi = require("joi")

const validateId = (req, res, next) => {
    const idSchema = joi.string().length(24).hex()

    const result = idSchema.validate(req.params.id)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }
    
    return next()
}

const validateField = (req, res, next) => {
    const fieldSchema = joi.object({
        name: joi.string().min(3).required()
    })

    const result = fieldSchema.validate(req.body)

    if (result.error) {
        return res.json(result.error.details[0].message)
    }

    return next()
}

module.exports = { validateId, validateField }