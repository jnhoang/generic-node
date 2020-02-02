import express from 'express'

const print = console.log;
const router = express.Router();

// '/api/discord/lifecheck/'
// router.get('/', (req, res) => {
//   res.send('default')
// });

router.get('/lifecheck', (req, res) => {
  print('reached the discord lifecheck')
  res.send('hello from discord controller');
});


export default router;
