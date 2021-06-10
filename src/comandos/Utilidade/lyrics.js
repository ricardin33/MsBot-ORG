const song = require("@allvaa/get-lyrics");
const Discord = require('discord.js')
const lyricsFinder = require('lyrics-finder')
module.exports = {
  config: {
    nome: 'lyrics',                                                   
    aliases: ['letra'],
    descricao: 'Comando que serve para te lembrar de alguma coisa em determinado tempo!',    
		utilizacao: 'ms!lembrete (tempo)',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
		if(!args[0]) {
			return message.channel.send('Escreva a música!')
		}
let foto = await song(args.join(' ')) || "Infelizmente não encontrei a letra que você Pediu!";
	
	for(let i = 0; i < foto.lyrics.length; i += 2000) {
    const toSend = foto.lyrics.substring(i, Math.min(foto.lyrics.length, i + 2000));

							let embed = new Discord.MessageEmbed()
		.setColor('ff0000')
		.setTitle(`Lyrics | ${foto.title}`)
		.setThumbnail(foto.image, { dynamic: true, size: 2048})
		.setDescription(`**${toSend}**`)
		.setFooter('Lyrics | Ms Bot')
		message.channel.send(embed)
}


	}
}