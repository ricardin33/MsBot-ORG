const Discord = require("discord.js")
const roblox = require("noblox.js")
const moment = require('moment')
moment.locale('pt-br')
module.exports = {
  config: {
    nome: 'roblox',                                                   
    aliases: ['robloxfind', "robloxperf", "perfroblox"],
    descricao: 'Comando que serve para ver o prefixo do bot!',    
		utilizacao: 'ms!prefix',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
		let player = args.join(' ');
		if(!player) {
			return message.channel.semd('Você não escreveu o nome do usuário!')
		}
		roblox.getIdFromUsername(player).then(id => { 
			if(id) {

			roblox.getPlayerInfo(parseInt(id)).then(user => {
				let nome = user.username;
				let bio = user.status ? user.status : "Este usuário não possui Biografia!";
				let entroem = moment(user.joinDate).format('LLLL')
				let tempoCriado = moment(user.age).format('L')
				let amigos = user.friendCount;
				let seguidores = user.followerCount ? user.followerCount : "Não é seguido por ninguém!";
				let seguindo = user.followingCount ? user.followingCount : "Não segue ninguém!";
				let banido = user.isBanned ? "Sim" : "Não";

				let embed = new Discord.MessageEmbed()
				.setTitle('<:v_roblox:810561821776937050> Roblox')
				.setColor('ff0000')
				.setDescription(`Informações do Usuário **${nome}**: `)
				.addField('Nome: ', `\`\`${nome}\`\``)
				.addField('Amigos: ', `\`\`${amigos}\`\``)
				.addField("Seguidores: ", `\`\`${seguidores}\`\``)
				.addField('Seguindo: ', `\`\`${seguindo}\`\``)
				.addField("Banido Do Roblox?", `\`\`${banido}\`\``)
				.addField('Biografia:', `\`\`${bio}\`\``)
				.setTimestamp()
				.setFooter('Ms Bot | Roblox')
					message.channel.send(embed)
			}) 
			} else {
			return message.channel.send('Não foi possivel encontrar este usuário!')
			}
		})




	}
}