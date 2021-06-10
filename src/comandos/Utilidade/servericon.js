const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'servericon',                                                   
    aliases: ['guildicon', 'serveravatar', 'imageserver'],
    descricao: 'Comando que serve para ver a foto do servidor!',    
		utilizacao: 'ms!servericon',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
if(!message.guild.iconURL()) return message.channel.send("Este Servidor Não tem Icone");

let iconembed = new Discord.MessageEmbed()
.setColor("ff0000")
.setDescription(`Para Fazer o Download [Clique Aqui](${message.guild.iconURL()})`)
.setImage(message.guild.iconURL({ size: 2048, dynamic: true }))
.setTitle("Icone do Server")
.setFooter(`Pedido Por ${message.author.username}!`)
.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
message.channel.send(iconembed);
  }
}
