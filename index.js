const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
     console.log('Pycharm is rdy for testing great job making it work UvU')
})

client.login(config.token)
