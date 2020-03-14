import 'dotenv/config'
import {config} from '../../config.js/index.js'

import express  from 'express'
import Discord  from 'discord.js'

const print        =  console.log;
const router       =  express.Router();
const interactions =  config.interactions;
const users        =  config.users;

const bot = new Discord.Client();
bot.login(process.env.DISCORD_TOKEN);

/* bot logs in and grabs & sets up it's listners
  uses the message handler
  listens for specific triggers and has a generic response
*/
bot.on('ready', async() => {
  console.info(`Logged in as ${bot.user.tag}!`);
})


bot.on('message', msg => {
  if (msg.content.toLowerCase().includes('feefi')) {
    msg.channel.send('<@171417050328203264> what');
  }
  interactions.forEach( interaction => {
    if (msg.content.toLowerCase().includes(interaction.trigger)) {
      msg.channel.send(interaction.response);
    }
  });
});





router.get('/lifecheck', (req, res) => {
  print('reached the discord lifecheck')
  res.send('hello from discord controller');
});


export default router;


