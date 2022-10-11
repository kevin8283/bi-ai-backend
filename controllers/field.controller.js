const Field = require("../models/field.model")

const getAllFields = async (req, res) => {
    try {
        const fields = await Field.find()
    
        return res.json(fields)
    } 
    catch (error) {
        return res.json(error)
    }
}

const getField = async (req, res) => {
    try {
        const field = await Field.findById(req.params.id)

        return res.json(field)
    } 
    catch (error) {
        return res.json(error)
    }
}

const searchField = async (req, res) => {
    try {
        const fields = await Field.find({name: new RegExp(`/${req.body.name}/`, "i")})

        return res.json(fields)    
    } 
    catch (error) {
        return res.json(error)
    }
}

const createField = async (req, res) => {
    try {
        const { name } = req.body
    
        const field = new Field({name})
        const result = await field.save()

        return res.json(result)
    } 
    catch (error) {
        return res.json(error)
    }
}

const editField = async (req, res) => {
    try {
        const editedField = await Field.findByIdAndUpdate(req.params.id, req.body)
        const result = await editedField.save()
        
        return res.json(result)
    } 
    catch (error) {
        return res.json(error)
    }
}

const deleteField = async (req, res) => {
    try {
        const deletedField = await Field.findByIdAndDelete(req.params.id)
        
        return res.json(deletedField)
    } 
    catch (error) {
        return res.json(error)
    }
}

module.exports = { getField, getAllFields, searchField, createField, editField, deleteField }