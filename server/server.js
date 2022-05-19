const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd905c9e3c78d4fcd8be16c17ef5390d1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.static(path.join(__dirname, '../public')))

rollbar.log('Connected!')




const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on ${port}`))