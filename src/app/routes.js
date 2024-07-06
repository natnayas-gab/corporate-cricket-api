const express = require('express');
const { validateHeaders, authenticate } = require('../common/middlewares/middlewares');
const protectedRoutes = express.Router();

protectedRoutes.get('/test', validateHeaders(['Authorization']),authenticate(),(req, res, next) => {
    res.status(200).json({message: 'Secured Api'}).end();
})
module.exports = protectedRoutes;