const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'help',                                                   
    aliases: ['ajuda', 'comandos',],
    descricao: 'Comando que lista todos os comandos do bot!',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		    let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
let msg = args.join(" ")


     const embed = new Discord.MessageEmbed()
        .setTitle(`**_Central de Ajuda_**`)
        .setColor("ff0000")
				.setThumbnail(client.user.displayAvatarURL())
        .setDescription('**<:coroa:752280702111711313> Seja muito bem vindo a minha central de ajuda**\n\n**<:1lugar:753658722886352948> | Links:**\n\n<a:discord:754783223191437342> | **[Me Adicione](https://discord.com/oauth2/authorize?client_id=747169426205573150&scope=bot&permissions=8)**\n\n<a:sorteio:753576763241529414> | **[Vote em Mim](https://zuraaa.com/bots/747169426205573150/votar)**\n\n**Modalidades:**\n\n**<:0_:800749437370105857> | Moderação\n<:1_:800749463953342464> | Utilidades\n<:2_:800749483695800350> | Entreterimento\n<:3_:800749507033694268> | Economia**')  
					.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))    
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('800749437370105857').then(r => { // mod
            msg.react('800749463953342464').then(r => { // uteis
            msg.react('800749483695800350').then(r => { // Diversão
            msg.react('800749507033694268').then(r => { // Sobre o Bot
            msg.react('800749541677727756').then(r => { // inicio
          })
        })
      })
    }) 
  })
  //-------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- 
        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '0_' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '1_' && user.id === message.author.id;
        const EntreterimentoFilter = (reaction, user) => reaction.emoji.name === '2_' && user.id === message.author.id;
        const SobreFilter = (reaction, user) => reaction.emoji.name === '3_' && user.id === message.author.id;
				const BackFilter = (reaction, user) => reaction.emoji.name === 'seta' && user.id === message.author.id;
//---------------------------------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------         
        const Utilidades = msg.createReactionCollector(UtilidadesFilter, { time: null});
        const Moderação = msg.createReactionCollector(ModeraçãoFilter, { time: null});
        const Sobre = msg.createReactionCollector(SobreFilter, { time: null});
        const Back = msg.createReactionCollector(BackFilter, { time: null});
        const Entreterimento = msg.createReactionCollector(EntreterimentoFilter, { time: null});
//-------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- 
        Utilidades.on("collect", r2 => {
          r2.users.remove(message.author.id)
            const embed = new Discord.MessageEmbed()
							.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
                .setTitle("💫 ÚTEIS")
                .setColor(`ff0000`)
                .addField(`**<:seta:800749541677727756>  ${prefix}clima**`, `Veja o clima de alguma cidade`)
                .addField(`**<:seta:800749541677727756>  ${prefix}lembrete** **(Em Desenvolvimento)**\``, `Peça ajuda ao bot para lembrar você de algo`)
                .addField(`**<:seta:800749541677727756>  ${prefix}userinfo**`, `Confira algumas informações de um membro`)
                .addField(`**<:seta:800749541677727756>  ${prefix}sugestão**`, `Envie uma sugestão`)
                .addField(`**<:seta:800749541677727756>  ${prefix}serverinfo**`, `Veja as informações do servidor`)
                .addField(`**<:seta:800749541677727756>  ${prefix}convite**`, `Pegue meu convite Para me adicionar em outros servidores`)
                .addField(`**<:seta:800749541677727756>  ${prefix}servericon**`, `Veja e faça o download da imagem do servidor!`)     
                .addField(`**<:seta:800749541677727756>  ${prefix}avatar**`, `Veja e faça o download de um avatar de algum usuário!`)           

            msg.edit(embed);
        })
//-------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------  
        Moderação.on('collect', r2 => {
                    r2.users.remove(message.author.id)
            const embed = new Discord.MessageEmbed()
							.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
                .setTitle("👮 MODERAÇÃO")
                .addField(`**<:seta:800749541677727756>  ${prefix}ban**`, `Aplique um banimento em um membro`)
                .addField(`**<:seta:800749541677727756>  ${prefix}clear**`, `Limpe indesejadas mensagens em um canal`)
                .addField(`**<:seta:800749541677727756>  ${prefix}kick**`, `Expulse membros fora da lei`)
                .addField(`**<:seta:800749541677727756>  ${prefix}mute**`, `Mute o usuário que fala besteira em seu servidor!`)
                .addField(`**<:seta:800749541677727756>  ${prefix}unmute**`, `Utilize este comando se você quer que o usuário abra a boca!`)
                .addField(`**<:seta:800749541677727756>  ${prefix}warn**`, `Avise um membro que não se comporta!`)
                .addField(`**<:seta:800749541677727756>  ${prefix}lock**`, "Para bloquear um chat")
                .addField(`**<:seta:800749541677727756>  ${prefix}unlock**`, "Desbloquear um chat")
								.addField(`**<:seta:800749541677727756>  ${prefix}logs #canal**`, "Serve para selecionar o chat em que irá mandar os logs! mas você pode usar off apos o comando para desativar!")
                .addField(`**<:seta:800749541677727756>  ${prefix}ping**`, "Saiba o ping Do Bot")
                .addField(`**<:seta:800749541677727756>  ${prefix}welcomech #canal**`, "Serve para Setar um canal de bem-vindo, para automaticamente quando a pessoa entrar receber uma mensagem no determinado canal")
                .addField(`**<:seta:800749541677727756>  ${prefix}leavech #canal**`, "Serve para Setar um canal de saída, para automaticamente quando a pessoa sair receber uma mensagem no determinado canal")                
                .setColor("ff0000")
            msg.edit(embed);
        })
//-------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- 
        Entreterimento.on('collect', r2 => {
                    r2.users.remove(message.author.id)
            const embed = new Discord.MessageEmbed() 
							.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
                .setTitle("🎊 DIVERSÃO")
                .addField(`**<:seta:800749541677727756> ${prefix}ship**`, `Shipe dois usuários!`)
                .addField(`**<:seta:800749541677727756> ${prefix}beijar**`, `Beije um usuário que você tenha bastatante afeto!`)
                .addField(`**<:seta:800749541677727756> ${prefix}abraçar**`, `Você que está com saudades de seu amigo(a), abraçe-o com este comando!`)
                .addField(`**<:seta:800749541677727756>  ${prefix}dançar**`, `Dançe com algum usuário!`)
                .addField(`**<:seta:800749541677727756>  ${prefix}8ball**`, `Pergunte ao bot oque ele acha da sua pergunta!`)
                .setColor("ff0000")
                .addField(`**<:seta:800749541677727756>  ${prefix}atacar @membro**`, `Ataque uma pessoa!`)
                .addField(`**<:seta:800749541677727756>  ${prefix}corona**`, "Proteja-se contra o corona vírus (Covid-19)")
						msg.edit(embed);
        })
//-------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- --------------------------  
        Sobre.on('collect', r2 => {
                    r2.users.remove(message.author.id)
            const embed = new Discord.MessageEmbed()
							.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
                .setTitle("🚀 Economia")
                .addField(`**<:seta:800749541677727756>  ${prefix}bal**`, "Use esse comando para saber o seu saldo ou o saldo de algum usuário mencionado!!")
								.addField(`**<:seta:800749541677727756>  ${prefix}pay**`, "Use esse comando para pagar a algum usuário quando quiser!")
								.addField(`**<:seta:800749541677727756>  ${prefix}daily**`, "Use esse comando para ganhar seu dinheiro diário!!")
								.addField(`**<:seta:800749541677727756>  ${prefix}work**`, "Use esse comando para trabalhar e assim ganhar dinheiro! Lembrando que existem ladrões querendo te roubar!")
                .setColor("ff0000")

            msg.edit(embed);
        })
//-------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- -------------------------- 
        Back.on('collect', r2 => {
                    r2.users.remove(message.author.id)
     const embed = new Discord.MessageEmbed()
        .setTitle(`**_Central de Ajuda_**`)
        .setColor("ff0000")
				.setThumbnail(client.user.displayAvatarURL())
        .setDescription('**<:coroa:752280702111711313> Seja muito bem vindo a minha central de ajuda**\n\n**<:1lugar:753658722886352948> | Links:**\n\n<a:discord:754783223191437342> | **[Me Adicione](https://discord.com/oauth2/authorize?client_id=747169426205573150&scope=bot&permissions=8)**\n\n<a:sorteio:753576763241529414> | **[Vote em Mim](https://zuraaa.com/bots/747169426205573150/votar)**\n\n**Modalidades:**\n\n**<:0_:800749437370105857> | Moderação\n<:1_:800749463953342464> | Utilidades\n<:2_:800749483695800350> | Entreterimento\n<:3_:800749507033694268> | Economia**')  
					.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))    

           msg.edit(embed);  
        });
    });
  }
}

