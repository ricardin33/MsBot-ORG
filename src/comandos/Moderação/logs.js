const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'logs',
    aliases: ['setlog', 'canallog', 'setarlog'],
    descricao: 'Comando que serve para setar o canal de logs do servidor!',
		utilizacao: 'ms!logs',
    cooldown: 6
  },
  run: async (client, message, args) => {
		  let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
 let canal = message.mentions.channels.first() || args[0];
let variz = db.get(`logschannel_${message.guild.id}`)
if(!message.member.hasPermission('ADMINISTRATOR')) {
	message.channel.send("> Você não possui permissão para executar este comando!")
}

if(!canal) {
	message.channel.send("> Por favor mencione um canal válido!")
}
if(args[0] === "off" && variz === "off") {
	message.channel.send("O logChat ja esta desativado! para ativar digite ms!logs #canal")
}
if(args[0] === "off") {
	db.set(`logschannel_${message.guild.id}`, "off")
	message.quote("> Você acabou de desativar o log channel!")
} else{

try{
	db.set(`logschannel_${message.guild.id}`, canal.id)
	message.channel.send("Prontinho! O canal de log foi setado!")
	} catch (error) {
		console.log(error)
	}
}
		}
		}