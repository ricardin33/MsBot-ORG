const Discord = require('discord.js');
const moment = require('moment')
moment.locale('pt-br')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'addbot',                                                   
    aliases: ['adicionarbot'],
    descricao: 'Comando que executa uma ação do adm!',  
		utilizacao: 'ms!eval (comando)',   
    cooldown: 6
  },
  run: async (client, message, args) => {
	/* ////////////////////////////////////////////////////// */ 
	/*                        EMBEDS                          */
	/* ////////////////////////////////////////////////////// */ 
let embeddpsdopassoapasso = new Discord.MessageEmbed()
  .setTitle("AddBot")
  .setDescription(`Eu mandei seu bot para a administração, Espere no máximo 1 Hora!`)
  .setColor("ff0000")
  .setFooter(`Obrigado por enviar o seu bot para verificação ${message.author.username}`, message.author.displayAvatarURL({format: "png"}))
	let embederro = new Discord.MessageEmbed()
	.setTitle('**ERRO**')
	.setDescription("> Vish... Seu DM (privado) Está fechado sendo assim não tenho permissão de lhe enviar o fomulário para adicionar o bot no servidor! Abra a sua DM e tente novamente!")
	.setColor('ff0000')
	.setTimestamp()
	.setFooter(`comando executado por ${message.author.username}`)


const verificacao = new Discord.MessageEmbed()
.setTitle('**AddBot**')
.setDescription(`Eu mandei A verificacão em sua dm! Preencha-a Corretamente.`)
.setFooter(`Obrigado Pela Preferência de nosso Servidor!`, message.author.displayAvatarURL({format: "png"}))
.setColor("ff0000")

let embed14 = new Discord.MessageEmbed()
.setTitle("Informe O **Nome** do seu bot")
.setDescription("> Nome Do Bot", "Coloque o nome verdadeiro!")
.setColor("ff0000")
.setFooter("Fase 1/4 Da Verificacão", message.author.displayAvatarURL({format: "png"}))

let embed24 = new Discord.MessageEmbed()
.setTitle("Informo O **ID** Do Seu Bot")
.setDescription("> ID Do Seu Bot", "Forneça o ID correto caso contrário não será possivel adiciona-lo!")
.setColor("ff0000")
.setFooter("Fase 2/4 Da Verificacão !", message.author.displayAvatarURL({format: "png"}))
 
 let embed34 = new Discord.MessageEmbed()
 .setTitle("Informe o **Prefixo** Do seu Bot")
 .setDescription("> Prefixo", "Informe o Prefixo Correto Caso contrário ele não poderá ser adicionado ao servidor!")
 .setFooter("Fase 3/4 Da Verificacão!", message.author.displayAvatarURL({format: "png"}))
 .setColor('ff0000')

 let embed44 = new Discord.MessageEmbed()
 .setTitle('Informe a **linguagem**')
 .setDescription("> Linguagem", "Informe a sua Linguagem! \n> Opções de linguagens: DBD (Bot Design For Discord) / Java Script (Djs)")
 .setFooter("Fase 4/4 Da Verificacão!", message.author.displayAvatarURL({format: "png"}))
 .setColor('ff0000')
 
	message.delete()
message.channel.send(verificacao).catch(() => {
	message.channel.send(embederro).then(msg => {
		message.delete()
		setTimeout(() => {
    msg.delete(embederro);
  }, 5000);
	})})
	/* ////////////////////////////////////////////////////// */ 
	/*                          NOME                          */
	/* ////////////////////////////////////////////////////// */
message.author.send(embed14).then(a => {
	let cp1 = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
    .on('collect', c => {
  const nome = c.content;
			db.set(`BotName_${message.author.id}`, nome)
				/* ////////////////////////////////////////////////////// */ 
	/*                          ID DO BOT                          */
	/* ////////////////////////////////////////////////////// */
message.author.send(embed24).then(a => {
  let cp2 = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
    .on('collect', c => {
      const id = c.content;
			db.set(`BotID_${message.author.id}`, id)
			let botuser = client.users.cache.get(id)
			 if (!botuser) {
				 	      return message.author.send("> Coloque um ID Correto! Dê o comando novamente!");
								  cp2.stop()
			 }
			if(id.length < 18) {
	      return message.author.send("> Coloque um ID Correto! Dê o comando novamente!");
        cp2.stop()
      }
			if(id === message.author.id) {
				return message.author.send("> Você colocou o seu id ao invés de um bot! Dê o comando novamente!")
			}
			if(botuser.bot === false) {
				return message.author.send('Você colocou um id que não pertence a um bot!')
			}
				/* ////////////////////////////////////////////////////// */ 
	/*                          PREFIXO DO BOT                          */
	/* ////////////////////////////////////////////////////// */
message.author.send(embed34).then(a => {
       let cp3 = message.author.dmChannel.createMessageCollector(x => x.author.id === message.author.id, {max:1})
       .on('collect', c => {
          const prefixo = c.content;
					db.set(`BotPrefix_${message.author.id}`, prefixo)
message.author.send(embed44).then(msg => {            
			 			msg.react('753583754370482216').then(r => {
						  }).catch (console.error);
            msg.react('757952568830984322').then(r => {
						}).catch (console.error);
						msg.react('804730152377909278').then(r => {
						}).catch (console.error);
							/* ////////////////////////////////////////////////////// */ 
	/*                          CRIANDO COLETORES                          */
	/* ////////////////////////////////////////////////////// */
			  const dbdf = (reaction, user) => reaction.emoji.name === 'dbd' && user.id === message.author.id;
        const jsf = (reaction, user) => reaction.emoji.name === 'js2' && user.id === message.author.id;
				const pythonf = (reaction, user) => reaction.emoji.name === 'python' && user.id === message.author.id;
				
        const dbd = msg.createReactionCollector(dbdf, { time: null});
        const js = msg.createReactionCollector(jsf, { time: null});
        const python = msg.createReactionCollector(pythonf, { time: null});
				const linguagem = null;
					/* ////////////////////////////////////////////////////// */ 
	/*                          INICIANDO COLETORES                          */
	/* ////////////////////////////////////////////////////// */


		/* ////////////////////////////////////////////////////// */ 
	/*                          DBD COLLECT                          */
	/* ////////////////////////////////////////////////////// */
		 dbd.on("collect", r2 => { 
			 const linguagem = "DDB"
			 	db.set(`BotLang_${message.author.id}`, "756187391815057478")
				db.set(`AuthorLang_${message.author.id}`, "756893507821633616")
			message.author.send(embeddpsdopassoapasso)
				let logbot = new Discord.MessageEmbed()
	.setTitle(`**<:tempo:755834161750867998> Novo Bot <:tempo:755834161750867998> **`)
	.addField("> Nome", `**${nome}**`)
	.addField("> ID", `**${db}**`)
	.addField("> Prefix", `**${prefixo}**`)
	.addField("> Linguagem", `**${linguagem}**`)
	.addField("> Convite", `[Convite](https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=1312160833)`)
	.addField("> Dono", `**${message.author}**`)
	.setColor("ff0000")
 
message.guild.channels.cache.get('789208235478482964').send(logbot)
				})
		 
		 	/* ////////////////////////////////////////////////////// */ 
	/*                          JS COLLECT                          */
	/* ////////////////////////////////////////////////////// */
		 
		 js.on("collect", r2 => {
	db.set(`BotLang_${message.author.id}`, "756160295553990807")
	db.set(`AuthorLang_${message.author.id}`, "756893312077529179")
	const linguagem = "Java Script"
	message.author.send(embeddpsdopassoapasso)
					let logbot = new Discord.MessageEmbed()
	.setTitle(`**<:tempo:755834161750867998> Novo Bot <:tempo:755834161750867998> **`)
	.addField("> Nome", `**${nome}**`)
	.addField("> ID", `**${id}**`)
	.addField("> Prefix", `**${prefixo}**`)
	.addField("> Linguagem", `**${linguagem}**`)
	.addField("> Convite", `[Convite](https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=1312160833)`)
	.addField("> Dono", `**${message.author}**`)
	.setColor("ff0000")
 
message.guild.channels.cache.get('789208235478482964').send(logbot)
		})

			/* ////////////////////////////////////////////////////// */ 
	/*                          PYTHON COLLECT                          */
	/* ////////////////////////////////////////////////////// */
			python.on("collect", r2 => {
		db.set(`BotLang_${message.author.id}`, "765032554981228584")
		db.set(`AuthorLang_${message.author.id}`, "765161950006214657")
		const linguagem = "Python"
						message.author.send(embeddpsdopassoapasso)
		const logbot = new Discord.MessageEmbed()
	.setTitle(`**<:tempo:755834161750867998> Novo Bot <:tempo:755834161750867998> **`)
	.addField("> Nome", `**${nome}**`)
	.addField("> ID", `**${db}**`)
	.addField("> Prefix", `**${prefixo}**`)
	.addField("> Linguagem", `**${linguagem}**`)
	.addField("> Convite", `[Convite](https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=1312160833)`)
	.addField("> Dono", `**${message.author}**`)
	.setColor("ff0000")

	//---------------------------------------------------------------------------------
message.guild.channels.cache.get('789208235478482964').send(logbot)
	})
message.guild.channels.cache.get('789181693478436894').send(`> <:tempo:755834161750867998>  ${message.author} Mandou o bot \`${nome}\` para Verificacão`)		 
		 
		 })
		 
		 })
})
			 })
					})
			 })
		 })
	




	/* ////////////////////////////////////////////////////// */ 
	/*                     FUNCTION                           */
	/* ////////////////////////////////////////////////////// */ 

    function embedbuilder(client, message, title, description){
        let embed = new Discord.MessageEmbed()
        .setColor("ff0000")
				.setTitle(title)
				.setTimestamp()
				.setDescription(description)
        .setFooter(`${client.user.username} | Music System`, client.user.displayAvatarURL())
    }


	}
}