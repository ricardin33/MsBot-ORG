const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'dançar',                                                   
    aliases: ['dancar'],
    descricao: 'Comando que serve para dançar com outros usuários!',  
		utilizacao: 'ms!dançar @user',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);

var list = [
  'https://loritta.website/assets/img/actions/dance/both/gif_232.gif',
  'https://loritta.website/assets/img/actions/dance/male_x_male/gif_245.gif',
  'https://loritta.website/assets/img/actions/dance/female_x_female/gif_252.gif',
  'https://loritta.website/assets/img/actions/dance/female_x_female/gif_253.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_235.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_238.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_237.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_239.gif',
  'https://loritta.website/assets/img/actions/dance/both/gif_231.gif',
  'https://loritta.website/assets/img/actions/dance/female_x_female/gif_256.gif',
  'https://loritta.website/assets/img/actions/dance/male_x_male/gif_244.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if(user.id === message.author.id) return message.reply("Você não pode dançar com você mesmo!")
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dançar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**Dançar**')
        .setColor('ff0000')
        .setDescription(`${message.author} acaba de Dançar com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.author.username} Acaba de mandar o passinho!`, message.author.displayAvatarURL({format: 'png'}))
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);

	}
	}