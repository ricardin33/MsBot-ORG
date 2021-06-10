const Discord = require('discord.js')
const ms = require('parse-ms')
const firebase = require('firebase');
const database = firebase.database()
module.exports = {
  config: {
    nome: 'levelconfig',                                                   
    aliases: ['lvlcfg', 'cfglevel'],
    descricao: 'Comando que serve para ver o perfil',    
		utilizacao: 'ms!daily',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		let onandfalse = database.ref(`Servidor/${message.guild.id}/Levels/Config/ON&FALSE`);
	let embed = new Discord.MessageEmbed()
	.setTimestamp()
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	.setColor('ff0000')
  .setTitle('Level Config')
	.setDescription(`${message.author}, Seja bem-vindo ao meu painel de configuração de níveis!`)
	.addField('<:seta:800749541677727756> Enviar Mensagem', "Reaja com 💬 Para configurar esta área!")
	.addField('<:seta:800749541677727756> Local De Mensagem', "Reaja Com 📍 Para configurar esta área!")
	.addField('<:seta:800749541677727756> Cargo Por Nível', "Reaja Com 📦 Para configurar esta área!")
	.setFooter("Ms Bot | Level System", message.author.avatarURL())
	await message.channel.send(embed).then(msg => {
	msg.react('💬')
	msg.react('📍')
	msg.react('📦')


	//Enviar Mensagem
	//---------------------------------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------   
				const EnviarMensagem = (reaction, user) => reaction.emoji.name === '💬' && user.id === message.author.id;
        const CargoNivel = (reaction, user) => reaction.emoji.name === '📦' && user.id === message.author.id;     
        const EnviarMensagemCol = msg.createReactionCollector(EnviarMensagem, { time: 19000});
        const CargoNivelCol = msg.createReactionCollector(CargoNivel, { time: 19000});
//---------------------------------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------   

			EnviarMensagemCol.on('collect', r2 => {
				msg.reactions.removeAll().catch(() => {
					message.channel.send('O Bot Não tem as Devidas permisssões adequadas para trabalhar corretamente! Porfavor altere-a!')
			msg.delete()
				});
				onandfalse.once('value').then(async function(db) {
					if(db.val().verification === false) {
						setable = true
						emoji = "🟢"
						verif = "Desativado"
						field = "Reaja com `🟢` " 
						parafala = "Ativar"
					} else {
						setable = false
						emoji = "🔴"
						verif = "Ativado"
						field = "Reaja com `🔴` "
						parafala = "Desativar"
					}
				let embedEnviarMsg = new Discord.MessageEmbed()
	.setTimestamp()
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	.setColor('ff0000')
  .setTitle('Level Config | Enviar Mensagem')
	.setDescription(`${message.author}, Seja bem-vindo ao meu painel de configuração de níveis!`)
	.addField('Status De Envio', `**${verif}**`)
	.addField(`Reaja Abaixo com \`${emoji}\` Para \`${parafala}!\` `, field)
	.addField(`Reaja Abaixo com \`👎\` Para \`Cancelar o Processo\` !`, "Reaja com `👎`")
	.setFooter("Ms Bot | Level System", message.author.avatarURL())
	msg.edit(embedEnviarMsg).then(msg2 => {
	msg2.react(emoji)
	msg2.react("👎")
//---------------------------------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------   
const Confirmacao = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
const ConfirmacaoCol = msg2.createReactionCollector(Confirmacao, { time: 19000});

const CancelarAccept = (reaction, user) => reaction.emoji.name === '👎' && user.id === message.author.id;
const confirm = msg2.createReactionCollector(CancelarAccept, { time: 19000});
//---------------------------------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------
			confirm.on('collect', r2 => {
						msg2.reactions.removeAll().catch(() => {
					message.channel.send('O Bot Não tem as Devidas permisssões adequadas para trabalhar corretamente! Porfavor altere-a!')
			msg2.delete()
				});
				let embedcanc = new Discord.MessageEmbed()
				.setTimestamp()
				.setTitle('Cancelamento')
				.addField('Cancelado!', "Você cancelou o precesso de configuração com sucesso! `caso você queira entrar novamente nas configurações por favor dê o mesmo comando!` ")
				.setColor('ff0000')
				.setFooter("Ms Bot | Level System, P.S Essa mensagem será excluida em breve!", message.author.avatarURL())
				msg2.edit(embedcanc).then(msg => {
					setTimeout(function(){
						msg2.delete()
					}, 8500)
				})
			})

	ConfirmacaoCol.on('collect', r2 => {
		msg2.reactions.removeAll().catch(() => {
					message.channel.send('O Bot Não tem as Devidas permisssões adequadas para trabalhar corretamente! Porfavor altere-a!')
			msg2.delete()
				});
				database.ref(`Servidor/${message.guild.id}/Levels/Config/ON&FALSE`)
		.set({
			verification: setable
					})
					if(setable === true) {
						mudanca = "Ativado"
					} else {
						mudanca = "Desativado"
					}

					let embedTrabalhando = new Discord.MessageEmbed()
	.setTimestamp()
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	.setColor('ff0000')
  .setTitle('Carregando... <a:carregar:753583530331602964>')
	.setDescription(`<a:carregar:753583530331602964> | Trabalhando em mudanças...`)
	.setFooter("Ms Bot | Level System", message.author.avatarURL())

							let embedEnviarMsgFinal = new Discord.MessageEmbed()
	.setTimestamp()
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	.setColor('ff0000')
  .setTitle('Level Config | Enviar Mensagem')
	.setDescription(`Modo De Enviar mensagem setado para **${mudanca}**\n Para Fazer a mudança contrária, utilize o mesmso comando!`)
	.setFooter("Ms Bot | Level System", message.author.avatarURL())
					msg2.edit(embedTrabalhando).then(msg3 => {
						setTimeout(function(){
							msg3.edit(embedEnviarMsgFinal) 
							 }, 3000)
					})

	})
						})
			})






	})

		//                                      COLETOR 2

        const LocalMensagem = (reaction, user) => reaction.emoji.name === '📍' && user.id === message.author.id;
				const LocalMensagemCol = msg.createReactionCollector(LocalMensagem, { time: 19000});

	LocalMensagemCol.on('collect', r2 => {
						onandfalse.once('value').then(async function(db) {
						if(db.val().verification === false) {
							let embedoff = new Discord.MessageEmbed()
							.setTitle('Erro')
							.setDescription('Antes para você Utilizar esta área do comando precisa ativar o Recebimento de Mensagen de Level, utilize este mesmo comando, assim alternando para a primeira opção para configurar esta área, após isso volte para cá! Estou no aguardo! :D')
							.setColor('ff0000')
							.setTimestamp()
							.setFooter("Ms Bot | Level System", message.author.avatarURL())
							message.channel.send(embedoff)
							msg.delete()
						} else {
							let embedcanal = new Discord.MessageEmbed()
							.setTitle('Canal')
							.addField('Canal:', "Por favo envie o canal no chat em menos de 20 segundos, modelo: #canal ou Id Do canal.")
							.addField('Cancelar:', `Para Cancelar o processo de configuração reaja com \`👎\` `)
							.setColor('ff0000')
							.setFooter("Ms Bot | Level System", message.author.avatarURL())
							.setTimestamp()
							msg.edit(embedcanal).then(msg2 => {

								let embedConf = new Discord.MessageEmbed()
								.setTitle('Cofirmação')
								

								const CanalCancel = (reaction, user) => reaction.emoji.name === '👎' && user.id === message.author.id;
								const CanalCancelCol = msg2.createReactionCollector(CancelarAccept, { time: 	19000});



							let colMessage = message.channel.createReactionCollector(x => x.author.id === message.author.id, {max:1});

							colMessage.on('collect', r2 => {
								let ch = r2.content;
								let canal = message.guild.channels.cache.get(ch);
								if(!canal) {
									msg2.delete()
								return message.channel.send('Por favor fornça um canal existente, tente novamente!')
								} else {
									let embedfinal = new Discord.MessageEmbed()
									.setTitle('Parabéns!')
									.setDescription(`Parabéns! Você selecionou o canal de level para ${canal}. Agora todas as mensagns de level up serão enviadas para lá! :D`)
									.setColor('ff0000')
									.setFooter("Ms Bot | Level System", message.author.avatarURL())						     
										msg2.edit(embedfinal).then(msg3 => {
					setTimeout(function(){
						msg3.delete()
					}, 8500)
				})
								}
							})
							})
						}
						})
	})
	// COl Final

	})
		}
}