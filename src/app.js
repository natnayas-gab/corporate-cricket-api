const express = require('express');
const { config } = require('./config/configUtil');
const router = require('./routes');
const bodyParser = require('body-parser');
app = express();
const { contextPath } = config;

app.use(bodyParser.json())
app.use(contextPath, router);

app.listen(config.port, () => {
    console.log(`Server spawned at port : ${config.port}`);
})