module.exports = {
  config: {
    nome: 'sugestão',                                                   
    aliases: ['sug', 'sugestao', 'inferir'],
    descricao: 'Comando que serve para dar alguma sugestão ao dev do bot!',    
		utilizacao: 'ms!sug (sugestao)',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
let sug = args.join(" ");

  let embedinfo = new Discord.MessageEmbed()
  .setTitle("**Sugestão**")
  .setColor("ff0000")
  .addField("Forma Correta:", `${config.prefix}sug (Sugestão)`)
  .addField("Exemplo:", `${config.prefix}sug Criar bla bla bla...`)
  .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
	.setFooter(`Olá ${message.author.username}`)
if(!sug){
  return send.message.channel(embedinfo)
}
  const embedsug = new Discord.MessageEmbed()
  .setTitle("**Sugestão**")
  .setDescription(`Uma Nova Sugestão! \nNome: ${message.author.tag}\n Sugestão: ${sug}`)
  .setColor(`ff0000`)
  .setFooter("Sugestão sainda do forno!")
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
  client.users.cache.get('409801761470152704').send(embedsug)


  const embedchat = new Discord.MessageEmbed()

  .setTitle("**Sugestão**")
  .addField(`Obrigado Pela sua sugestão nós iremos atende-la assim que possivel e que consiga ser feito`, "**Lembrando que Abusar deste comando resulta em blacklist!**", false)
  .setColor(`00ff00`)
  .setFooter("Sugestão saindo do forno!")
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
message.channel.send(embedchat);  
  }
}
