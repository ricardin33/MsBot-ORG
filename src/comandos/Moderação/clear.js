const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'clear',
    aliases: ['limpar', 'apagar'],
    descricao: 'Comando que serve para apagar até 100 mensagens do chat!',
		utilizacao: 'ms!clear (nº de msg)',
    cooldown: 6
  },
  run: async (client, message, args) => {
 /* 
                           INFO ADICIONAIS 
*/	
 const valor = args.join(" ");
 if(!valor) return message.channel.send('> Por Favor Digite Um número de mensagens a serem apagadas!')
 if(valor > 100) return message.channel.send(`> Você não pode apagar mais de 100 mensagens!`)
 if(isNaN(valor)) message.channel.send("> Coloque números ao inves de letras!")
 if(valor < 1) return message.channel.send(`> Você não pode deletar menos de uma mensagem!`)
/* 
                           EMBED 
*/													 
 let embed = new Discord.MessageEmbed()
 .setTitle("**Clear**")
 .setDescription(`Você acabou de limpar ${valor} mensagens neste chat!`)
 .setColor('ff0000')
 .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
 .setFooter('Clear | Ms Bot™')
 .setTimestamp()
 /* 
                           Codigo 
*/	
 await message.channel.messages.fetch({limit: valor}).then(async messages => {
	await message.channel.bulkDelete(messages.filter(m => !m.pinned)).then(() => {
	 message.channel.send(embed).then(embed => {
		 setTimeout(() => {
			 embed.delete()
		 }, 5000)
	 })	 
	 });
 })
		}
		}