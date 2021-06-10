const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'leavech',
    aliases: ['setarcanalsaida', 'setsaida', 'setleave'],
    descricao: 'Comando que serve para setar o canal onde iram vir as mensagens de despedida!',
		utilizacao: 'ms!leavech #canal',
    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
      let embedinfo = new Discord.MessageEmbed()
  .setTitle("**Aviso**")
  .setColor("ff0000")
  .addField("Forma Correta:", `${prefix}warn (Usuário) (Aviso)`)
  .addField("Exemplo:", `${prefix}warn @Ricardinho Seja Você Mesmo!`)
  .setFooter(`Olá ${message.author.username}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	  if(args[0] === "off") {
      message.channel.send("Você desativou as mensagens de saída!")
      db.set(`saichannel_${message.guild.id}`, "off") 
    } else {

    let canal = message.mentions.channels.first()
    if(!canal) {
      return message.channel.send("Por favor mencione um canal válido!")
    }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("**Mensagem De Bem-Vindo**")
    .setDescription(`Você setou o canal de saída para ${canal}`)
    .setColor("ff0000")
    .setThumbnail("https://images.vexels.com/media/users/3/127884/isolated/preview/6e251cafa3f75706ff8b4aee7d353477-tag-de-sa--da-by-vexels.png")
    .setFooter("Você setou o canal com sucesso!", message.author.displayAvatarURL({format: 'png'}))
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
    db.set(`saichannel_${message.guild.id}`, canal.id)
    
    message.channel.send(embed)
  
		}

		}
		}