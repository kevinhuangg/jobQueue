var express = require('express')
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

//RESTful API


var port = process.env.PORT || 3000;
var server = app.listen(port, () => {
  console.log(`Magical unicorns will arrive at port ${port}!`);
})