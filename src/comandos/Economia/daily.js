const Discord = require('discord.js')
var firebase = require('firebase')
var database = firebase.database()
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'daily',                                                   
    aliases: ['diario', 'dailymoney'],
    descricao: 'Comando que serve para receber seu dinheiro diário',    
		utilizacao: 'ms!daily',   
    cooldown: 6
  },
  run: async (client, message, args) => {
			let timeout = 7200000;
 const money = Math.floor(Math.random() * 500);
 database.ref(`Usuário/${message.author.id}/Economia`)
.once('value').then(async function(db) {
if(db.val().cooldownDaily === null) {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.set({
		cooldownDaily: 0
	})
}
if (db.val().cooldownDaily !== null && timeout - (Date.now() - db.val().cooldownDaily) > 0) {
        let time = ms(timeout - (Date.now() - db.val().cooldownDaily)); 
	message.channel.send(`> Você usou seu daily recentemente! Aguarde **${time.minutes}m ${time.seconds}s**`)
} else {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.set({
		dinheiro: db.val().dinheiro + money,
		cooldownDaily: Date.now()
	})
	message.channel.send(`Você acabou de usar seu daily e ganhou **R$${money}**! Parabéns!`)
}
})
	}
}