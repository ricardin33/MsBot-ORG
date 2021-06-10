	const express = require('express');
const app = express();
const db = require('quick.db');
const moment = require('moment')
moment.locale('pt-br')

module.exports = async (warn) => { 
	 console.log(`warn: ${warn}`);
}