const db = require('quick.db')
module.exports = {
  config: {
    nome: 'prefix',                                                   
    aliases: ['prefixo'],
    descricao: 'Comando que serve para ver o prefixo do bot!',    
		utilizacao: 'ms!prefix',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
	
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
  message.channel.send(`Meu prefixo é (*${prefix}*)`)
}
	}