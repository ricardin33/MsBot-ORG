const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
var firebase = require('firebase');
const canvacord = require("canvacord");
var database = firebase.database()
module.exports = {
  config: {
    nome: 'level',                                                   
    aliases: ['perfil', 'profile'],
    descricao: 'Comando que serve para ver o perfil',    
		utilizacao: 'ms!daily',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		let user = message.author;
if(message.mentions.users.first()) {
	user = message.mentions.users.first();
}
database.ref(`Servidor/${message.guild.id}/Levels/Users/${user.id}`)
.once('value').then(async function(db) {
if(user.bot) return;
	try{
		message.channel.startTyping()
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({size: 4096, format: "png"}))
    .setCurrentXP(db.val().xp)
		.setRank(1, "rank", false)
    .setRequiredXP(db.val().level*100)
    .setStatus("online")
		.setLevel(db.val().level, "Level", true)
		.setBackground("COLOR", "#ff0000")
    .setProgressBar("#ff0000", "COLOR")
    .setUsername(user.username)
		.setOverlay('BLACK', 0.4, true)
    .setDiscriminator(user.discriminator, "#00ffff");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });
		message.channel.stopTyping()
	} catch (err) {
		console.log(err)
	}

})
	}
}