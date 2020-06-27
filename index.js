const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const gugu = require('./gugu.js');
const app = express()

client.once('ready', () => {
  console.log('Domingoooooo Legal!')
})

client.on('message', (message) => {
  console.log(message.content)
  if (message.content === 'EU QUERO UM') {
    message.channel.send(gugu.naMinhaCasa());
  }
  if (message.content === '!ping') {
    message.channel.send('Pong karalhon!')
  }
})

client.login(process.env.TOKEN)

app.listen(process.env.PORT, () => {
  console.log(`O gugu bateu na sua porta ${process.env.PORT}`)
})
