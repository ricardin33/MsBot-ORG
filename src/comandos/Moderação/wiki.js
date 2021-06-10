Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment');
moment.locale('pt-br');
module.exports = {
  config: {
    nome: 'wiki',                                                   
    aliases: ['enviarwiki', 'sendwiki'],
    descricao: 'Comando que mostra informações de um usuário do servidor!',    
		utilizacao: 'ms!userinfo @user',                    
    cooldown: 0
  },
  run: async (client, message, args) => {
		if(message.guild.id !== '743510402956132413' || message.channel.id !== '804728275871334461'){
			message.channel.send('Você está usando esse comando no lugar errado!')
		} else {
		message.delete();
		const embedescolha = new Discord.MessageEmbed()
		.setTitle('Wiki')
		.setDescription('Escolha sua linguagem :')
		.addField('<:dbd:757952568830984322> | Wiki DBD', '**Reaja com <:dbd:757952568830984322> para escolher a inguagem DBD / DBD.js.**', false)
		.addField('<:js2:753583754370482216> | Wiki Js','**Reaja com <:js2:753583754370482216> para escolher a linguagem JavaScript.**', false)
		.addField('<:py:804730152377909278> | Wiki Python','**Reaja com <:py:804730152377909278> para escolher a linguagem Python.**', false)
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
	message.channel.send(embedescolha).then(msg => {
		msg.react('757952568830984322')
		msg.react('753583754370482216')
		msg.react('804730152377909278')
		const wikidbd = (reaction, user) => reaction.emoji.name === 'dbd' && user.id === message.author.id; 
		const wikijs = (reaction, user) => reaction.emoji.name === 'js2' && user.id === message.author.id;
		const wikipy = (reaction, user) => reaction.emoji.name === 'py' && user.id === message.author.id;

		const coletordbd = msg.createReactionCollector(wikidbd, {time: null});
		const coletorjs = msg.createReactionCollector(wikijs, {time: null})
		const coletorpy = msg.createReactionCollector(wikipy, {time: null})

	/* 
								COLETOR DBD
	*/

	coletordbd.on('collect', r2 => {
		msg.reactions.removeAll();
		const dbdembed = new Discord.MessageEmbed()
		.setTitle('Wiki')
		.setDescription('Escreva sua wiki:')
		.addField('Instrução: ', 'retire os \"\`\" antes do codigo da mensagem para não dar erro! ', false)
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		msg.edit(dbdembed).then(msg => {
			let coletordbdmsg = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1});
			coletordbdmsg.on('collect', mensagem => {
				
				let conteudo = mensagem.content;
				mensagem.delete();
								if(conteudo < 7) {
					return message.channel.send('Escreva uma wiki maior!').then(msg => {
			setTimeout(() => {
			msg.delete()
			}, 5000)
		})
								}
				if(conteudo.startsWith("```") === true) {
					return message.channel.send('Você deve escrever uma wiki sem as aspas no começo!')
				}
						const dbdembedfinal = new Discord.MessageEmbed()
		.setTitle('Nova Wiki!')
		.addField('Informações: ', `User: ${message.author.tag}`, false)
		.setColor('ff0000')
		.setDescription(`Wiki: \`\`\`${conteudo}\`\`\``)
		.setFooter('Wiki | Ms Bot™')
		let canaldbd = message.guild.channels.cache.find(r => r.id === "789528954331332648");
		canaldbd.send(dbdembedfinal).then(msg => {
			msg.react('752280621170294894')
			msg.react('754376981482831993')
		})
						let cargo = message.guild.roles.cache.find(role => role.id === "805099365353259028");

			message.member.roles.add(cargo.id).catch(console.log('ja tem cargo fi'));
		
	const agradecimento = new Discord.MessageEmbed()
		.setTitle('Obrigado!')
		.setDescription('Agradeço por enviar uma wiki para o nosso server!')
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		msg.edit(agradecimento).then(msg => {
			setTimeout(() => {
			msg.delete()
			}, 5000)
		})
		
			})
		})
	})

	/* 
								COLETOR JS
	*/
		coletorjs.on('collect', r2 => {
		msg.reactions.removeAll();
		const jsembed = new Discord.MessageEmbed()
		.setTitle('Wiki')
		.setDescription('Escreva sua wiki:')
		.addField('Instrução: ', 'retire os \"\`\" antes do codigo da mensagem para não dar erro! ', false)
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		msg.edit(jsembed).then(msg => {
			let coletorjsmsg = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1});
			coletorjsmsg.on('collect', mensagem => {
				
				let conteudo = mensagem.content;
				mensagem.delete();
								if(conteudo < 7) {
					return message.channel.send('Escreva uma wiki maior!').then(msg => {
			setTimeout(() => {
			msg.delete()
			}, 5000)
		})
								}
				if(conteudo.startsWith("```") === true) {
					return message.channel.send('Você deve escrever uma wiki sem as aspas no começo!')
				}
						const jsembedfinal = new Discord.MessageEmbed()
		.setTitle('Nova Wiki!')
		.addField('Informações: ', `User: ${message.author.tag}`, false)
		.setDescription(`Wiki: \`\`\`${conteudo}\`\`\``)
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		let canaljs = message.guild.channels.cache.find(r => r.id === "789528927378997258");
		canaljs.send(jsembedfinal).then(msg => {
			msg.react('752280621170294894')
			msg.react('754376981482831993')
		})
						let cargo = message.guild.roles.cache.find(role => role.id === "805099365353259028");
		if(message.member.roles.cache.has(cargo.id)) {
			console.log('ja tem cargo fi')
		}
			message.member.roles.add(cargo.id).catch(console.error);
	const agradecimento = new Discord.MessageEmbed()
		.setTitle('Obrigado!')
		.setDescription('Agradeço por enviar uma wiki para o nosso server!')
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		msg.edit(agradecimento).then(msg => {
			setTimeout(() => {
			msg.delete()
			}, 5000)
		})
		
			})
		})
	})


		/* 
								COLETOR Python
	*/
		coletorpy.on('collect', r2 => {
		msg.reactions.removeAll();
		const pyembed = new Discord.MessageEmbed()
		.setTitle('Wiki')
		.setDescription('Escreva sua wiki:')
		.addField('Instrução: ', 'retire os \"\`\" antes do codigo da mensagem para não dar erro! ', false)
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		msg.edit(pyembed).then(msg => {
			let coletorpymsg = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max:1});
			coletorpymsg.on('collect', mensagem => {
				
				let conteudo = mensagem.content;
				mensagem.delete();
				if(conteudo < 7) {
					return message.channel.send('Escreva uma wiki maior!').then(msg => {
			setTimeout(() => {
			msg.delete()
			}, 5000)
		})
				}
				if(conteudo.startsWith("```") === true) {
					return message.channel.send('Você deve escrever uma wiki sem as aspas no começo!')
				}
						const pyembedfinal = new Discord.MessageEmbed()
		.setTitle('Nova Wiki!')
		.addField('Informações: ', `User: ${message.author.tag}`, false)
		.setDescription(`Wiki: \`\`\`${conteudo}\`\`\``)
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		let canalpy = message.guild.channels.cache.get(r => r.id === "789528974661124146");
		canalpy.send(pyembedfinal).then(msg => {
			msg.react('752280621170294894')
			msg.react('754376981482831993')
		})
		let cargo = message.guild.roles.cache.find(role => role.id === "805099365353259028");
		if(message.member.roles.cache.has(cargo.id)) {
			return;
		} else {
			message.member.roles.add(cargo.id).catch(console.error);
		}
		const agradecimento = new Discord.MessageEmbed()
		.setTitle('Obrigado!')
		.setDescription('Agradeço por enviar uma wiki para o nosso server!')
		.setColor('ff0000')
		.setFooter('Wiki | Ms Bot™')
		msg.edit(agradecimento).then(msg => {
			setTimeout(() => {
			msg.delete()
			}, 5000)
		})
		
			})
		})
	})


	})
	}
	}
}