const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "aliases",
  aliases: ["alias"],
  description: "Te informa sobre las formas de llamar a los comandos",
  run: async (client, message, args) => {
    const embedAliases = new EmbedBuilder()
    .setTitle("Todas las formas de llamar a los  comandos:")
    .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` })
    .addFields(
        {name: "**• help**", value: "ayuda", inline: false},
        {name: "**• Aliases**", value: "alias", inline: false},
        {name: "**• ping**", value: "ms", inline: false},
        {name: "**• prefix**", value: "prefijo", inline: false},
        {name: "**• save**", value: "guardar", inline: false},
        {name: "**• remove**", value: "delete", inline: true},
        {name: "⬅️", value: "eliminar", inline: true},
        {name: "**• coleccion**", value: "lista", inline: false},
        {name: "**• play**", value: "p", inline: true},
        {name: "⬅️", value: "r", inline: true},
        {name: "**• leave**", value: "salir", inline: false},
        )
    .setTimestamp()
    .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` });

    message.channel.send({ embeds: [embedAliases] })
  }
}