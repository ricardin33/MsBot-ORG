const Discord = require('discord.js')
const eco = require('discord-economy')
const ms = require('parse-ms')
var firebase = require('firebase')
var database = firebase.database()
module.exports = {
  config: {
    nome: 'bal',                                                   
    aliases: ['balance', 'dinheiro', 'balanciamento'],
    descricao: 'Comando que serve ver o seu dinheiro ou o de um usuário ',    
		utilizacao: 'ms!bal && ms!bal @user',   
    cooldown: 6
  },
  run: async (client, message, args) => {
	let user = message.mentions.members.first() || message.author;

database.ref(`Usuário/${user.id}/Economia`)
.once('value').then(async function(db) {
let dinheiromaos = db.val().dinheiro
let banco = db.val().banco
if(db.val() == null) {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.set({
		dinheiro: 0,
		banco: 0,
	})
}


				let embed = new Discord.MessageEmbed()
				.setTitle('Balance')
				.setDescription(`Informações De ${user.username}`)
				.addField(`<:amarelo:753684158769004585> | Dinheiro Em Mãos:`, `**${dinheiromaos}**`)
				.addField(`<:amarelo:753684158769004585> | Dinheiro No Banco:`, `**${banco}**`)
				.setFooter('Ms Bot | Economy System', user.avatarURL({ dynamic: true, size: 2048}))
				.setThumbnail(user.avatarURL({ dynamic: true, size: 2048}))
				.setColor('ff0000')
    message.channel.send(embed)
}) 
	}
}