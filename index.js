const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const app = express()

client.once('ready', () => {
  console.log('Domingoooooo Legal!')
})

client.on('message', (message) => {
  console.log(message.content)

  if (message.content === '!ping') {
    message.channel.send('Pong karalhon!')
  }
})

client.login(process.env.TOKEN)

app.listen(process.env.PORT, () => {
  console.log(`O gugu bateu na sua porta ${process.env.PORT}`)
})
