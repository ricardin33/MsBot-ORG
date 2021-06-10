const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
module.exports = {
  config: {
    nome: 'botinfo',                                                   
    aliases: ['bot', 'infobot'],
    descricao: 'Comando que serve para ver informações do bot',
		    cooldown: 6
  },
  run: async (client, message, args) => {
	 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
    let inline = true
    let bicon = client.user.displayAvatarURL;
    let usersize = client.users.cache.size;
    let chansize = client.channels.cache.size;
      let totalSeconds = client.uptime / 1000;
  let days =  Math.floor(totalSeconds / 86400);
  let hours =  Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes =  Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `<:tempo:755834161750867998> **${days.toFixed()}** dias\n<:tempo:755834161750867998> **${hours.toFixed()}** horas\n<:tempo:755834161750867998> **${minutes.toFixed()}** minutos\n<:tempo:755834161750867998> **${seconds.toFixed()}** segundos`;
  
    let servsize = client.guilds.cache.size

    let botembed4 = new Discord.MessageEmbed()
    .setColor("ff0000")
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`<:pessoa:755831038407737427> Nome:`, `**${client.user.username}**`, true)
    .addField(`<:desenvolvedor:753583084326354997> Criador:`, "**<@409801761470152704>**", true)
    .addField(`<:host:753583454087544832> Servidores:`, ` **${servsize}**`, true)
    .addField(`<a:click:753576761907740732> Canais:`, ` **${chansize}**`, true)
    .addField(`<:pessoas:755833704139587664> Usuários:`, `**${usersize}**`, true)
    .addField(`<a:carregar:753583530331602964> Criado em:`, `**${moment(client.user.createdAt).format(`LLL`)}**`, true)
        .addField(`<:aprovado:753658856667742301> Tempo Online:`, `**${uptime}**`, true)
    .addField(`<:js2:753583754370482216> Versão:`, `**v1.5.9**`, true)    
    .addField(`<:js1:753583628851871865> Livraria do Bot:`, "**Discord.js**", true)
    .addField(`<:windows:753676830921326612> Plataforma:`, `**${process.platform}**`, true)    
    .addField(`<:engrenagem:753582699620466769> CPU Usada:`, `**${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%**`, true)   
    .addField(`<:memoria:753583352476467202> Ram Usada:`, `**${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB**`, true)
    .setFooter(`2020 © ${client.user.username}.`)
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
		.setTimestamp()
    message.channel.send(botembed4);	
	
	}
}