class SmsController {
  static async callbackSms(req, res, next) {
    try {
      console.log(req.body);
      res.status(200).json(req.body)
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SmsController;