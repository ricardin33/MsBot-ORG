const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'antlink',
    aliases: ['antilink', 'contralink'],
    descricao: 'Comando que serve para bloquear qualquer tipo de link no servidor!',
		utilizacao: 'ms!antilink on ou off',
    cooldown: 6
  },
  run: async (client, message, args) => {
let msg = args[0];
let simn = db.get(`antilink_${message.guild.id}`);

 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
if(!msg === "off" || !msg === "on") {
	message.channel.send("> Você deve colocar on/off apos o comando para ativar/desativar o antilink!")
}
if(msg === "off") {
	if(simn === "false"){
		return message.channel.send(`> O anti link ja está desativado caso queira ativa-lo digite ${prefix}antilink on!`);
	} else {
	message.channel.send("> Você acabou de desativar a função anti-link!")
	db.set(`antilink_${message.guild.id}`, "false")
	}
}

if(msg === "on") {
	if(simn === "true") {
		return message.channel.send(`> O anti link ja está ativado caso queira desativa-lo digite ${prefix}antilink off!`)
	}
	message.channel.send("> Você acabou de ativar a função anti-link!")
	db.set(`antilink_${message.guild.id}`, "true")
}


	}
}