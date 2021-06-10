const db = require('quick.db');
const Discord = require('discord.js')

module.exports = async function (message) {
	const serverstatus = {
  guildID: "743510402956132413",
  totalUsersID: "789196965216124929",
  botusers: "789197105965039687",
  memebrt: "789197038059388948"
	}

    if(message.guild.id !== serverstatus.guildID) return;
    client.channels.cache.get(serverstatus.totalUsersID).setName(`Total De Usuários: ${message.guild.memberCount}`) 
    client.channels.cache.get(serverstatus.botusers).setName(`Total De Bots: ${message.guild.members.cache.filter(m => m.user.bot).size}`)
    client.channels.cache.get(serverstatus.memebrt).setName(`Total De Membros: ${message.guild.members.cache.filter(member => !member.user.bot).size}`)     

}

module.exports = async (client, message) => {
let chat = db.get(`saichannel_${message.guild.id}`);
let canal = message.guild.channels.cache.find(canal => canal.id === chat);
if(chat === "off" && null && undefined) {
	return console.log('--> Uma pessoa entrou em um servidor porém sem autorole!')
}else if(canal === undefined) {
	return;
} else {
let embed = new Discord.MessageEmbed()
.setTitle('Saída!')
.setThumbnail(`${message.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`Poxa ${message.user.tag} 😭 ! Infelizmente você saiu do nosso servidor! Espero poder ve-lo aqui novamente!`)
.setColor('ff0000')
.setFooter('Leave Message | Ms Bot™ ')
canal.send(embed).catch('--> Ocorreu um erro ao mandar a mensagem!');
}
}

