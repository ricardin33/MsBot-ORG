const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'beijar',                                                   
    aliases: ['kiss'],
    descricao: 'Comando que serve para beijar outro membro!',  
		utilizacao: 'ms!kiss @user',   
    cooldown: 6
  },
  run: async (client, message, args) => {
	 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://cdn.discordapp.com/attachments/572486432384352268/633970015900794880/5bca76823067b273a1108261103bf740tenor.gif',
  'https://cdn.discordapp.com/attachments/572486432384352268/633970037694398484/6d75a30fab19a9751aae652dd211dd1cgiphy.gif',
  'https://cdn.discordapp.com/attachments/572486432384352268/633970030513750017/80f94c90afd9f524c1b2e3cca20f1a45tenor_1.gif',
  'https://cdn.discordapp.com/attachments/572486432384352268/633970023962247178/631c72f1880142f58089bdc695a27da4giphy_1.gif',
  'https://cdn.discordapp.com/attachments/572486432384352268/633970030513750017/80f94c90afd9f524c1b2e3cca20f1a45tenor_1.gif',
  'https://64.media.tumblr.com/69cf45b7947fe8318ee8c899873066cd/tumblr_mr4nx9VeSz1saagnvo1_500.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first();
if(user === message.author.id) return message.reply("Você não pode se beijar!")
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**Beijar**')
        .setColor('ff0000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter("Que pegação em!!")
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);

	}
	}