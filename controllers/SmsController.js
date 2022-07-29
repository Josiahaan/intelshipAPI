const { Sms } = require("../models/index");

class SmsController {
  static async callbackSms(req, res, next) {
    try {
      const { sender: mobile, content: message, idsms } = req.query;
      let randomId = `TRX-ID-${mobile}-${idsms}`
      const obj = {
        mobile,
        message,
        trxID: randomId,
        type: "receive sms",
      }
      let newData = await Sms.create(obj);
      res.status(201).json(newData)
    } catch (err) {
      next(err);
    }
  }

  static async getSms(req, res, next) {
    try {
      const sms = await Sms.findAll();
      res.status(200).json(sms);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SmsController;