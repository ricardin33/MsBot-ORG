const Discord = require('discord.js')
const db = require('quick.db')

module.exports = async function (client, oldMessage, newMessage) {
	try{
let vari = db.get(`logschannel_${oldMessage.guild.id}`);
if(oldMessage.bot) return;
if(vari === "off" && null && undefined) {
	return;
} else {
if(oldMessage.author.bot && newMessage.author.bot) return;
let canal = oldMessage.guild.channels.cache.find(canal => canal.id === vari)
if (canal === undefined) return;
let embed = new Discord.MessageEmbed()
.setTitle("Mensagem Editada!")
.setDescription(`Uma Mensagem Foi editada! \n \n<:seta:800749541677727756> | **Autor:** **${oldMessage.author}**\n **<:seta:800749541677727756> | Mensagem Antiga:** \n\`\`\`${oldMessage.content}\`\`\`\n **<:seta:800749541677727756> | Nova Mensagem:** \n\`\`\`${newMessage.content}\`\`\``)
.setColor("ff0000")
.setFooter("Chanel Log | Ms Bot™")
	canal.send(embed).catch("ocorreu um erro no comando!");
}
} catch (err) {
	return;
}
}
