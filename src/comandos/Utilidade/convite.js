const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'convite',                                                   
    aliases: ['botconvite', 'adicionarbot'],
    descricao: 'Comando para ver o convite de servidor do bot!',
		    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  let bicon = client.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.MessageEmbed()
 .setDescription("**Convite**")
 .setColor("ff0000")
 .setThumbnail(bicon)
 .addField("Use Este Link De Convite Para Adicionar O Bot Ao seu Servidor!", "[Convite](https://discord.com/oauth2/authorize?client_id=747169426205573150&scope=bot&permissions=8)")
 .setFooter(`Convite Pedido Por:${message.author.username}`)
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
 message.channel.send(inviteEmbed);

  }
}
