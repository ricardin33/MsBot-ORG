const Discord = require('discord.js')
let firebase = require('firebase')
	var database = firebase.database()
module.exports = {
  config: {
    nome: 'setprefix',
		aliases: ['setarprefix', 'setarprefixo', 'prefixset'],
    descricao: 'Comando que serve para setar o prefixo do bot',
		utilizacao: 'ms!prefix (prefixo)',
    cooldown: 6
  },
  run: async (client, message, args) => {
	let embedperm = new Discord.MessageEmbed()
	.setTitle("SEM PERMISSÃO")
	.setDescription(`Você não possui a permissão **ADMINISTRADOR**, sendo assim não pode executar este comando!`)
	.setColor("ff0000")
	.setFooter(`Comando executado por ${message.author.username} | MS Bot™`)

	let embedsemprefix = new Discord.MessageEmbed()
	.setTitle("ERRO")
	.setDescription("Você não me Informou nenhum prefixo!")
	.setColor("ff0000")
	.setFooter(`Comando executado por ${message.author.username} | MS Bot™`)

	let embednan = new Discord.MessageEmbed()
	.setTitle("ERRO")
	.setDescription("Você Informou números ao inves de letras e caracteres, por gentileza execute o comando novamente desta vez colocando o prefixo certo! Exemplo: a!, si! b! e etc")
	.setColor("ff0000")
	.setFooter(`Comando executado por ${message.author.username} | MS Bot™`)

	let embedfinal = new Discord.MessageEmbed()
	.setTitle("PREFIXO ALTERADO")
	.setDescription(`Meu prefixo foi alterado com sucesso para ${args[0]}!`)
	.setColor("ff0000")
	.setFooter(`Comando executado por ${message.author.username} || MS Bot™`)
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(embedperm)

  if(!args[0]) return message.channel.send(embedsemprefix)

  if(!isNaN(args[0])) return message.channel.send(embednan)
  

		database.ref(`Servidor/${message.guild.id}/Config/Prefix`)
		.once('value').then(async function(db) {
if(args[0] === "reset" || args[0] === "default") { 
return message.channel.send("Meu prefixo foi resetado (ms!)")		
database.ref(`Servidor/${message.guild.id}/Config/Prefix`)
.set({
	prefix: "ms!"
})
}
	if(args[0].length > 4) {
		return message.channel.send('Me informe um prefixo com menos de 4 caracteres!')
	}
database.ref(`Servidor/${message.guild.id}/Config/Prefix`)
.set({
	prefix: args[0]
})
return message.channel.send(embedfinal)
	})



	}
}