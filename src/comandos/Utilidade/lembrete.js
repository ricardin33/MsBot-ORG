const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')
module.exports = {
  config: {
    nome: 'lembrete',                                                   
    aliases: ['lembrar', 'timer'],
    descricao: 'Comando que serve para te lembrar de alguma coisa em determinado tempo!',    
		utilizacao: 'ms!lembrete (tempo)',                    
    cooldown: 6
  },
  run: async (client, message, args) => {
			 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`); // eslint-disable-line no-unused-vars
    var time = args[0];
    var reminder = args.splice(1).join(' ');

    if (!time) return message.reply('Defina um tempo!');
    if (!reminder) return message.reply("Coloque a mensagem para te lembrar!");


    time = await time.toString();

    if (time.indexOf('s') !== -1) { // Seconds
        var timesec = await time.replace(/s.*/, '');
        var timems = await timesec * 1000;
    } else if (time.indexOf('m') !== -1) { // Minutes
        var timemin = await time.replace(/m.*/, '');
        timems = await timemin * 60 * 1000;
    } else if (time.indexOf('h') !== -1) { // Hours
        var timehour = await time.replace(/h.*/, '');
        timems = await timehour * 60 * 60 * 1000;
    } else if (time.indexOf('d') !== -1) { // Days
        var timeday = await time.replace(/d.*/, '');
        timems = await timeday * 60 * 60 * 24 * 1000;
  } else if (time.indexOf('d') !== -1) { // Days
        var timemonth = await time.replace(/d.*/, '');
        timems = await timeday * 60 * 60 * 60 * 24 * 1000;
    }    else {
        return message.reply('O tempo deve ser númerico ⦍s/m/h/d⦐');
    }

    message.reply(`Eu vou lembrar você de \`${reminder}\` daqui \`${time}\``);

    setTimeout(function () {
        message.reply(`Você me pediu para te lembrar de \`${reminder}\` `);
    }, parseInt(timems));

  }
}
