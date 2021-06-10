const Discord = require('discord.js')
const db = require('quick.db')

module.exports = async function (client, message) {
let vari = db.get(`logschannel_${message.guild.id}`);
if(message.author.bot) return;
if(vari === "off" && null && undefined) {
	return;
} else {
let embed = new Discord.MessageEmbed()
.setTitle("Mensagem apagada!")
.setDescription(`Uma mensagem foi apagada do servidor! \n\n <:seta:800749541677727756> | **Canal:** **${message.channel}**\n<:seta:800749541677727756> | **Mensagem de:** **${message.author}**\n **<:seta:800749541677727756> | Mensagem**: \n\`\`\`${message.content}\`\`\``)
.setColor("ff0000")
.setFooter("Chanel Log | Ms Bot™")
let canal = message.guild.channels.cache.find(canal => canal.id === vari)
if (canal === undefined) return;
try{
	canal.send(embed)
} catch(error) {
	return;
}
}
}



