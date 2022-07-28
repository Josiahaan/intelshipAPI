const router = require("express").Router();
const SmsController = require("../controllers/SmsController")

router.post("/callback/sms", SmsController.callbackSms)

module.exports = router;