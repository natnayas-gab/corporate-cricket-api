const { sendCode } = require("../../common/utils/messagingUtil");

const signUpUserEmail = (email) => {
    console.log('Email signup in progress');
}

const signUpUserPhone = async (phoneNumber) => {
    return sendCode(phoneNumber);
}
const signUpServices = {
    phone: signUpUserPhone,
    email: signUpUserEmail,
}

const signUp = async (req) => {
    const { factorValue, serviceType } = req?.body;
    const sendCodeResponse  = await signUpServices[serviceType](factorValue);
    return sendCodeResponse?.status;
}

module.exports = {
    signUp
}