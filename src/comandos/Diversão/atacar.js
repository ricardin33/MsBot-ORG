const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'atacar',                                                   
    aliases: ['atack'],
    descricao: 'Comando que serve para bater em algum membro',  
		utilizacao: 'ms!atacar',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  let usuario = message.mentions.users.first();
  if(!usuario) {
    message.channel.send("Você tem que mencionar um usuário válido!")
  } else{
  let imagens = [
    "https://loritta.website/assets/img/actions/attack/generic/gif_69.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_9.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_32.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_32.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_103.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_103.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_41.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_87.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_65.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_107.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_101.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_28.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_54.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_75.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_57.gif",
    "https://loritta.website/assets/img/actions/attack/generic/gif_111.gif",
    "http://www.ligacaoteen.com.br/wp-content/uploads/2016/05/gintama.gif"
  ];
	let avatar = message.author.displayAvatarURL({format: 'png'});
  let randomimg = imagens[Math.floor(Math.random() * imagens.length)]
  let embed = new Discord.MessageEmbed()
  .setTitle("**Ataque**")
  .setDescription(`**${message.author}** atacou **${usuario}** Aí,Ai essa doeo 🤕`)
  .setImage(randomimg)
  .setFooter(`Eita está ocorrendo uma treta entre ${message.author.username} e ${usuario.username}!!!!!`)
  .setColor('ff0000')
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
  message.channel.send(embed)
  }

	}
	}