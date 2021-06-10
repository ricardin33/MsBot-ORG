Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment');
moment.locale('pt-br');
module.exports = {
  config: {
    nome: 'userinfo',                                                   
    aliases: ['membinfo', 'perfinfo', 'guyinfo'],
    descricao: 'Comando que mostra informações de um usuário do servidor!',    
		utilizacao: 'ms!userinfo @user',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
		    
		
		 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
		
		
		const inline = true
    const status = {
      online: ' ✔️ Online',
      idle: ' 🌙 Ausente',
      dnd: '⭕ Não pertubar',
      streaming: '💜 Stremando',
      offline:'⚪ Offline'
    }

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const bot = member.user.bot ? '`🤖` Sim' : ' `🤡` Não'
    const embed = new Discord.MessageEmbed()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setColor('ff0000')
      .setTitle('Informações do usuário')
      .addField('**Tag**', `${member.user.tag}`, inline)
      .addField('**ID**', member.user.id, inline)
      .addField('**Apelido**', `${member.nickname !== null ? ` ${member.nickname}` : 'Nenhum'}`, true)
      .addField('** Bot **', `${bot}`, inline, true)
      .addField('**Status**', `${status[member.user.presence.status]}`, inline, true)
      .addField('**Jogando**', `${member.user.presence.game ? `${member.user.presence.game.name}` : ' Nada'}`, inline, true)
      .addField('**Cargos**', `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(' **|** ') || 'Nenhum cargo'}`, true)
      .addField('**Entrou no Discord em**', moment(member.user.createdAt).format('LLLL'))
      .addField('**Entrou no servidor em**', moment(message.member.joined).format('LLLL'))
      .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
      .setAuthor(message.author.username)
      .setTimestamp()
    message.channel.send(embed)
  }
}
