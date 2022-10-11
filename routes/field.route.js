const router = require("express").Router()
const { getField, getAllFields, createField, 
    editField, deleteField, searchField } = require("../controllers/field.controller")
const { validateId, validateField } = require("../middlewares/field.middleware")

//GET requests
router.get("/", getAllFields)
router.get("/:id", validateId, getField)
router.get("/search", searchField)

//POST requests
router.post("/new", validateField, createField)

//PUT requests
router.put("/edit/:id", validateId, validateField, editField)

//DELETE requests
router.delete("/delete/:id", validateId, deleteField)

module.exports = router