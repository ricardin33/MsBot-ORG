const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'eval',                                                   
    aliases: ['console'],
    descricao: 'Comando que executa uma ação do adm!',  
		utilizacao: 'ms!eval (comando)',   
    cooldown: 6
  },
  run: async (client, message, args) => {
	
	 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
    if (!['409801761470152704', '547210467068870669', '632374998727917569'].includes(message.author.id)) {
    return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Apenas Meus Developers Pode Usar Este Comando`)
.setColor(`ff0000`))
    }
    const code = args.slice(0).join(" ")
    if (!code) return message.reply(new Discord.MessageEmbed()
.setDescription(`Digite algum codigo!`)
.setColor(`ff0000`))
    
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          let embed = new Discord.MessageEmbed()
          .setDescription(`📥 **ENTRADA**\n\`\`\`js\n${code}\`\`\`\n📤 **SAÍDA**\n\`\`\`js\n${ev}\`\`\``)
.setColor('ff0000')
        message.channel.send(embed)
        } catch(err) {
          let errorrr = new Discord.MessageEmbed()
          .setDescription(`**Erro detectado!**\n\`\`\`\n${err}\`\`\``)
.setColor('ff0000')
            message.channel.send(errorrr)
        }
	
	
	}
}