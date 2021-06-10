const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'leaderboard',                                                   
    aliases: ['rank'],
    descricao: 'Comando que serve para ver o rank de money!',    
		utilizacao: 'ms!leaderboard',   
    cooldown: 6
  },
  run: async (client, message, args) => {

 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);


    if (message.mentions.users.first()) {
 
      var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      })
      message.channel.send(`O usuário <@${message.mentions.users.first().id}> é o numero ${output} Na leaderboard!`);
 
    } else {
 
      eco.Leaderboard({
        limit: 3, //Only takes top 3 ( Totally Optional )
        filter: x => x.balance > 0 //Only allows people with more than 100 balance ( Totally Optional )
      }).then(async users => { //make sure it is async
 
        if (users[0]) var firstplace = await client.users.fetch(users[0].userid) //Searches for the user object in discord for first place
        if (users[1]) var secondplace = await client.users.fetch(users[1].userid) //Searches for the user object in discord for second place
        if (users[2]) var thirdplace = await client.users.fetch(users[2].userid) //Searches for the user object in discord for third place
 
        message.channel.send(`Leaderboard:
 
1 - **${firstplace && firstplace.tag || 'Ninguém Aqui'}** : ${users[0] && users[0].balance || 'Nada'}
2 - **${secondplace && secondplace.tag || 'Ninguém Aqui'}** : ${users[1] && users[1].balance || 'Nada'}
3 - **${thirdplace && thirdplace.tag || 'Ninguém Aqui'}** : ${users[2] && users[2].balance || 'Nada'}`)
 
      })
 
    }
	}
	}