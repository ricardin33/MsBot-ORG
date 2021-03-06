const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
module.exports = {
  config: {
    nome: 'serverinfo',                                                   
    aliases: ['guildinfo', 'servidorinfo'],
    descricao: 'Comando que Serve para ver informações do servidor!',    
		utilizacao: 'ms!serverinfo',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
		  let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle("**Informações Do Servidor**")
    .setColor('ff0000')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField(`🎫 Nome Do Servidor:`, message.guild.name, true)
    .addField(`🆔 ID Do Servidor`, message.guild.id, true)
    .addField(`👑 Dono Do Servidor`, message.guild.owner, true)  
    .addField(`🗺️Região Do Servidor`, message.guild.region, true)
    .addField(`👶 Dia De Criação`, moment(message.guild.createdAt).format('LLL'))
    .addField(`🚪 Você entrou em `, moment(message.member.joinedAt).format('LLL'))
    .addField(`👥Membros Totais:`, message.guild.members.cache.size, true)
    .addField(`🤖 Bots:`, message.guild.members.cache.filter(member => member.user.bot).size, true)
    .addField(`🚶 Pessoas:`, message.guild.members.cache.filter(member => !member.user.bot).size, true)
    .addField(`😗 Emojis:`, message.guild.emojis.cache.size, true)
    .addField(`👻 Emojis Animados:`,message.guild.emojis.cache.filter(emoji => emoji.animated).size,true )
    .addField(`💬 Canais De Texto:`, message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
    .addField(`🎤 Canais De Voz:`, message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
    .addField(`👔 Número De Cargos:`, message.guild.roles.cache.size, true)
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
		message.channel.send(embed);
  }
}
