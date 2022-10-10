const router = require("express").Router()
const { getSchoolDomains, addSchoolDomain, deleteSchoolDomain } = require("../controllers/school_domain.controller")
const { validateDomainName, validateDomainId } = require("../middlewares/school_domain.middleware")

router.get("/", getSchoolDomains)

router.post("/new", validateDomainName, addSchoolDomain)

router.delete("/delete/:id", validateDomainId, deleteSchoolDomain)

module.exports = router