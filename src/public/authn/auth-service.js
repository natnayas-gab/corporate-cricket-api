const { getJwtToken } = require("../../common/utils/jwtUtil");

const authenticate = (req) => {
    //insert entry into no sql db
    return getJwtToken(req?.body);
}

module.exports = {
    authenticate,
};