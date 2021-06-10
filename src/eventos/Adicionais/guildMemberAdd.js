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
    client.channels.cache.get(serverstatus.botusers).setName(`Total De Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`)
    client.channels.cache.get(serverstatus.memebrt).setName(`Total De Membros: ${message.guild.members.cache.filter(member => !member.user.bot).size}`)


}
module.exports = async (client, message) => {
let role = db.get(`autorole_${message.guild.id}`);
if(role === "off" && null && undefined) {
	return console.log('--> Uma pessoa entrou em um servidor porém sem autorole!');
}	else { 
	try {
	member.roles.add(role.id)
	} catch (error) {
		return console.log(`Ocorreu um erro ao tentar adicionar o cargo para o membro! Membro: ${message.user.tag}, Servidor: Id: ${message.guild.id} || Nome: ${message.guild.name}`);
	}
}
}
module.exports = async (client, message) => {
let chat = db.get(`bemchannel_${message.guild.id}`);
let canal = message.guild.channels.cache.find(canal => canal.id === chat);
if(chat === "off" && null && undefined) {
	return;
} else if(canal === undefined) {
	return;
} else {

let embed = new Discord.MessageEmbed()
.setTitle('Bem-Vindo!')
.setThumbnail(`${message.user.displayAvatarURL({dynamic: true})}`)
.setDescription(`Olá ${message.user}! Seja bem vindo ao ${message.guild.name}! Divirta-se!`)
.addField('🛡 Informações Do Usuário', `Username: \`${message.user.username}\`\nTag: \`${message.user.tag}\`\n ID: \`${message.user.id}\``)
.addField('❓ Curiosidade', `Você sabia que você é o ${message.guild.memberCount}º Usuário a entrar aqui? Muito obrigado!`)
.addField('📛 Precisando de ajuda?', "Caso você tenha alguma dúvida ou problema, chame a nossa equipe!", true)
.addField('👮 Se liga nas regras!!!', "Peço que você leia as regras do servidor antes para ficar informado sobre tudo que pode ou não fazer!!")
.setColor('ff0000')
.setFooter('Welcome Message | Ms Bot™ ')
canal.send(embed).catch('--> Ocorreu um erro ao mandar a mensagem!');
}
}