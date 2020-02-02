import 'dotenv/config'
import express from 'express'
import Discord from 'discord.js'
const print  =  console.log;
const router =  express.Router();

const bot = new Discord.Client();
bot.login(process.env.DISCORD_TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    // msg.reply('pong');
    msg.channel.send('pong');
  }
});


router.get('/lifecheck', (req, res) => {
  print('reached the discord lifecheck')
  res.send('hello from discord controller');
});


export default router;
