const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  config: {
  nome: 'marry',                                               
  descricao: '',
	cooldown: 6
  },
run: async (client, message, args) => {
		//Lets
let pessoa = message.mentions.users.first()

    
//EMBEDS
let menc = new Discord.MessageEmbed()
	.setTitle("💍 | Casamento ")
	.setDescription("Opa, menciona alguém ai para se casar fi")
	.setColor("ff96bb")
let botmarry = new Discord.MessageEmbed()
	.setTitle("💍 | Casamento ")
	.setDescription("Cai fora men, não tenho idade pra casar")
	.setColor("ff96bb")
let authormarry = new Discord.MessageEmbed()
	.setTitle("💍 | Casamento ")
	.setDescription("Povo ta evoluindo, querendo se casar consigo mesmo, slk vey")
	.setColor("ff96bb")
let faltadin = new Discord.MessageEmbed()
	.setTitle("💍 | Casamento ")
	.setDescription("Desculpe me senhor, ou senhora, tanto faz, os casamentos são um pouco caros entende?São 5000 de dinheiro")
	.setColor("ff96bb")
let faltadin2 = new Discord.MessageEmbed()
	.setTitle("💍 | Casamento ")
	.setDescription("Desculpe me senhor, ou senhora, tanto faz, os casamentos são um pouco caros entende?São 5000 de dinheiro")
	.setColor("ff96bb")
let pedido = new Discord.MessageEmbed()
  .setTitle(':ring: | Casamento ')
  .setDescription(`**Bate o sino pequenino sino de...AAA N, esquece, peguei o pendrive errado,** *toca música de casamento* **agora ss, \n${pessoa} você aceita se casar com ${message.author}?**`)
  .setColor('ff96bb')
let final = new Discord.MessageEmbed()
	.setTitle("💍 | Casamento ")
	.setDescription("Oia que belo casal!Só n da chifre nela/e n viu?OUVIU?Att")
	.setColor("ff96bb")
let evo = new Discord.MessageEmbed()
  .setTitle(':ring: | Casamento ')
  .setDescription('Quando eu disse q o povo tava evoluindo, ngm acreditou né, MAAAS, fazer oq, o cara ta querendo colocar chifres no garoto ou garota')
  .setColor('ff96bb')
let comedordecasada = new Discord.MessageEmbed()
  .setTitle(':ring: | Casamento ')
  .setDescription('Que feio, querendo roubar ali o marido/esposa do cara/menina men, esse dai é o famoso/a comedos de casadas/os.Cuidado ein')
  .setColor('ff96bb')
//IF
if(!args[0]) {
	return message.channel.send(menc)
}
if(pessoa.id === client.user.id) {
	 return message.channel.send(botmarry)
}

if(pessoa.id === message.author.id) { 
			return message.channel.send(authormarry)
}
let marry = await db.fetch(`marry_${message.author.id}`)
let marry2 = await db.fetch(`marry_${pessoa.id}`)



if(marry === null) { 
    let money = db.get(`money_${message.author.id}`)
let money2 = db.get(`money_${pessoa.id}`) 
    if(money < 5000) { 
			return message.channel.send(faltadin)
		}
    if(money2 < 5000) {
			return message.channel.send(faltadin2)
		}
//COLETOR
      return message.channel.send(pedido)
      msg.react('💍')
      let reactions = (reaction, user) => reaction.emoji.name === '💍' && user.id === pessoa.id
      let coletor = msg.createReactionCollector(reactions)

coletor.on('collect', cp => {
  message.channel.send(final)
  db.set(`marry_${message.author.id}`, pessoa.id)
  db.set(`marry_${pessoa.id}`, message.author.id)    
  db.subtract(`money_${message.author.id}`, 5000)
  db.subtract(`money_${pessoa.id}`, 5000)
        
})

} else {
      return message.channel.send(evo)

if(marry2 === null) { 
      return;
} else {
message.channel.send(comedordecasada)

    }

  }
	}
}