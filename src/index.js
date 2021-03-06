const express = require('express');
const app = express();
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("../config/config.json"); 
const texts = require('../texts/texts')
const globalRandomMessage = require('../commands/randomMessage.js')

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});


app.listen(process.env.PORT); 

client.on('ready', () => {
  client.user.setActivity('prefixo ()', {type: undefined});
});


client.on('message', message =>{
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return;

  const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    if(!message.content.startsWith(config.prefix)) return;
    const command = args.shift().toLowerCase();

  if(command === 'sua wordKey para o comando') {
    message.delete().catch(O_o => {});
    let temporizador = setInterval(() => {
    return message.channel.send(globalRandomMessage());
    }, 2000)
  }
})


client.on('message', message => {
     if (message.author.bot) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    if(!message.content.startsWith(config.prefix)) return;
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`../commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }

});

client.on('message', message => {    
   if(comando === 'sites') {
      let embed1 = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setDescription(" \n**Site Oficial**: <https://www.google.com/>")
      message.channel.send(embed1)
  };

  if(comando === 'obrasativas') {
      let embed2 = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setDescription('texto...')

      message.channel.send(embed2)
    }

});  // siga o padrão e add mais se desejar. 

client.login(config.token); 