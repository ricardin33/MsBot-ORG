const Discord = require('discord.js')
const Client = require('fortnite');
const fort = require('fortnitetracker-7days-stats');
const moment = require('moment');
moment.locale('pt-br');
const fortnite = new Client('5ceb1559-30d3-4c05-a7e2-3e9ce37ac719');
module.exports = {
  config: {
    nome: 'fortnite',                                                   
    aliases: ['fortinite', 'fort'],
    descricao: 'Comando para ver o convite de servidor do bot!',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		let jogador = args.slice(1).join(' ')
		let plat = args[0];
		if(!plat) {
			return message.channel.send('Você não escreveu a plataforma! (xbox, psl, pc)')
		}
		if(plat !== "xbl" && plat !== "psn" && plat !== "pc"){ 
			return message.channel.send('Você especificou a platafomar de modo errado! tente colcoar (pc = Computador, psl = Play Station, xbl = Xbox')
			
		}
		if(!jogador) {
			return message.channel.send('Você não especificou o jogador')
		} else {
							try {
			fort.getStats(jogador, plat, (err, result) => {
				let tempo = result.minutesPlayed;
				if(tempo > 59 || tempo < 121) {
					tempo = "Mais de Uma Hora de Jogo"
				}
			if(tempo > 122 || tempo < 181) {
					tempo = "Mais de Duas Hora de Jogo"
				}
								if(tempo > 182 || tempo < 241) {
					tempo = "Mais de Tres Hora de Jogo"
				}
								if(tempo > 241) {
					tempo = "Ele Jogou Bastante tempo! mais de 4 Horas UAU!"
				}
				    var url = "https://fortnitetracker.com/profile/pc/"
                                + encodeURIComponent(jogador);
				        if(err){
            message.channel.send("Não consegui encontrar o jogador!");
            return;
        }
				fortnite.user(jogador, plat).then(user => {
					    message.channel.startTyping();
					let embed = new Discord.MessageEmbed()
					.setTitle('<:vbucks:810535706912882779> Fortnite')
					.setColor('ff0000')	
					.setTimestamp()
					.setDescription(`❯ Informações de **${user.username}**: `)
					.setThumbnail(result.skinUrl)
					.addField('Informações Simples: ', `❯ Username: \`\`${user.username}\`\`\n❯ ID: \n\`\`${user.id}\`\`\n ❯ Perfil: \n[Clique Aqui](${user.url})\n ❯ Plataforma: \n\`\`${result.platform}\`\`\n Tempo Jogado: \n\`\`${tempo}\`\` `, true)
					.addField('Modo Solo: ', `❯ Pontos: \n\`\`${user.stats.solo.score}\`\`\n❯ KDR: \n\`\`${user.stats.solo.kd}\`\`\n❯ Partidas: \n\`\`${user.stats.solo.matches}\`\`\n❯ Kills: \n\`\`${user.stats.solo.kills}\`\`\n❯ Vitórias: \n\`\`${user.stats.solo.wins}\`\``, true)
					.addField('Modo Dupla: ', `❯ Pontos: \n\`\`${user.stats.duo.score}\`\`\n❯ KDR: \n\`\`${user.stats.duo.kd}\`\`\n❯ Partidas: \n\`\`${user.stats.duo.matches}\`\`\n❯ Kills: \n\`\`${user.stats.duo.kills}\`\`\n❯ Vitórias: \n\`\`${user.stats.duo.wins}\`\``, true)
					.addField('Modo Trio: ', `❯ Pontos: \n\`\`${user.stats.undefined.score}\`\`\n❯ KDR: \n\`\`${user.stats.undefined.kd}\`\`\n❯ Partidas: \n\`\`${user.stats.undefined.matches}\`\`\n❯ Kills: \n\`\`${user.stats.undefined.kills}\`\`\n❯ Vitórias: \n\`\`${user.stats.undefined.wins}\`\``, true)
					.addField('Modo Squad: ', `❯ Pontos: \n\`\`${user.stats.squad.score}\`\`\n❯ KDR: \n\`\`${user.stats.squad.kd}\`\`\n❯ Partidas: \n\`\`${user.stats.squad.matches}\`\`\n❯ Kills: \n\`\`${user.stats.squad.kills}\`\`\n❯ Vitórias: \n\`\`${user.stats.squad.wins}\`\``, true)
					.setFooter('Ms Bot | Fortnite')
					message.channel.send(embed)
					message.channel.stopTyping();
		//\`\`	
					
		}).catch(error => {
															message.channel.stopTyping();
								return message.channel.send('Não Pude Encontrar este Jogador!')
								console.log(error)
		})
		
		})
			
							} catch (err) {
												message.channel.stopTyping();
								return message.channel.send('Não Pude Encontrar este Jogador!')
								console.log(err)
							}
		}

		
		}
}