const router = require("express").Router();
const SmsController = require("../controllers/SmsController")

router.get("/callback/sms", SmsController.callbackSms)

module.exports = router;