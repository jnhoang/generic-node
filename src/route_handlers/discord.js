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


const interactions = [
  {
    'trigger'  :  'ping',
    'response' :  'pong'
  },
  {
    'trigger'  :  'hard mode',
    'response' :  'hmm, that reminds me of the time that Alex \
     went into a dungeon on hard mode with low level gear \
     and the the group kept dying :joy:'
  },

]

bot.on('message', msg => {
  // print('msg: ', msg)
  // print('msg.content: ', msg.content)
  // print('contains: ', msg.content.includes('pong'))

  interactions.forEach( interaction => {
    if (msg.content.includes(interaction.trigger)) {
      msg.channel.send(interaction.response);
    }
  });

});


router.get('/lifecheck', (req, res) => {
  print('reached the discord lifecheck')
  res.send('hello from discord controller');
});


export default router;
