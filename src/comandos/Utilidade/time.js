const Discord = require("discord.js")
module.exports = {
  config: {
    nome: 'time',                                               
    descricao: 'Comando que serve para ver a conta de uma pessoa no twitter',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		let time = args[0];
		if(!time) {
				return message.channel.send('Você não escreveu nenhum tempo! Tente assim: 10m ou 10s ou 10h ou 10d')
			}
			if(time.endsWith('s') === false && time.endsWith('m') === false && time.endsWith('h') === false && time.endsWith('d') === false) {
				return message.channel.send('Utilize de forma certa! Exemplo: 10m Ou 10s Ou 1d Ou 10h')
			}
			if(time.endsWith('s')) {
			let tempoReal = time.replace(/s+/gi, '');
			}
			if(time.endsWith('m')) {
				const tempoReal = time.replace(/m+/gi, '') * 60;
			}
			if(time.endsWith('h')) {
				const tempoReal = time.replace(/h+/gi, '');
			}
			if(time.endsWith('d')) {
				const tempoReal = time.replace(/d+/gi, '');
			}
			message.channel.send(time.replace(/s+/gi, ''))

	}
}