const { EmbedBuilder } = require('discord.js')
const { funcion } = require('../../utils/coleccion')

module.exports = {
    name: "coleccion",
    aliases: ["lista"],
    description: "Muestra la coleccion de audios",
    run: async (client, message, arg) => {

        let embedLista = new EmbedBuilder()
        .setTitle('Todos Los Audios Disponibles:')
        .setDescription("Mas Audios en Voicy")
        .setURL('https://www.voicy.network/')
        .addFields(
            {name: ` **${funcion(0)}**`, value: ` `, inline: true},
            {name: ` **${funcion(1)}**`, value: ` `, inline: true},
            {name: ` **${funcion(2)}**`, value: ` `, inline: true},
            {name: ` **${funcion(3)}**`, value: ` `, inline: true},
            {name: ` **${funcion(4)}**`, value: ` `, inline: true},
            {name: ` **${funcion(5)}**`, value: ` `, inline: true},
            {name: ` **${funcion(6)}**`, value: ` `, inline: true},
            {name: ` **${funcion(7)}**`, value: ` `, inline: true},
            {name: ` **${funcion(8)}**`, value: ` `, inline: true},
            {name: ` **${funcion(9)}**`, value: ` `, inline: true},
            {name: ` **${funcion(10)}**`, value: ` `, inline: true},
            {name: ` **${funcion(11)}**`, value: ` `, inline: true},
            {name: ` **${funcion(12)}**`, value: ` `, inline: true},
            {name: ` **${funcion(13)}**`, value: ` `, inline: true},
            {name: ` **${funcion(14)}**`, value: ` `, inline: true},
            {name: ` **${funcion(15)}**`, value: ` `, inline: true},
            {name: ` **${funcion(16)}**`, value: ` `, inline: true},
            {name: ` **${funcion(17)}**`, value: ` `, inline: true},
            {name: ` **${funcion(18)}**`, value: ` `, inline: true},
            {name: ` **${funcion(19)}**`, value: ` `, inline: true},
            {name: ` **${funcion(20)}**`, value: ` `, inline: true},
            {name: ` **${funcion(21)}**`, value: ` `, inline: true},
            {name: ` **${funcion(22)}**`, value: ` `, inline: true},
            {name: ` **${funcion(23)}**`, value: ` `, inline: true},
            {name: ` **${funcion(24)}**`, value: ` `, inline: true},
            )
        .setTimestamp()
        .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` });

        await message.channel.send({ embeds: [embedLista] });
    }
}
