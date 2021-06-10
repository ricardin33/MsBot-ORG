const Discord = require('discord.js')
var firebase = require('firebase');
var database = firebase.database()
module.exports = {
  config: {
    nome: 'testlevel',                                                   
    descricao: 'Comando que serve para ver o perfil',    
		utilizacao: 'ms!daily',   
    cooldown: 6
  },
  run: async (client, message, args) => {
const Guild = client.guilds.cache.get(message.guild.id); // Getting the guild.
const Members = Guild.members.cache.map(member => member.id);
var topUserPostsRef = database.ref(`Servidor/745337964548194335/Levels`).child('Users').orderByChild("level");
topUserPostsRef.limitToLast(1).on("value", snapshot => {
  snapshot.forEach(data1 => {
		let user = client.users.cache.get(data1.key);
		let level = data1.val().level;
  });
});


var topUserPostsRef = database.ref(`Servidor/745337964548194335/Levels`);
topUserPostsRef.child('Users/').orderByValue("level").limitToLast(2).on("value", snapshot => {
		console.log(snapshot.key)
});
	}
}