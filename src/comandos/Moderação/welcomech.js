const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'welcomech',
    aliases: ['setarbemvindo', 'setwelcome', 'setboasvindas'],
    descricao: 'Comando que serve para setar o canal de boas vindas!',
		utilizacao: 'ms!welcomech #canal',
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você tem que ter permissão ADM")
    if(args[0] === "off") {
      message.channel.send("Você desativou as mensagens de Bem-Vindo!")
      db.set(`bemchannel_${message.guild.id}`, "off") 
    } else {
  let embedinfo = new Discord.MessageEmbed()
  .setTitle("**Bem-Vindo**")
  .setColor("ff0000")
  .addField("Forma Correta:", `${prefix}welcomech (Canal) OU ${prefix}welcomech off`)
  .addField("Exemplo:", `${prefix}welcomech #canal/off (para desligar!)`)
  .addField("Permissão", "Requer a permissão ``ADM``")
  .setFooter(`Olá ${message.author.username}`)    
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
		let canal = message.mentions.channels.first()
    if(!canal) {
      return message.channel.send("Por favor mencione um canal válido!")
    }
    
    let embed = new Discord.MessageEmbed()
    .setTitle("**Mensagem De Bem-Vindo**")
    .setDescription(`Você setou o canal de bem-vindo para ${canal}`)
    .setColor("ff0000")
    .setThumbnail("https://i.pinimg.com/originals/94/e8/2e/94e82e9207e2daa3f128bae7081cb969.png")
    .setFooter("Você setou o canal com sucesso!", message.author.displayAvatarURL({format: 'png'}))
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
    db.set(`bemchannel_${message.guild.id}`, canal.id)
    
    message.channel.send(embed)
		}


		}
		}