const Discord = require('discord.js')
const db = require('quick.db')
const eco = require('discord-economy')
const ms = require('parse-ms')
module.exports = {
  config: {
    nome: 'abraçar',                                                   
    aliases: ['hug', 'abraço', 'abracar', 'abraco'],
    descricao: 'Comando que serve para abraçar algum membro',  
		utilizacao: 'ms!abraçar @user',   
    cooldown: 6
  },
  run: async (client, message, args) => {
		 let user = args[0] || message.mentions.members.first();
 let prefix = db.get(`prefixo_${message.guild.id}`) == null ||
db.get(`prefixo_${message.guild.id}`) == undefined
? "ms!"
: db.get(`prefixo_${message.guild.id}`);

	 var img = [
		 "https://media.tenor.com/images/35fc88f417892fad929380ad78c796b9/tenor.gif",
		 "https://media.tenor.com/images/f192f4d5171bef20fdb0e61c60ea7a23/tenor.gif",
		 "https://media.tenor.com/images/a9730f44f28d959abb4c5b31edc77de8/tenor.gif",
		 "https://media.tenor.com/images/c2e5126c39ad5f3a1a2ae31f3e784da8/tenor.gif",
		 "https://media.tenor.com/images/49dc9058b390fcec0a9ebbe71a2f82af/tenor.gif",
		 "https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif",
		 "https://media.tenor.com/images/f2d41b50c49426ea42411f14779a7c1c/tenor.gif",
		 "https://media.tenor.com/images/ca682cecd6bff521e400f984502f370c/tenor.gif",
		 "https://media.tenor.com/images/6b371d1268accf30a8afe15d63f977e0/tenor.gif",
		 "https://media.tenor.com/images/0475c99c7a2dd692012d9e705e2ba667/tenor.gif",
		 "https://media.tenor.com/images/8d33eeee359d0453de52c5779dd23c46/tenor.gif",
		 "https://media.tenor.com/images/b33ef6cb7106fd72276a18558e4a3183/tenor.gif",
		 "https://media.tenor.com/images/7a6c91842f8b2871ecf5234bcd095da7/tenor.gif",
		 "https://media.tenor.com/images/3d9c3a9c945fa8d27e6d3a0e1ec83f03/tenor.gif",
		 "https://media.tenor.com/images/a5e4ed2d6754cdb7a953b95a52bf9f9b/tenor.gif",
		 "https://media.tenor.com/images/61ea96bce16c53a913336a3dbc1a6100/tenor.gif",
		 "https://media.tenor.com/images/96bab22bd6f9918dcaf8cb3ae61a2807/tenor.gif",
		 "https://media.tenor.com/images/f1cf45b04a9e32f13f6a58df28c02552/tenor.gif",
		 "https://media.tenor.com/images/1a2fd79c2d022840f3dcf7188820a0df/tenor.gif",
		 "https://media.tenor.com/images/9542d00d6e2557f2c55a5edb7af17deb/tenor.gif",
		 "https://media.tenor.com/images/32dcfd863ebf070fb1b801fcb0cd78dc/tenor.gif"
	 ];

	if(!user) {
		message.channel.send("Por Favor mencione um usuário válido!")
	} else{
		let imgf = img[Math.floor(Math.random() * img.length)];


let avatar = message.author.displayAvatarURL({format: 'png'});
		let embed = new Discord.MessageEmbed()
		.setTitle("**Abraço**")
		.setDescription(`${message.author} Deu Um Abraço em ${user}!`)
		.setImage(imgf)
		.setColor('ff0000')
		.setFooter("Que fofinhooooooo", message.author.displayAvatarURL())
		.setAuthor(message.author.username, avatar)
		message.channel.send(embed);
	}

	}
	}