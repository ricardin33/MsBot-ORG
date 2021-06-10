const Discord = require('discord.js')
const db = require('quick.db')

module.exports = async function (client, role) {
let vari = db.get(`logschannel_${role.guild.id}`);
if(vari === "off" && null && undefined) {
	return;
} else {
let canal = role.guild.channels.cache.find(canal => canal.id === vari)
if (canal === undefined) return;
let embed = new Discord.MessageEmbed()
.setTitle("Cargo Deletado!")
.setDescription(`Novo cargo Deletado!! \n \n <:seta:800749541677727756> | **Nome:** **${role.name}**\n <:seta:800749541677727756> | **Cor (hexadecimal)** : **${role.hexColor}**`)
.setColor("ff0000")
.setFooter("Chanel Log | Ms Bot™")
	canal.send(embed).catch("ocorreu um erro no comando!");
}
}
