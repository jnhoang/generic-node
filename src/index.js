// packages
import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import { select_sql } from './modules/postgres'

const print =  console.log;
const app   =  express();

// settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// modules
app.use('/api/discord', require('./route_handlers/discord'));

app.get('/', (req, res) => {
  // print('hello from /');
  res.send("hmm hello, I'm awake!");
});
app.get('/api/lifecheck', (req, res) => {
  print('hello from /');
  print('test_value: ', process.env.TEST_VALUE)
  res.send('new response');
});

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  main()
  print(`listening on port ${PORT}`);
});


const main = async() => {
  const res =  await select_sql(process.env.SELECT_INTERACTION_QUERY)
  print('2 - main rows: ', res.rows)
  // store this result in a redis cache
}
