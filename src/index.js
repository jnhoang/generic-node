// packages
import '@babel/polyfill'
import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'

const print =  console.log;
const app   =  express();

// settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// modules
app.get('/', (req, res) => {
  // print('hello from /');
  res.send("hmm hello, I'm awake!");
});
app.get('/lifecheck', (req, res) => {
  res.send("hmm hello, what is it!");
});


// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  print(`listening on port ${PORT}`);
});
