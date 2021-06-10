const Discord = require('discord.js')
const db = require('quick.db')
let firebase = require('firebase')
	var database = firebase.database()
module.exports = async (client, message) => {
database.ref(`Servidor/${message.guild.id}/Config/Prefix`)
		.once('value').then(async function(db) {
			let prefix = "ms!"
			if(db.val() != null) {
				prefix = db.val().prefix;
			}
	if (
		message.content.startsWith('<@747169426205573150>') ||
		message.content.startsWith('<@!747169426205573150>')
	) {
		if(message.author.bot) return;
		let embed = new Discord.MessageEmbed()

			.setTitle(`**_Central de Ajuda_**`)
			.setColor('ff0000')
			.setThumbnail(client.user.displayAvatarURL)
			.setDescription('**Seja muito bem vindo a minha central de ajuda.**')
			.addField('Prefixo:', `Meu Prefixo é ${prefix}`, false)
			.addField('Para Mais Informações:', `Utilize ${prefix}help`, false)
			.setTimestamp()
			.setFooter(
				`Olá ${message.author.username}`,
				message.author.displayAvatarURL({ format: 'png' })
			);

		message.channel.send(embed);
	}
		})
};