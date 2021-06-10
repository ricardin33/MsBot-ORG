const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'unmute',
    aliases: ['desmutar'],
    descricao: 'Comando que serve para tirar o mute do usuário',
		utilizacao: 'ms!unmute @user',
    cooldown: 6
  },
  run: async (client, message, args) => {
		 
	 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
	let embedinfo = new Discord.MessageEmbed()
  .setTitle("**Unmute**")
  .setColor("ff0000")
  .addField("Forma Correta:", `${config.prefix}unmute (Usuário)`)
  .addField("Exemplo:", `${config.prefix}unmute @Ricardinho!`)
  .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	.setFooter(`Olá ${message.author.username}`)
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Você não tem permissão para executar este comando!")

        let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!toMute) return message.channel.send(embedinfo);

        let role = message.guild.roles.cache.find(role => role.name === "Mutado")
        
          if(!role || !toMute.roles.cache.has(role.id)) return message.channel.send("Este usuários não está Mutado");

        await toMute.roles.remove(role);
        message.channel.send("O usuário foi desmutado!");

        message.delete();

		}
		}