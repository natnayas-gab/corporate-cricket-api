const jwt = require('jsonwebtoken');
const { config } = require('../../config/configUtil');

const JWT_ERRORS = {
    jwtTokenCreationError : {
        code: 'JWT_ERR_1',
        status: 500,
        message: 'JWT token creation failure'
    },
    jwtNoTokenError: {
        code: 'JWT_ERR_2',
        status: 401,
        message: 'Missing JWT token',
    },
    jwtSignatureIssue: {
        code: 'JWT_ERR_3',
        status: 401,
        message: 'Bad signature',
    },

}

const getJwtToken = (payload) => {
    try{
        const token = jwt.sign(payload, config.jwtSecret);
        return token;
    }catch(err) {
        throw JWT_ERRORS.jwtTokenCreationError;
    }
}

const verifyJwtToken = (token) => {
    if(!token) {
        throw JWT_ERRORS.jwtNoTokenError;
    }
    try {
        const decodedToken = jwt.verify(token, config.jwtSecret);
        return decodedToken;
    } catch(err) {
        throw JWT_ERRORS.jwtSignatureIssue;
    }
}

module.exports = {
    getJwtToken,
    verifyJwtToken

}
