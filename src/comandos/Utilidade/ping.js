const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'ping',
    descricao: 'Comando que serve para ver o ping do bot para com o server',
		utilizacao: 'ms!ping',
    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
	message.channel.send(`> Latencia ${Date.now() - message.createdTimestamp}ms\n> Latencia da API: ${Math.round(client.ws.ping)}ms`);
		}
		}