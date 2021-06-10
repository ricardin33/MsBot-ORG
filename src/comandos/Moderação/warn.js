const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'warn',
    aliases: ['avisar', 'aviso'],
    descricao: 'Comando que serve para avisar um usuário em sua dm',
		utilizacao: 'ms!warn',
    cooldown: 6
  },
  run: async (client, message, args) => {
		  let motivo = args.slice(1).join(' ');
  let user = message.mentions.users.first() || args[0]
 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  let embedwarn = new Discord.MessageEmbed()
  .setTitle("**Aviso**")
  .setColor("ff0000")
  .setDescription(`Você enviou um aviso para ${user}`)
  .setFooter(`Olá ${message.author.username}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	let embedinfo = new Discord.MessageEmbed()
  .setTitle("**Aviso**")
  .setColor("ff0000")
  .addField("Forma Correta:", `${prefix}warn (Usuário) (Aviso)`)
  .addField("Exemplo:", `${prefix}warn @Ricardinho Seja Você Mesmo!`)
  .setFooter(`Olá ${message.author.username}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você Não tem permissão para usar este comando!");
  if (!user) return message.reply(embedinfo);
  if (!motivo) return message.reply(embedinfo);
  if (user === message.author) return message.reply("Você não pode se mencionar!")

  let embed = new Discord.MessageEmbed()
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
  .setTitle("Aviso")
  .setColor("ff0000")
  .setDescription(`Você foi Avisado No servidor \`${message.guild.name}\``)
  .addField("Autor", message.author.tag)
  .addField("Mensagem", motivo);
  user.send(embed);

  message.delete();
  
  message.channel.send(embedwarn)

		}
		}