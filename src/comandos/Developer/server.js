const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
const util = require('minecraft-server-util');
const motdParser = require("motd-parser")("1.8")
module.exports = {
  config: {
    nome: 'server',                                                   
    aliases: ['server'],
    descricao: 'Comando que executa uma ação do adm!',  
		utilizacao: 'ms!eval (comando)',   
    cooldown: 6
  },
  run: async (client, message, args) => {
util.status('redefancy.ga') // port is default 25565
    .then((response) => {
const data = response.description.descriptionText
		let embed = new Discord.MessageEmbed()
		.setTitle('Informações Do Servidor')
		.setColor('ff0000')
		.addField(`Nome: RedeFancy NetWork`, `MOTD: ${motdParser.toClean(data)}`)
		message.channel.send(embed)
		});

	}
}
