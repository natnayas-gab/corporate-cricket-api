const { compareArray } = require('../../common/utils/compareUtil');
const { verifyJwtToken } = require('../utils/jwtUtil');

const validateRequestBody = (params) => (req, res, next) => {
    const errorMessage = {code: 'E1', message: `Some attributes are missing. Required attributes in request body : [ ${params} ]` };
    const body = req.body;
    if(!body) {
        res.status(400).json(errorMessage).end();
    }
    const keys = Object.keys(body);

    if(compareArray(params, keys, false)) {
        next();
    } else {
        res.status(400).json(errorMessage).end();
    }
}

const validateHeaders = (params) => (req, res, next) => {
    const errorMessage = {code: 'E1', message: `Some headers are missing. Required headers : [ ${params} ]` };
    const headers = req.headers;
    if(!headers) {
        res.status(400).json(errorMessage).end();
    }
    const keys = Object.keys(headers);

    if(compareArray(params, keys, false)) {
        next();
    } else {
        res.status(400).json(errorMessage).end();
    }
}

const authenticate = () => (req, res, next) => {
    const token = req?.headers?.authorization?.split(' ')?.[1];
    try {
        const decodedToken = verifyJwtToken(token);
        if(decodedToken?.factorValue) {
            next();
        } else {
            return res.status(err?.status || 400).json(err).end();
        }
    } catch(err) {
        return res.status(err?.status || 400).json(err).end();
    }
}

module.exports = {
    validateRequestBody,
    validateHeaders,
    authenticate
};