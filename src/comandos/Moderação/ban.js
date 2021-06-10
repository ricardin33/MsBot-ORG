const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'ban',
    aliases: ['banir'],
    descricao: 'Comando que serve para banir um usuário do servidor!',
		utilizacao: 'ms!ban @user',
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
let xdemb = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("**Ban**")
        .addField("Use:", `ms!ban [@usuário] [Motivo]`, true)
        .addField("Exemplo:", `ms!ban @usuário flood`)
        .setFooter(`${message.author.username} acabou de aprender a como banir pessoas!`)
					.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "409801761470152704") return message.channel.send("Você não tem permissão para banir usuários!");

        let member = message.mentions.members.first() || client.users.cache.get(args[0]) || message.guild.users.cache.fetch(args[0]);
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("Este usuário não é banivel!")
        if(member.user.id === "409801761470152704") return message.channel.send("Eu não consigo banir meu Criador, é mais forte que eu!")

        if(member.id === message.author.id) return message.channel.send("Você não pode se banir!")

        let reasonn = args.slice(1).join(" ");

        if(!reasonn) {
            res = "Você Não deu nenhum motivo!";
        } else {
            res = reasonn
        }

        await member.ban({ reason: reasonn }).catch(error => console.log(error));


        let bean = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle(`Ban: | ${member.user.tag}`)
        .addField("Usuário", member, true)
        .addField("Moderador", message.author, true)
        .addField("Motivo", res)
        .setTimestamp()
				.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
        message.channel.send(bean)

        message.delete()

		}
		}