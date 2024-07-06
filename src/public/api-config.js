const { handleAuthn } = require("./authn/authn-controller");
const { handleSingup } = require("./signup/signup-controller");
const { handleVerifyOtp } = require("./verify-otp/verify-otp-controller");

const singUpApiConfig = {
    route: '/signup',
    mandatoryRequestBodyParams: ['factorValue', 'serviceType'],
    controller: handleSingup
}

const verifyOtpApiConfig = {
    route: '/verify',
    mandatoryRequestBodyParams: ['factorValue', 'otp'],
    controller: handleVerifyOtp
}

const authnApiConfig = {
    route: '/authn',
    mandatoryRequestBodyParams: ['factorValue'],
    controller: handleAuthn
}
module.exports = {
    singUpApiConfig,
    verifyOtpApiConfig,
    authnApiConfig,
};