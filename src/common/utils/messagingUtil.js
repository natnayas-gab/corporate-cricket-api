const twilio = require('twilio');
const { config } = require('../../config/configUtil');

const twilioClient = twilio(config.twilioSid, config.twilioToken);


const sendCode = async (phoneNumber) => {
    return await twilioClient.verify.v2
    .services(config.serviceSid)
    .verifications
    .create({
        channel: 'sms',
        to: phoneNumber,
    });
}

const verifyCode = async (code, phoneNumber) => {
    return await twilioClient.verify.v2
    .services(config.serviceSid)
    .verificationChecks
    .create({
        code: code,
        to: phoneNumber
    });
}

module.exports = {
    sendCode,
    verifyCode
}