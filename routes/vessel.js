const router = require("express").Router();
const VesselController = require("../controllers/VesselController")

router.get("/vessel",VesselController.getVesselInfo)

module.exports = router;