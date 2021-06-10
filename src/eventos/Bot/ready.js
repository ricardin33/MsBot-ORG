/*
  O evento "ready" é o evento que é ativado quando o bot é ligado.
*/
	const express = require('express');
const app = express();
const db = require('quick.db');
const moment = require('moment')
moment.locale('pt-br')

module.exports = async (client) => { 

  console.log(`\nO bot ${client.user.tag} foi ligado com sucesso!\n`)
	console.log('Informações básicas!')
console.log(`
|---------------------------|
|       	MS BOT          |        
|---------------------------|
|  Inicializaçao | Status   
|---------------------------|
| Iniciado?      | ✅ Sim   
|---------------------------|
| Nome: | ${client.user.username}|
|---------------------------|
| Usuários: | ${client.users.cache.size}|
|---------------------------|
| Canais: | ${client.channels.cache.size}|
|---------------------------|
| Servidores: | ${client.guilds.cache.size}
|---------------------------|
| Comandos: | ${client.commands.size}
|---------------------------|`)
	let activities = [
			`💸 | MS Bot `,
			`🌟 | Versão 0.5`,
			`👮 | Utilize ms!help para obter ajuda`,
			`🧽 | Organizando ${client.channels.cache.size} canais!`,
			`🆘 | Ajudando ${client.users.cache.size} usuários!`,
			`🌐 | Sempre em atualização`,
			`🔥 | Meu Prefixo padrão é "ms!"`,
			`😜 | Possuo ${client.commands.size} Comandos!`
		],
	i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'STREAMING'
			}),
		3000
	);
	client.user.setStatus('online').catch(console.error);
};

