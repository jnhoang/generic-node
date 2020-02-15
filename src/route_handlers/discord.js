import 'dotenv/config'
import express        from 'express'
import Discord        from 'discord.js'
import { select_sql } from '../modules/postgres'

const print  =  console.log;
const router =  express.Router();

const bot = new Discord.Client();
bot.login(process.env.DISCORD_TOKEN);

/* bot logs in and grabs & sets up it's listners
  uses the message handler
  listens for specific triggers and has a generic response
*/
bot.on('ready', async() => {
  console.info(`Logged in as ${bot.user.tag}!`);
  const res          =  await select_sql(process.env.SELECT_INTERACTION_QUERY)
  const interactions =  res.rows.map( (row) => ({ trigger: row.trigger, response: row.response } ));

  bot.on('message', msg => {
    interactions.forEach( interaction => {
      if (msg.content.toLowerCase().includes(interaction.trigger)) {
        msg.channel.send(interaction.response);
      }
    });
  });
})






router.get('/lifecheck', (req, res) => {
  print('reached the discord lifecheck')
  res.send('hello from discord controller');
});


export default router;


