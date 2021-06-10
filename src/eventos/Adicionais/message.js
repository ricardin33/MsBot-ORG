const { Collection, MessageEmbed } = require('discord.js')
const db = require('quick.db')
	let firebase = require('firebase')
		var database = firebase.database()
const cooldowns = new Collection()
module.exports = async (client, message) => { 

let prefixo = database.ref(`Servidor/${message.guild.id}/Config/Prefix`);
		prefixo.once('value').then(async function(db) {
			let prefix = "ms!"
			if(db.val() != null) {
				prefix = db.val().prefix;
			}
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    /*
      Exemplo:  !say oi, eu sou um bot muito daora.
                | |  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                | |        argumentos (args)
                | |
                | |_ comando
                |_ prefixo 
    */



    // COOLDOWNS (https://discordjs.guide/command-handling/adding-features.html#cooldowns)

    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName))

    if (command) {
      if (!cooldowns.has(command.config.nome)) cooldowns.set(command.config.nome, new Collection())

      const now = Date.now()
      const timestamps = cooldowns.get(command.config.nome)
      const cooldown = (command.config.cooldown || 0) * 1000

      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldown;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message
              .reply(`você precisa esperar mais ${timeLeft.toFixed(1)} segundo(s) até poder usar esse comando novamente.`)
              .then(msg => msg.delete({ timeout: timeLeft * 1000 }).catch(e => console.log('Ocorreu um erro tentando apagar a mensagem do bot.')))
              .catch(e => console.log('Ocorreu um erro tentando enviar a mensagem no chat.'))
        }
      }

      /*
        NOTA: É sempre bom usarmos .catch() para que o terminal/console não fique cheio de erros enormes.
      */

      timestamps.set(message.author.id, now)
      setTimeout(() => timestamps.delete(message.author.id), cooldown)
try{
      command.run(client, message, args) // Executar o comando.
	} catch (err) {
		message.channel.send(
			` <:outage:556685322227023904> | Infelizmente o comando ` +
				`***_(${comando})_***` +
				` não existe!`)
			message.react(`556685322227023904`)	
	  
	}
    } else {
			if(commandName === "play" || commandName === "stop" || commandName === "leave" || commandName === "skip" || commandName === "skipar" || commandName === "loop" || commandName === "repetir" || commandName === "np" || commandName === "song" || commandName === "pause" || commandName === "resume" || commandName === "r" || commandName === "voltar" || commandName === "queue" || commandName === "fila" || commandName === "autoplay" || commandName === "volume" || commandName === "pular") return ;
			let msg = await message.channel.send(
			` 🔴 | Infelizmente o comando ` +
				`***_(${commandName})_***` +
				` não existe!`)
			msg.react(`🔴`)	
		}
		})
}