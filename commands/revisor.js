const Discord = require('discord.js');
const texts = require('../texts/texts.js');

module.exports.run = async (client, message, args) => {
  if (message.channel.type != 'dm') return;
  const revisorMessage = args.join(' ');
  message.delete().catch(O_o => {});
  let embed = new Discord.MessageEmbed()
    .setColor('#0000ff')
    .setTitle('Teste de Revisor')
    .setDescription(textREV.text)

  message.channel.send(embed);
}