const Discord = require('discord.js')
const eco = require('discord-economy')
const ms = require('parse-ms')
var firebase = require('firebase')
var database = firebase.database()
module.exports = {
  config: {
    nome: 'work',                                                   
    aliases: ['trabalhar'],
    descricao: 'Comando que serve para trabalhar!',    
		utilizacao: 'ms!work',   
    cooldown: 6
  },
  run: async (client, message, args) => {


		const nomes = ["Caixa", "Segurança", "Animador", "Arquiteto", "Design", "Fotógrafo", "Lutador", "Administrador Financeiro", "Marketer", "Pintor", "Neuro Cirurgião", "Policial", "Produtor Musical", "Mc", "Professor", "Geógrafo"];
	const trabalhos = nomes[Math.floor(Math.random() * nomes.length)];
	const money = Math.floor(Math.random() * 500);
	database.ref(`Usuário/${message.author.id}/Economia`)
.once('value').then(async function(db) {
	let timeout = 7200000;
	if(db.val() == null) {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.set({
		dinheiro: 0,
		banco: 0,
		cooldown: 0
	
	})
}
    
    if (db.val().cooldown !== null && timeout - (Date.now() - db.val().cooldown) > 0) {
        let time = ms(timeout - (Date.now() - db.val().cooldown));

        message.channel.send(`>  Você trabalhou recentemente! \n\nTente novamente em ** ${time.minutes}m ${time.seconds}s**`)
        } else {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.update({
		dinheiro: db.val().dinheiro + money,
		cooldown: Date.now()
	})
	message.channel.send(`<@${message.author.id}> Você trabalhou como \`${trabalhos}\` E ganhou :money_with_wings: ${money}
Você possui agora :money_with_wings: ${db.val().dinheiro + money}`)
				}
})











	}
}