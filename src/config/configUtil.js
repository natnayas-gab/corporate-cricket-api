require('dotenv').config();

const config = {
    author: process.env.AUTHOR || '',
    port: process.env.PORT || '3000',
    contextPath: process.env.APP_CONTEXT_PATH || '/corporate-cricket-app',
    twilioSid: process.env.TWILIO_ACCOUNT_SID || '',
    twilioToken: process.env.TWILIO_ACCOUNT_TOKEN || '',
    serviceSid: process.env.TWILIO_SERVICE_SID || '',
    jwtSecret: process.env.JWT_SECRET || '',
}

module.exports = {
    config
}