const Discord = require('discord.js')
const db = require('quick.db')
const { stripIndents } = require("common-tags");
const instagram = require("instagram-api-api")
module.exports = {
  config: {
    nome: 'instagram',                                            
    aliases: ['insta', 'instaperf',],
    descricao: 'Comando que inspeciona perfil do instagram!',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		const userInstagram = require("user-instagram");

// Gets informations about a user
userInstagram('srsider') // Same as getUserData()
  .then(console.log)
  .catch(console.error);
        const name = args.join(" ");

        if (!name) return message.channel.send("Por favor escreva o nome da conta do instagram!")
				if(!instagram.user(name)) {
					message.channel.send('Infelizmente não encontrei o perfil!')
				} else {
				let account = instagram.user(name).then(account => {
						let embed2 = new Discord.MessageEmbed()
						.setColor('ff0000')
        .setTitle('<:Instagram:810242378484154430> Instagram')
        .setThumbnail(account.profile_pic_url_hd)
				.addField('❯ Nome: ', `\`\`${account.username}\`\``, true)
				.addField('❯ Nome Completo: ', `\`\`${account.full_name ? account.full_name : "Indefinido"}\`\``, true)
				.addField('❯ Postes: ', `\`\`${account.edge_owner_to_timeline_media.count}\`\``, true)
				.addField('❯ Seguidores: ', `\`\`${account.edge_followed_by.count}\`\``, true)
				.addField('❯ ID: ', `\`\`${account.id}\`\``, true)
				.addField('❯ Seguindo: ', `\`\`${account.edge_follow.count}\`\``, true)
				.addField('❯ Conta Privada ? ', `\`\`${account.is_private ? "Sim" : "Não"}\`\``, true)
				.addField('❯ Conta Verificada ? ', `\`\`${account.is_verified ? "Sim" : "Não"}\`\``, true)
				.addField('❯ Entrou Recentemente ? ', `\`\`${account.is_joined_recently ? "Sim" : "Não"}\`\``, true)
				.addField('❯ Link Externo: ', `\`\`${account.external_url ?account.external_url : "Não Possui link Externo!"}\`\``, true)
				.addField('❯ É uma conta Business ?', `\`\`${account.is_business_account ? "Sim" : "Não"}\`\``, true)
				.addField('❯ Biografia: ', `\`\`${account.biography ? account.biography : "Sem Biografia"}\`\``, false)
				.setTimestamp()
				.setFooter("Ms Bot | Instagram")
        message.channel.send(embed2).catch(error => {
			return message.channel.send('Infelizmente não encontrei o perfil!'); 
			})
      }).catch(error => {
		message.channel.send('Infelizmente não encontrei o perfil!'); 
			console.log(error)
			})
	}
	}
	}