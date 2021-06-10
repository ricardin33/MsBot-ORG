const Discord = require("discord.js");
const request = require("node-superfetch");
const {stripIndents} = require("common-tags");
const twitter = require("twitter-api.js");
const moment = require('moment');
moment.locale('pt-br');
module.exports = {
  config: {
    nome: 'twiiter',                                                aliases: ['twitter', 'twiitter', 'twiter'],
    descricao: 'Comando que serve para ver a conta de uma pessoa no twitter',
		    cooldown: 6
  },
  run: async (client, message, args) => {
    let user = args.join(' ')
    if(!args[0]) return message.channel.send("Escreva seu nome do twitter")
    
    try {
      const body = await twitter.users(user)
	let local_profile = body.location;
		if(body.profile_location === null || undefined) {
			local_profile = "Não Definido"
		} 
	let descrip = body.description;
	if(descrip === null || undefined) {
		descrip = "Sem Descrição"
	}
	let ling = body.lang;
	if (ling === null || undefined) {
		ling = "Não Definido"
	}
	let embed = new Discord.MessageEmbed()
	.setTitle("<:Twitter:810477428513177631> Twitter")
	.setDescription("Informações da Conta: ")
	.setTimestamp()
	.setThumbnail(body.profile_image_url_https.replace('_normal', ''))
	.setImage(body.profile_banner_url)
	.addField('❯ Nome: ', `\`\`${body.screen_name}\`\``, true)
	.addField('❯ ID Da Conta: ', `\`\`${body.id}\`\``, true)
	.addField('❯ Conta Protegida?', `\`\`${body.protected ? "Sim" : "Não"}\`\``, true)
	.addField('❯ Conta Verificada?', `\`\`${body.verified ? "Sim" : "Não"}\`\``, true)
	.addField('❯ Localização:', `\`\`${local_profile}\`\``, true)
	.addField("❯ Publicações: ", `\`\`${body.statuses_count}\`\``, true)
	.addField('❯ Seguidores : ', `\`\`${body.followers_count}\`\``, true)
	.addField('❯ Seguindo: ', `\`\`${body.friends_count}\`\``, true)
	.addField('❯ Favoritados: ', `\`\`${body.favourites_count}\`\``, true)
	.addField('❯ Conta Criada Em: ', `\`\`${moment(body.created_at).format('LLL')}\`\``, true)
	.addField('❯ Linguagem: ', `\`\`${ling}\`\``, true)
		.addField("❯ Descrição: ", `\`\`${descrip}\`\``, false)
	.setFooter("Ms Bot | Twitter")
	.setColor('ff0000')
      message.channel.send(embed)
    } catch (e) {
      if(e.status === 403) return message.channel.send("> Esta conta esta em modo privado ou foi excluida!")
      else if(e.status === 404) return message.channel.send("Conta não encontrada")
      else return message.channel.send(`Erro desconhecido: \`${e.message}\``)
    }
	}
}
