const router = require("express").Router();
const sms = require("./sms");
const vessel = require("./vessel");
const fueltank = require("./fueltank")

router.use("/", sms)
router.use("/vessel", vessel)
router.use("/fueltank", fueltank)

module.exports = router;