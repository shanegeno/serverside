const express = require('express');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.use(bodyParser.json());
