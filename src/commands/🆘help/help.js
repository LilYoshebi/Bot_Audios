const { EmbedBuilder } = require('discord.js');
const modulo = require('../../utils/ActualizarPrefijo')

module.exports = {
  name: "help",
  aliases: ["ayuda"],
  description: "Te informa sobre los comandos",
  run: async (client, message, args) => {
    const funtionActualizarPrefijo = modulo.funcion
    const prefix = funtionActualizarPrefijo()

    const embedHelp = new EmbedBuilder()
    .setTitle("Todos los comandos")
    .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` })
    .addFields(
      {name: `${prefix}help`, value: "Te informa sobre los comandos"},
      {name: `${prefix}aliases`, value: "Te informa sobre las formas de llamar a los comandos"},
      {name: `${prefix}ping`, value: "Este comando te da la latencia del Bot"},
      {name: `${prefix}prefix`, value: "Sirve para cambiar el Preijo del Bot en el Servidor"},
      {name: `${prefix}coleccion`, value: "Muestra la coleccion de audios"},
      {name: `${prefix}repro`, value: "Reproduce un audio de la coleccion"},
      {name: `${prefix}remove`, value: "Elimina un audio de la coleccion"},

      )
    .setTimestamp()
    .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` });

    message.channel.send({ embeds: [embedHelp] })
  }
}