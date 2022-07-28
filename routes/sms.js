const router = require("express").Router();
const SmsController = require("../controllers/SmsController")

router.get("/callback/sms", SmsController.callbackSms)
router.get("/sms", SmsController.getSms)

module.exports = router;