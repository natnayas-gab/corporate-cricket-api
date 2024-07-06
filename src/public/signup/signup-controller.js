const { signUp } = require('./signup-service');

const handleSingup = async (req, res) => {

    try {
        const response  = await signUp(req);
        res.status(201).json({status: response}).end();
    } catch(err) {
        console.log(JSON.stringify(err));
        res.status(err?.status||500).json({code: `E${err.code}`||'E', message: err?.message || 'INTERNAL_SERVER_ERROR'}).end();
    }
    
}

module.exports = { handleSingup };