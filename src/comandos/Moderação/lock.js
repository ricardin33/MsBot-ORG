const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'lock',
    aliases: ['fechar', 'trancar'],
    descricao: 'Comando que serve para fechar o canal (tirar a permissão de everyone para falar no chat)',
		utilizacao: 'ms!lock',
    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
let canal = message.channel;
if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
	message.channel.send("> Eu não possuo permissão para executar este comando, por favor me de a permissão" + "`" + "Gerencia Canais" + "`" + "!")
}
if(!message.member.hasPermission('MANAGE_CHANNELS')) {
	message.channel.send("> Você não possui permissão para executar este comando!")
}

try{
	message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false });
	message.channel.send("> Fechei o Chat!")
} catch (error) {
	console.log(error)
}
	
		}
		}