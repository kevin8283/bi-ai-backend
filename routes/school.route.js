const router = require("express").Router()
const { 
    getSchool, getAllSchool, createSchool, deleteSchool,
    addFinancingRequestInfos, addExposition, addReceivedFinancing
 } = require("../controllers/school.controller")

const { 
    validateCreateSchool, validateId,
    validateExposition, validateFinancingRequestInfos, validateReceivedFinancing
 } = require("../middlewares/school.middleware")

//GET requests 
router.get("/", getAllSchool)
router.get("/:id", validateId, getSchool)

//POST requests
router.post("/new", validateCreateSchool, createSchool)
router.post("/:id/financing-request/new", validateId, validateFinancingRequestInfos, addFinancingRequestInfos)
router.post("/:id/received-financing/new", validateId, validateReceivedFinancing, addReceivedFinancing)
router.post("/:id/exposition/new", validateId, validateExposition, addExposition)

//DELETE requests
router.delete("/delete/:id", validateId, deleteSchool)

module.exports = router