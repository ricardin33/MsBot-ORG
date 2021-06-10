const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: '8ball',                                                   
    aliases: ['pergunta'],
    descricao: 'Comando que serve para fazer uma pergunta e o bot responde',  
		utilizacao: 'ms!8ball ',   
    cooldown: 6
  },
  run: async (client, message, args) => {
	

    if(!args[1]) return message.reply("Por favor coloque uma pergunta de mais de uma palavra");
    let replies = ["Sim", "Não", "Eu não Sei", "Pergunte novamente mais tarde! Estou cheio de coisa pra fazer e vou perder meu tempo se for lhe responder huehuehuehue", "Acho que Sim", "Não tenho certeza!", "Por favor não", "Diz Ai", "Sem duvida", "Não posso prever agora", "E eu sei la po", "Se vira truta", "Porque ta perguntando pra mim?", 'Pode ser que sim.... Quem sabe ¯\_(ツ)_/¯', 'Pode ser que não... Quem sabe ¯\_(ツ)_/¯'];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor("ff0000")
    .addField("Pergunta", question)
    .addField("Resposta", replies[result]);

    message.channel.send(ballembed)

    message.delete();


	}
	}