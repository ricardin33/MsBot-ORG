const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'kick',
    aliases: ['expulsar', 'kikar'],
    descricao: 'Comando que serve para expulsar pessoas do servidor!',
		utilizacao: 'ms!kick',
    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Você não tem permissão para utilizar este comando!");
    
  let xdemb = new Discord.MessageEmbed()
  .setColor("ff0000")
  .setTitle("**Kick**")
  .addField("Descrição:", `Kick Um Usuário`, true)
  .addField("Forma correta:", "ms!kick [@usuario] [Motivo]", true)
  .addField("Exemplo:" ,"ms!kick @user spam")
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("Eu não consigo Kickar este Usuário!");
   if(member.user.id === "409801761470152704") return message.channel.send("Eu não consigo kickar Meu Dono!")

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "Sem Motivo";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Eu não consegui kickar o usuário pois ele te permissão administradora!`));

      let kick = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`, true)
      .addField("Usuário", member, true)
      .addField("Moderador", message.author, true)
      .addField("Motivo", res)
      .setTimestamp()
      .setFooter(`${member.username} Foi Kickado com sucesso!`)
			.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
      message.channel.send(kick)

    message.delete();
		}
		}