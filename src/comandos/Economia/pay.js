const Discord = require('discord.js')
const eco = require('discord-economy')
const ms = require('parse-ms')
var firebase = require('firebase')
var database = firebase.database()
module.exports = {
  config: {
    nome: 'pay',                                                   
    aliases: ['pagar', 'payuser'],
    descricao: 'Comando que serve para pagar a um usuário!',    
		utilizacao: 'ms!pay @user',   
    cooldown: 6
  },
  run: async (client, message, args) => {
	 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);

    var user = message.mentions.users.first()
    var amount = args[1]
 
    if (!user) return message.channel.send('> Por favor mencione um usuário válido!')
    if (!amount) return message.channel.send('> Por favor coloque um valor!')
		if(isNaN(amount)) {
			message.channel.send('> Por favor coloque um valor em números!')
		}
		database.ref(`Usuário/${message.author.id}/Economia`)
.once('value').then(async function(db) {
	let dinheiro = db.val().dinheiro;
	if(dinheiro < amount) {
		return message.channel.send("> Você não pode dar uma quantia a mais do que você possui!")
	}
	database.ref(`Usuário/${message.author.id}/Economia`)
	.update({
		dinheiro: db.val().dinheiro - amount
	})
	database.ref(`Usuário/${user.id}/Economia`)
	.update({
		dinheiro: db.val().dinheiro + amount
	})
	    message.reply(`> Transferencia feita com sucesso!!\nEnviado de <@${message.author.id}>: **${amount}**\nPara <@${user.id}>`)
})
	}

}