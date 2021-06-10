const Discord = require('discord.js')
var firebase = require('firebase')
var database = firebase.database()
module.exports = {
  config: {
    nome: 'banco',                                                   
    aliases: ['bank', 'banc', 'dep'],
    descricao: 'Comando que serve ver o seu dinheiro ou o de um usuário ',    
		utilizacao: 'ms!bal && ms!bal @user',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		let banco = args[0]
		if(!banco) {
			message.channel.send("Escreva a quantia para depositar!")
		}
		if(banco <= 1) {
			return message.channel.send('Escreva uma quantia maior que 1!')
		}
 			if(isNaN(banco)) {
		return message.channel.send('Você tem que escrever o valor em números!')
	}
database.ref(`Usuário/${message.author.id}/Economia`)
.once('value').then(async function(db) {
if(db.val().dinheiro === null || db.val().banco === null) {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.set({
		dinheiro: 0,
		banco: 0
	})
}
if(db.val().dinheiro < banco) {
	message.channel.send("> Você não tem dinheiro suficiente para depositar no banco!")
} else {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.update({
		dinheiro: db.val().dinheiro - banco,
		banco: db.val().banco + Number(banco)
	})
	message.channel.send("Você depositou o Dinheiro no banco corretamente!")
}
})
	}
}