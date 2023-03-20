const { Sms, VesselInfo, Vessel } = require("../models/index");
const { lat, lng } = require("../helpers/ddFormat");

class SmsController {
  static async callbackSms(req, res, next) {
    try {
      const { sender, content: message, idsms } = req.query;
      let randomId = `TRX-ID-${sender}-${idsms}`;
      const obj = {
        mobile: sender,
        message,
        trxID: randomId,
        type: "Receive Sms",
      };
      await Sms.create(obj);
      // console.log(obj);
      let newData2 = await message.split(",");
      console.log(newData2);
      let newLatitude = lat(newData2[15]);
      if (newData2[16] === "S") {
        newLatitude = `${-newLatitude}`;
      }
      // console.log(newLatitude);
      let newLongitude = lng(newData2[17]);
      if (newData2[18] === "W") {
        newLongitude = `${-newLongitude}`;
      }
      // console.log(newLongitude);
      let fueltank1 = newData2[3];
      if (newData2[3] == "") {
        fueltank1 = 0;
      }
      let fueltank2 = newData2[4];
      if (newData2[4] == "") {
        fueltank2 = 0;
      }
      let fueltank3 = newData2[5];
      if (newData2[5] == "") {
        fueltank3 = 0;
      }
      let fueltank4 = newData2[6];
      if (newData2[6] == "") {
        fueltank4 = 0;
      }
      let fueltank5 = newData2[7];
      if (newData2[7] == "") {
        fueltank5 = 0;
      }
      let fueltank6 = newData2[8];
      if (newData2[8] == "") {
        fueltank6 = 0;
      }
      let fueltank7 = newData2[9];
      if (newData2[9] == "") {
        fueltank7 = 0;
      }
      let fueltank8 = newData2[10];
      if (newData2[10] == "") {
        fueltank8 = 0;
      }
      let deviceid = newData2[0];
      if (newData2[0] == "") {
        deviceid = 0;
      }
      let statuspower = newData2[1];
      if (newData2[1] == "") {
        statuspower = 0;
      }
      let statussignal = newData2[2];
      if (newData2[2] == "") {
        statussignal = 0;
      }
      let rpm1 = newData2[11];
      if (newData2[11] == "") {
        rpm1 = 0;
      }
      let rpm2 = newData2[12];
      if (newData2[12] == "") {
        rpm2 = 0;
      }
      let newDate = newData2[13];
      if (newData2[13] == "") {
        newDate = 0;
      }
      let newTime = newData2[14];
      if (newData2[14] == "") {
        newTime = 0;
      }
      let newSpeed = newData2[19];
      if (newData2[19] == "") {
        newSpeed = 0;
      }
      let newPitch = newData2[20];
      if (newData2[20] == "") {
        newPitch = 0;
      }
      let newRoll = newData2[21];
      if (newData2[21] == "") {
        newRoll = 0;
      }
      let dfm1 = newData2[22];
      if (newData2[22] == "") {
        dfm1 = 0;
      }
      let dfm2 = newData2[23];
      if (newData2[23] == "") {
        dfm2 = 0;
      }
      let vesselData = await VesselInfo.create({
        imei: sender,
        deviceId: deviceid,
        statusPower: statuspower,
        statusSignal: statussignal,
        fuelTank1: fueltank1,
        fuelTank2: fueltank2,
        fuelTank3: fueltank3,
        fuelTank4: fueltank4,
        fuelTank5: fueltank5,
        fuelTank6: fueltank6,
        fuelTank7: fueltank7,
        fuelTank8: fueltank8,
        RPM1: rpm1,
        RPM2: rpm2,
        date: newDate,
        time: newTime,
        latitude: newLatitude,
        NSIndicator: newData2[16],
        longitude: newLongitude,
        EWIndicator: newData2[18],
        speed: newSpeed,
        pitch: newPitch,
        roll: newRoll,
        DFM1: dfm1,
        DFM2: dfm2,
      });
      await Vessel.update(
        {
          deviceId: deviceid,
          statusPower: statuspower,
          statusSignal: statussignal,
          fuelTank1: fueltank1,
          fuelTank2: fueltank2,
          fuelTank3: fueltank3,
          fuelTank4: fueltank4,
          fuelTank5: fueltank5,
          fuelTank6: fueltank6,
          fuelTank7: fueltank7,
          fuelTank8: fueltank8,
          RPM1: rpm1,
          RPM2: rpm2,
          date: newDate,
          time: newTime,
          latitude: newLatitude,
          NSIndicator: newData2[16],
          longitude: newLongitude,
          EWIndicator: newData2[18],
          speed: newSpeed,
          pitch: newPitch,
          roll: newRoll,
          DFM1: dfm1,
          DFM2: dfm2,
        },
        {
          where: {
            imei: sender,
          },
        }
      );
      res.status(201).json(vesselData);
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
