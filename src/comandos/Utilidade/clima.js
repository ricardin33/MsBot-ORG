const Discord = require('discord.js')
const db = require('quick.db')
const weather = require("weather-js")
const moment = require('moment')
moment.locale('pt-BR')
module.exports = {
  config: {
    nome: 'clima',                                                   
    aliases: ['tempo', 'temporal', 'lugar'],
    descricao: 'Ver informações climaticas de determinado local!',
		    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);
    if (args.length < 1) {
        message.channel.send('Digite algum local!');
        return 0;
    }
    weather.find(
        { search: args.join(' '), degreeType: 'C', lang: 'pt-BR' },
        (err, result) => {
            if (err) throw err;
            result = result[0];
            if (!result) {
                message.channel.send(
                    'Fale um local que exista!'
                );
                return;
            }
            var current = result.current;
            var location = result.location;
        //Sends weather log in embed
        let embed = new Discord.MessageEmbed()
           .setColor(`ff0000`)
           .setDescription(`**${current.skytext}**`)
           .setAuthor(`Informações do lugar ${current.observationpoint}`, message.author.displayAvatarURL({format: 'png'})) 
           .setThumbnail(current.imageUrl)
           .addField("Temperatura", `${current.temperature}° C`, true)
           .addField("Sensação Térmica:", `${current.feelslike}° C`, true)
           .addField("Ventos", current.winddisplay, true)
           .addField("Humidade", ` ${current.humidity}%`, true)
           .addField("Dia", `${current.day}`, true)
           .addField("Data", moment(current.date).format(`LL`), true)
           
           //Display when it's called
           message.channel.send(embed)

        }
    );
  }
}
