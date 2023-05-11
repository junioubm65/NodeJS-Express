const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get("/",(req,res) => {
    res.send('Hello June');
});

app.listen(port,() => {
    console.log("Listening on port : " + chalk.green(port));
    console.log("Hello June");
    debug("Listening on port : " + chalk.green(port));
});