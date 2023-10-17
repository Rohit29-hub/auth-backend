const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

// body-parser
app.use(bodyParser.json());
app.use(express.json());

// cross-origin request
app.use(cors());

// home route
app.get('/', (req,res) => {
    res.send('Welcome to my Backend !')
})

module.exports = app;
