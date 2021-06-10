const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'corona',                                                   
    descricao: 'Comando que serve para se cuidar do corona',  
		utilizacao: 'ms!',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  let imagens = [
    "https://media.tenor.com/images/1f25716ab2ec731d4c472ece6ed20e7a/tenor.gif",
    "https://media.tenor.com/images/973005504b9c63a683edbc7bfcf78370/tenor.gif",
    "https://media.tenor.com/images/7836d7886a26717495234e69b25b4f4e/tenor.gif",
    "https://media.giphy.com/media/l41YAqZkaq9mmgCxa/giphy.gif",
    "https://media.giphy.com/media/kaa12hX0AGM0ta7jqs/giphy.gif",
    "https://media.giphy.com/media/UoYA5jnXE5V7u4MJh7/giphy.gif",
  ]
  var randomimage = imagens[Math.floor(Math.random() * imagens.length)]
  let embedcorona = new Discord.MessageEmbed()
  .setTimestamp()
  .setColor('ff0000')
  .setTitle("**Corona Vírus**")
  .setThumbnail(message.author.avatarURL())
  .setDescription(`Meu Parabéns <@${message.author.id}> Você Se previniu contra o corona virús (Covid-19), Faça isso quando quiser pois faz bem!`)
  .setImage(randomimage)
		.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
  message.channel.send(embedcorona);

	}
	}