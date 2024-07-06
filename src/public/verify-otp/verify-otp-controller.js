const { verifyOtp } = require("./verify-otp-service")

const handleVerifyOtp = async (req, res) => {
    try {
        const { factorValue, otp } = req.body;
        const response = await verifyOtp(factorValue, otp);
        return res.status(200).json({status: response}).end();
    } catch(err) {
        res.status(500).json({code: 'E', message: err?.message || 'INTERNAL_SERVER_ERROR'}).end();
    }
}

module.exports = {
    handleVerifyOtp,
}