const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')
module.exports = {
  config: {
    nome: 'emoji',                                                   
    aliases: ['emojiinfo', 'infoemoji'],
    descricao: 'Comando para ver informações do emoji',
		    cooldown: 6
  },
  run: async (message, [emote]) => {
        let emojiName = args.join(" ");
        let emoji = message.guild.emojis.cache.get(args[0]) || message.guild.emojis.cache.find(emoji => emoji.name === `${emojiName}`) 
        if (!args[0]) return message.channel.send("Porfavor envio o id ou nome do emoji!")
        if (!emoji) return message.channel.send("Por favor envie o id ou nome do emoji válido")
        let xd;
        if(emoji.animated) xd = "🟢"
        if(!emoji.animated) xd = '🔴'
        let embed = new Discord.MessageEmbed()

            .addField("Nome:", `${emoji.name}`)
            .addField("id do emoji:", `${emoji.id}`)
            .addField("Emoji:", `${emoji}`)
            .addField("Criado em:", `${moment(emoji.createdTimestamp).fromNow()}`)
            .addField("Servidor:", message.guild.name)
            .addField("Animado?", xd)
            .setThumbnail(emoji.url)
            .setColor("ff0000")
            .addField("Formato", `\`<:${emoji.name}:${emoji.id}>\``)
            .addField("URL", `[clique aqui](${emoji.url})`)

        message.channel.send(embed)
    }
}