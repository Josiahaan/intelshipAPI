const router = require("express").Router();
const sms = require("./sms");
const vessel = require("./vessel");

router.use("/", sms)
router.use("/", vessel)

module.exports = router;