const { Sms } = require("../models/index");

class SmsController {
  static async callbackSms(req, res, next) {
    try {
      const { sender: mobile, content: message, idsms: trxID } = req.params;
      const obj = {
        mobile,
        message,
        trxID,
      }
      await Sms.create(obj);
      res.status(201).json({message: "Success!"})
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