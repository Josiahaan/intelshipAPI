const { VesselInfo } = require("../models/index");

class VesselController {
  static async getVesselInfo(req, res, next) {
    try {
      const vesselInfo = await VesselInfo.findAll();
      res.status(200).json(vesselInfo);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VesselController;