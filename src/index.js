// packages
import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'


const print =  console.log;
const app   =  express();
const PORT  =  process.env.PORT || 3000;

// settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// modules
app.get('/', (req, res) => {
  print('hello from /');
  res.send('new response');
});
app.get('/api/lifecheck', (req, res) => {
  print('hello from /');
  print('test_value: ', process.env.TEST_VALUE)
  res.send('new response');
});

// listener
app.listen(PORT, function() {
  print(`listening on port ${PORT}`);
});

