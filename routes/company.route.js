const router = require("express").Router()
const { getCompany, getAllCompanies, 
    createCompany, deleteCompany } = require("../controllers/company.controller")
const { validateId, validateCreateCompany } = require("../middlewares/company.middleware")

//GET routes
router.get("/", getAllCompanies)
router.get("/:id", validateId, getCompany)

//POST routes
router.post("/new", validateCreateCompany, createCompany)

//DELETE routes
router.delete("/delete/:id", validateId, deleteCompany)

module.exports = router

