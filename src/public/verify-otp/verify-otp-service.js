const { verifyCode } = require("../../common/utils/messagingUtil")

const verifyOtp = async (phoneNumber, otp) => {
    const response = await verifyCode(otp, phoneNumber);
    return response.status;
}

module.exports = { verifyOtp };