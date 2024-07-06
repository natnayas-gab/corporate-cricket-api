const { authenticate } = require("./auth-service");

const handleAuthn = (req, res) => {
    try{
        const jwtToken = authenticate(req);
        res.set('Authorization', `Bearer ${jwtToken}`).status(200).end();
    }catch(err) {
        res.status(err?.status || 500).json(err).end();
    }
};

module.exports = {
    handleAuthn,
};