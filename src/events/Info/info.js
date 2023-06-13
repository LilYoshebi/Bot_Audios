const { Events, EmbedBuilder } = require('discord.js');
let { prefix } = require('../../../config.json');
const modulo = require('../../utils/ActualizarPrefijo')

module.exports = {
    name: Events.MessageCreate,
    async execute(message, client) {
        if (message.author.bot) return
        if (message.mentions.has(client.user)){

            const funtionActualizarPrefijo = modulo.funcion
            const prefix = funtionActualizarPrefijo()

            const embedInfo = new EmbedBuilder()
            .setColor(client.color)
            .setTitle(`El Bot esta funcionando con el prefijo  " **${prefix}** "`)
            .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` })
            .setTimestamp()
            .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` });

            message.channel.send({ embeds: [embedInfo] })
        }
    }
}