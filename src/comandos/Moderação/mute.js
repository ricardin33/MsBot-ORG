const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  config: {
    nome: 'mute',
    aliases: ['mutar', 'calar'],
    descricao: 'Comando que serve para mutar uma pessoa para não poder mais falar no chat!',
		utilizacao: 'ms!mute @user',
    cooldown: 6
  },
  run: async (client, message, args) => {
	
  const mutehelp = new Discord.MessageEmbed()
  .setTitle("Mute")
  .setColor(`ff0000`)
  .addField("Forma Correta:", "Utilize ms!mute [Usuário] [Tempo]")
  .addField("Tempo", "Utilize (s = segundo) (m = minuto) (h = hora) (d = dia) ")
  .addField("Exemplo:", "ms!mute @Ricardinho 10m")
  .setTimestamp()
  .setFooter(`Olá ${message.author.username}`)
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
  let mutado = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!mutado) return message.channel.send(mutehelp);
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Eu não tenho as permissões adequadas!");
  if(mutado.hasPermission("ADMINISTRATOR")) return message.reply("Eu não consigo mutar este Usuário pois ele é administrador!");
  if(mutado.id === message.author.id) return message.channel.send("Você não pode se mutar!");
  let muterole = message.guild.roles.cache.find(role => role.name === "Mutado");
  if(!muterole){
message.channel.send("Por Favor Crie um cargo de nome **Mutado** retirando a permissão de" + "`" + `ENVIAR MENSAGENS` + "`")
    }
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Especifique Um tempo de mute!");
  const mute = new Discord.MessageEmbed()
  .setTitle("**Mute**")
  .setColor(`ff0000`)
  .addField("Usuário:", `${mutado}`, false)
  .addField("Autor:", `${message.author.username}`, false)
  .addField("Tempo:", `${ms(ms(mutetime))}`, false )
  .addField("Tag:", muterole, false)
  .setFooter("Usuário mutado com sucesso!")
  .setTimestamp()
	.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
  await(mutado.roles.add(muterole.id));
  message.reply(mute);
  setTimeout(function(){
    mutado.roles.remove(muterole.id);
    message.channel.send(`${message.author.username} | Como ja passou o tempo de mute de <@${mutado.id}> ele foi desmutado!`);
  }, ms(mutetime));
		}
		}