const express = require('express');
const publicRoutes = express.Router();

const { singUpApiConfig, verifyOtpApiConfig, authnApiConfig } = require('./api-config');
const { validateRequestBody } = require('../common/middlewares/middlewares');

publicRoutes.post(
    singUpApiConfig.route,  
    validateRequestBody(singUpApiConfig.mandatoryRequestBodyParams),
    singUpApiConfig.controller
);

publicRoutes.post(
    verifyOtpApiConfig.route,
    validateRequestBody(verifyOtpApiConfig.mandatoryRequestBodyParams),
    verifyOtpApiConfig.controller
);

publicRoutes.post(
    authnApiConfig.route,
    validateRequestBody(authnApiConfig.mandatoryRequestBodyParams),
    authnApiConfig.controller
);

module.exports = publicRoutes;

