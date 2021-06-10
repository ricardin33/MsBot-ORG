const Discord = require("discord.js")
const request = require("node-superfetch") //npm i node-superfetch
const {stripIndents} = require("common-tags") //npm i common-tags
const twitter = require("twitter-api.js") //npm i twitter-api.js
module.exports = {
  config: {
    nome: 'testar',                                               
    descricao: 'Comando que serve para ver a conta de uma pessoa no twitter',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		    let user = args[0]
    if(!user) return message.channel.send("Escreva seu nome do twitter")
  const body = await twitter.users(user)
	console.log(body);
	}
}