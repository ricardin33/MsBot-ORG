const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'avatar',                                                   
    aliases: ['foto', 'ft', 'img'],
    descricao: 'Comando que serve para ver a foto de perfil do usuário',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, size: 2048});

  let embed = new Discord.MessageEmbed() 
    .setColor(`ff0000`)
    .setDescription(`Que linda foto em ${user.username}\nPara Baixar esta obra prima [CLIQUE AQUI](${avatar})`)
    .setThumbnail(avatar)
    .setTitle(`Avatar de ${user.username}`) 
    .setImage(avatar) 
    .setTimestamp()
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
		.setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 

  }
};
