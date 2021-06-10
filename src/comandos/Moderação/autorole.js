const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'autorole',
    aliases: ['setautorole'],
    descricao: 'Comando que serve para bloquear qualquer tipo de link no servidor!',
		utilizacao: 'ms!antilink on ou off',
    cooldown: 6
  },
  run: async (client, message, args) => {
		  let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
        if(!message.member.hasPermission("MANAGE_ROLES") && message.author.id !== "409801761470152704") return message.channel.send("Você não tem permissão para banir usuários!");
  let cargo = message.mentions.roles.first();
	if(!args[0]) {
		message.channel.send("Envie um cargo !")
	}
	if(args.lenght > 1) message.channel.send("> Meus bancos de dados não suportam mais de 1 cargo para ser o autorole!")

	if(!cargo) {
		message.channel.send("> Por Favor Coloque um cargo Válido!") 
	} 
	if(args[0] === "off") {
		message.channel.send("> Autorole Desabilitado com sucesso!")	
		db.set(`autorole_${message.guild.id}`, "off")
	} else {
		db.set(`autorole_${message.guild.id}`, cargo);
		let embed = new Discord.MessageEmbed()
	.setTitle("**Autorole**")
	.setDescription(`Você setou o autorole para o cargo ${cargo}`)
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	message.channel.send(embed)
	}

	
	}
	}