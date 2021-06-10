//FIREBASE LOGINN

var firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyDk9cjowt7U2Zd-l-NBjh026K9kLwpcwgc",
  authDomain: "zapbottemdetudo.firebaseapp.com",
  databaseURL: "https://zapbottemdetudo-default-rtdb.firebaseio.com",
  projectId: "zapbottemdetudo",
  storageBucket: "zapbottemdetudo.appspot.com",
  messagingSenderId: "950797764006",
  appId: "1:950797764006:web:825dcdbb8ee6ac8afabb67",
  measurementId: "G-49PJJT26Z9"
};
  firebase.initializeApp(firebaseConfig);
	var database = firebase.database()
	let token = process.env.TOKEN;






const fs = require("fs")
const express = require('express');
const app = express();
const moment = require('moment');
const config = require('./config.json');
const { getLyrics, getSong } = require('genius-lyrics-api');
const Discord = require('discord.js')
const { Client, Collection } = require('discord.js')
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	response.sendStatus(200);
});
app.listen(process.env.PORT);
const client = new Discord.Client({ws: { properties: { $browser: "Discord iOS" }, intents: require("discord.js").Intents.ALL}});
DisTube = require('distube');

['commands', 'aliases'].forEach(f => client[f] = new Collection());
['comandos', 'eventos'].forEach(f => require(`./src/handlers/${f}`)(client));
const levelCooldown = new Set();

client.on('message', async message => {
if(message.content.startsWith("ms!")) return;
	if(levelCooldown.has(message.author.id)) return;
if(message.channel.type === "DM") return; 
if(message.author.bot) return; 


let infolevel = database.ref(`Servidor/${message.guild.id}/Levels/Users/${message.author.id}`);
let onandfalse = database.ref(`Servidor/${message.guild.id}/Levels/Config/ON&FALSE`);
let gerarxp = 20
database.ref(`Servidor/${message.guild.id}/Levels/Users/${message.author.id}`)
.once('value').then(async function(db) {
	if(db.val() == null) {
		database.ref(`Servidor/${message.guild.id}/Levels/Users/${message.author.id}`)
		.set({
			xp: 0,
			level: 1
		})
	}
		
try{
	if(db.val().xp >= db.val().level * 100) {
		database.ref(`Servidor/${message.guild.id}/Levels/Users/${message.author.id}`)
	.update({
		xp: 0,
		level: db.val().level + 1
});
	

		onandfalse.once('value').then(async function(database) {
if(database.val().verification === true) {
	return message.channel.send(`Parabéns, ${message.author}! Você upou para o nível ${db.val().level + 1}, Parabéns!`);
} else return;


})
		} else {
	levelCooldown.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          levelCooldown.delete(message.author.id);
        }, 1500);
database.ref(`Servidor/${message.guild.id}/Levels/Users/${message.author.id}`)
.update({
	xp: db.val().xp + gerarxp
})
		}
} catch(err) {
	return;
}
}) 
		
		
})

/* 
											Firebase Null Schemas
*/			
client.on('message', async message => {			
database.ref(`Servidor/${message.guild.id}/Levels/Config/ON&FALSE`)
.once('value').then(async function(db) {
if(db.val() == null) {
	database.ref(`Servidor/${message.guild.id}/Levels/Config/ON&FALSE`)
	.set({
		verification: false
	})
}
})

	database.ref(`Usuário/${message.author.id}/Economia`)
.once('value').then(async function(db) {
if(db.val() == null) {
	database.ref(`Usuário/${message.author.id}/Economia`)
	.set({
		dinheiro: 0,
		banco: 0,
		cooldown: 0,
		cooldownDaily: 0
	})
}
})

database.ref(`Servidor/${message.guild.id}/Levels/Config/LevelConfigs`)
})
/* 
												Firebase Schemas
*/

const { APIMessage, Message } = require('discord.js')

 Message.prototype.quote = async function (content, options) {
  const message_reference = {
    message_id: (
      !!content && !options
        ? typeof content === 'object' && content.messageID
        : options && options.messageID
    ) || this.id,
    message_channel: this.channel.id
  }

  const allowed_mentions = {
    parse: ['users', 'roles', 'everyone'],
    replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
  }

  const { data: parsed, files } = await APIMessage
    .create(this, content, options)
    .resolveData()
    .resolveFiles()

  this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference, allowed_mentions },
    files
  })
}

const distube = new DisTube(client, {
    youtubeCookie: "",
    searchSongs: true, 
    emitNewSongOnly: true, 
    highWaterMark: 1 << 25, 
    leaveOnEmpty: true, 
    leaveOnFinish: true, 
    leaveOnStop: true,
    customFilters:
    {
        "clear": "dynaudnorm=f=200",
        "bassboost": "bass=g=20,dynaudnorm=f=200",
        "8d": "apulsator=hz=0.08",
        "vaporwave": "aresample=48000,asetrate=48000*0.8",
        "nightcore": "aresample=48000,asetrate=48000*1.25",
        "phaser": "aphaser=in_gain=0.4",
        "purebass": "bass=g=20,dynaudnorm=f=200,asubboost",
        "tremolo": "tremolo",
        "vibrato": "vibrato=f=6.5",
        "reverse": "areverse",
        "treble": "treble=g=5",
        "surrounding": "surround",
        "pulsator": "apulsator=hz=1",
        "subboost": "asubboost",
        "karaoke": "stereotools=mlev=0.03",
        "flanger": "flanger",
        "gate": "agate",
        "haas": "haas",
        "mcompand": "mcompand"
    }
})
// add the trackStart event so when a song will be played this message will be sent
const filters = [
    "mcompand",
    "gate",
    "haas",
    "pulsator",
    "surrounding",
    "clear",
    "8d",
    "bassboost",
    "echo",
    "karaoke",
    "nightcore",
    "vaporwave",
    "flanger",
    "subboost",
    "phaser",
    "tremolo",
    "vibrato",
    "reverse",
    "purebass",
    "treble"
];
client.on("ready", () => {
    console.log("Estou Online");
});

client.on("message", async (message) => {
if (message.author.bot) return;
prefix = "ms!"
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift();
if (command == "play" || command === "p"){
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return embedbuilder(client, message, "ff0000", "Erro!", "Por Favor esteja em um canal de voz para que eu possa tocar a música!")
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return embedbuilder(client, message, "ff0000", "Erro!", "Eu não tenho permissão para conectar a este canal de voz! Por favor reveja minhas permissões!")
        if (!permissions.has('SPEAK')) return embedbuilder(client, message, "ff0000", "Erro!", "Eu não tenho permissão para falar neste canal de voz! Por favor reveja minhas permissões!")
	if(!args.join(" ")) {
		embedbuilder(client, message, "ff0000", "Forma Errada", `> Utilize ${prefix}play (nome da musica OU link)`)
	} else {
    embedbuilder(client, message, "ff0000", "Procurando...", `Musica fornecida \`${args.join(' ')}\` `).then(msg => {
			setTimeout(function () {
		embedbuilder(client, message, "ff0000", "Busca Feita!", "Envie um Número ate 15 para escolher qual música você quer escutar!")
			}, 700)
		})
					distube.play(message, args.join(" "));
	}
}
    if(command === "stop" || command === "leave"){
            embedbuilder(client, message, "ff0000", "Música Parada", `Saindo do canal!`)
            distube.stop(message);
        }
        if (command == "skip" || command == 'skipar') {
        distube.skip(message);
        embedbuilder(client, message, "ff0000", "Skip!", `Música Skipada!`)
        }
        if(filters.includes(command)) {
            let filter = distube.setFilter(message, command);
            return embedbuilder(client, message, "ff0000", "Filtro Adicionado!", filter)
        }
        if (command === "loop" || command === "repetir"){
            if(0 <= Number(args[0]) && Number(args[0]) <= 2){
                distube.setRepeatMode(message,parseInt(args[0]))
                embedbuilder(client, message, "ff0000", "Modo Loop setado para", `${args[0].replace("0", "OFF").replace("1", "Repetir Música").replace("2", "repetir Fila")}`)
            }
            else{
                embedbuilder(client, message, "ff0000", "Forma errada!", `Por favor use o numero 0, 1 ou 2 após o comando!   |   *(0: Desabilitado, 1: Repetir Música, 2: repetir a Fila)*`)
            }
        }
			 if (command == "np" || command === "song") {
        let queue = distube.getQueue(message);
        if (!queue) return embedbuilder(client, message, "ff0000", "Não está tocando nada!")
       
        let cursong = queue.songs[0];

        return embedbuilder(client, message, "#ff0000", "Música Atual!", `[${cursong.name}](${cursong.url})\n\nTocado por: \`${(Math.floor(queue.currentTime / 1000 / 60 * 100) / 100).toString().replace(".", ":")} Minutos\`\n\nDuração: \`${cursong.formattedDuration}\``, cursong.thumbnail)
    }
    if (command == "pause"|| command == "pausar") {
        if(!distube.isPlaying(message)) {
						return message.channel.send("você tem que estar ouvindo uma música para pausa-la!")
				} 
				if(distube.isPaused(message) && !distube.isPlaying(message)) {
					return message.channel.send("> A música ja está pausada!")
				} else {
				embedbuilder(client, message, "#ff0000", "Música Pausada!")
        return distube.pause(message);
				}
    }
		if (command == "resume" || command == "r"|| command == "voltar") {
				if(!distube.isPaused(message)) {
				message.channel.send('> A música não está pausada!')
			} else {
        embedbuilder(client, message, "#ff0000", "Resume!")
        return distube.resume(message);
			}
    }
        if (command == "queue" || command === "fila") {
            let queue = distube.getQueue(message);
        if (!queue) return embedbuilder(client, message, "ff0000", "Não possui nenhuma música na fila!")
            let curqueue = queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).join("\n");
            return  embedbuilder(client, message, "ff0000", "Fila", curqueue)
        }
        if (command == "autoplay") {
						if(!distube.isPlaying(message)) {
						message.channel.send("você tem que estar ouvindo uma música para ativar ou desativar o autoplay!")
					} else {
            let mode = distube.toggleAutoplay(message);
            message.channel.send("Autoplay setada para `" + (mode ? "On" : "Off") + "`");
				}
        }
        if (command == "volume"){
        if(isNaN(args[0]) === true) {
           return message.channel.send('> Por favor envie em numeros!')
        }
        if(args[0] > 100) {
            return message.channel.send('Você não pode colocar numeros acima de 100!')
        }
        distube.setVolume(message, args[0]);
        embedbuilder(client, message, "ff0000", "Volume!", `Você alterou o volume para \`${args[0]} %\``)
    }
        if (command == "pular") {
            let queue = distube.getQueue(message);
            if(0 <= Number(args[0]) && Number(args[0]) <= queue.songs.length){
                embedbuilder(client, message, "ff0000", "Pulado", `Pulei ${parseInt(args[0])} Musicas!`)
                return distube.jump(message, parseInt(args[0]))
                .catch(err => message.channel.send("Número Inválido"));
            }
            else{
                embedbuilder(client, message, "ff0000", "Forma Errada!", `Por favor use o numero de musicas que você quer pular entre **1** e **${distube.getQueue(message).length}**`)
            }
        }
















})
const status = (queue) => `Volume: \`${queue.volume}\` | Filtro: \`${queue.filter || "OFF"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "Toda Fila" : "Essa Música" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
//distube
distube
    .on("playSong", async (message, queue, song) => {
        try{ playsongyes(message, queue, song);
        }catch (error){
            console.error
         }
    })
     .on("addSong", (message, queue, song) => {
        embedbuilder(client, message, "ff0000", "Nova Música adicionada", `Música: \`${song.name}\`  -  \`${song.formattedDuration}\` \n\nPedido Por: ${song.user}`)
     })
     .on("playList", (message, queue, playlist, song) => {
        embedbuilder(client, message, "ff0000", "Tocando Playlist", `Playlist: \`${playlist.title}\`  -  \`${playlist.total_items} Musicas\` \n\nPedido Por: ${song.user}\n\nstarting playing Song: \`${song.name}\`  -  \`${song.formattedDuration}\`\n${status(queue)}`)
     })
     .on("addList", (message, queue, song) => {
        embedbuilder(client, message, "ff0000", "Playlist Adicionada", `Playlist: \`${playlist.title}\`  -  \`${playlist.total_items} Musicas\` \n\nPedido Por: ${song.user}`)
     })
     .on("searchResult", (message, result) => {
        let i = 0;
        embedbuilder(client, message, "ff0000", "", `**Escolha uma das músicas abaixo**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n\n")}\n*Escreva algo em menos de um 1 minuto!*`)
    })
     // DisTubeOptions.searchSongs = true
     .on("searchCancel", (message) =>  embedbuilder(client, message, "ff0000", `Procura Cancelada!`, "")
     )
     .on("error", (message, err) => {
			 embedbuilder(client, message, "ff0000", "Ocorreu um erro:", err)
     
		 console.log(err)
		 })
		.on("initQueue", queue => {
        try{   queue.autoplay = false;
        queue.volume = 100;
        queue.filter = filters[5];
    }catch (error){
        console.error
     }
    })
		.on("noRelated", message => embedbuilder(client, message, "ff0000", "Erro Ao Executar a Música!", "Infelizmente não consegui executar esta música!"))
    .on("empty", message => message.channel.send("Este Canal esta vazio!. Saindo ..."))
    function embedbuilder(client, message, color, title, description){
        let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setFooter(`${client.user.username} | Music System`, client.user.displayAvatarURL())
        if(title) embed.setTitle(title);
        if(description) embed.setDescription(description);
        return message.channel.send(embed);
    }
		function lyricsEmbed(message, song) {
    try{   let embeds = [];
    let k = 1000;
  
    for (let i = 0; i < lyrics.length; i += 1000) {
      const current = lyrics.slice(i, k);
      let j = i;
      k += 1000;
      const embed = new Discord.MessageEmbed()
        .setTitle("Lyrics - "+ title)
        .setURL(song.url)
        .setColor("#fffff0")
        .setDescription(current)
      embeds.push(embed);
    }
    return embeds;
}catch (error){
    console.error
 }
}  


async function playsongyes(message, queue, song) {
    try{  let embed1 = new Discord.MessageEmbed()

        .setColor("#ff0000")
        .setTitle("DJ Ms Tocando mais Uma!!")
        .setDescription(`Música: [\`${song.name}\`](${song.url})`)
        .addField("⏱ Duração:", ` \`${queue.formattedCurrentTime} / ${song.formattedDuration}\``, true)
        .addField("🌀 Fila:", `\`${queue.songs.length} Musica(s) - ${queue.formattedDuration}\``, true)
        .addField("🔊 Volume:", `\`${queue.volume} %\``, true)
        .addField("♾ Loop:", `  \`${queue.repeatMode ? queue.repeatMode === 2 ? "✅ Fila" : "✅ Musica" : "❌"}\``, true)
        .addField("↪️ Autoplay:", `\`${queue.autoplay ? "✅" : "❌"}\``, true)
        .addField("❔ Filtro:", `\`${queue.filter || "❌"}\``, true)
        .setFooter(`${client.user.username} | Music System`, client.user.displayAvatarURL())
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({ dynamic: true }),"https://harmonymusic.tk")
        .setThumbnail(song.thumbnail)

    var playingMessage = await message.channel.send(embed1)

    db.set(`playingembed_${message.guild.id}`, playingMessage.id)
    db.set(`playingchannel_${message.guild.id}`, message.channel.id)
    try {
        await playingMessage.react("⏭");
        await playingMessage.react("⏹");
        await playingMessage.react("🔉");
        await playingMessage.react("🔊");
        await playingMessage.react("◀️");
        await playingMessage.react("▶️");
    }
    catch (error) {
        message.reply("Sem Permissão para editar reações! por favor reveja-as")
        console.log(error);
    }

    const filter = (reaction, user) =>
        ["⏭", "⏹", "🔉", "🔊", "◀️", "▶️"].includes(reaction.emoji.name) && user.id !== message.client.user.id;
    var collector = playingMessage.createReactionCollector(filter, {
        time: song.duration > 0 ? song.duration * 1000 : 600000
    });
    collector.on("collect", async (reaction, user) => {
        if (!queue) return;
        const member = message.guild.member(user);
        if (member.voice.connection && member.voice.connection !== member.guild.me.voice.connection) return;

        switch (reaction.emoji.name) {
            case "⏭":
                distube.skip(message);
                embedbuilder(client, message, "#ff0000", "SKIPPED!", `Skipei a Música`).then(msg => msg.delete({ timeout: 3000 }).catch(console.error))
                playingMessage.reactions.removeAll().catch(console.error);
                playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
                break;

            case "⏹":
                distube.stop(message);
                playingMessage.reactions.removeAll().catch(console.error);
                playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
                embedbuilder(client, message, "ff0000", "Stop!", `Sai do canal`).then(msg => msg.delete({ timeout: 3000 }).catch(console.error))
                break;

            case "🔉":

                reaction.users.remove(user).catch(console.error);
                await distube.setVolume(message, Number(queue.volume) - 10);
                embedbuilder(client, message, "#ff0000", "Volume!", `Reduzi o volume para \`${queue.volume}\``).then(msg => msg.delete({ timeout: 3000 }).catch(console.error))
                await playingMessage.edit(curembed(message)).catch(console.error);
                break;

            case "🔊":

                reaction.users.remove(user).catch(console.error);
                await distube.setVolume(message, Number(queue.volume) + 10);
                embedbuilder(client, message, "#ff0000", "Volume!", `Aumentei o volume para \`${queue.volume}\``).then(msg => msg.delete({ timeout: 3000 }).catch(console.error))
                await playingMessage.edit(curembed(message)).catch(console.error);
                break;

            case "◀️":

                reaction.users.remove(user).catch(console.error);
                let seektime = queue.currentTime - 10000;
                if (seektime < 0) seektime = 0;
                await distube.seek(message, Number(seektime));
                playingMessage.edit(curembed(message)).catch(console.error);
                embedbuilder(client, message, "#ff0000", "Retroceder!", `Retrocedi a música por \`-10 seconds\``).then(msg => msg.delete({ timeout: 3000 }).catch(console.error))

                break;

            case "▶️":
                reaction.users.remove(user).catch(console.error);
                let seektime2 = queue.currentTime + 10000;
                if (seektime2 >= queue.songs[0].duration * 1000) { seektime2 = queue.songs[0].duration * 1000 - 1; }
                console.log(seektime2)
                await distube.seek(message, seektime2);
                playingMessage.edit(curembed(message)).catch(console.error);
                embedbuilder(client, message, "#ff0000", "Adiantar!", `Adiantei a música por \`+10 seconds\``).then(msg => msg.delete({ timeout: 3000 }).catch(console.error))
                break;

            default:
                reaction.users.remove(user).catch(console.error);
                break;
        }
    });
    collector.on("end", () => {
        playingMessage.reactions.removeAll().catch(console.error);
        playingMessage.delete({ timeout: client.ws.ping }).catch(console.error);
    })
}catch (error){
    console.error
 }
}

function curembed(message) {
    try{  let queue = distube.getQueue(message); //get the current queue
    let song = queue.songs[0]; 
    embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("DJ Ms Tocando Mais Uma!!")
        .setDescription(`Música: [\`${song.name}\`](${song.url})`)
        .addField("⏱ Duração:", `\`${queue.formattedCurrentTime} / ${song.formattedDuration}\``, true)
        .addField("🌀 Fila:", `\`${queue.songs.length} Musica(s) - ${queue.formattedDuration}\``, true)
        .addField("🔊 Volume:", `\`${queue.volume} %\``, true)
        .addField("♾ Loop:", `\`${queue.repeatMode ? queue.repeatMode === 2 ? "✅ Fila" : "✅ Musica" : "❌"}\``, true)
        .addField("↪️ Autoplay:", `\`${queue.autoplay ? "✅" : "❌"}\``, true)
        .addField("❔ Filtro:", `\`${queue.filter || "❌"}\``, true)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({ dynamic: true }),"https://harmonymusic.tk")
        .setThumbnail(song.thumbnail)
    return embed; //sending the new embed back
}catch (error){
    console.error
 }
}



// LEVEL confi
client.login(config.token);
