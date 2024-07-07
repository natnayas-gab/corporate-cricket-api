const express = require('express');
const router = express.Router();

router.use("/public", require('./public/routes'));
router.use("/api", require('./app/routes'));


module.exports = router;