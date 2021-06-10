    const Discord = require('discord.js')
const db = require('quick.db')
var access = require("request");
module.exports = {
  config: {
    nome: 'ascii',                                                  
    descricao: 'Comando que serve para transformar uma palavra em linguagem ascii',
		    cooldown: 6
  },
  run: async (client, message, args) => {
		// Variables
    let words = args.join(" ");
    const msg = message

        // Input Checking
        if (!words) return message.channel.send("Por Favor escreva algo!");

        if (words.length > 15) return message.channel.send("Você não pode exercer mais que 15 caracteres!")

        // Executing
        access("https://artii.herokuapp.com/make?text=" + words, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            message.channel.send("\n```" + body + "```");
          }
          else {
            message.channel.send("Ocorreu um erro!");
          }
        });
				}
				}