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
            {name: ` **${funcion(0)}**`, value: ` `},
            {name: ` **${funcion(1)}**`, value: ` `},
            {name: ` **${funcion(2)}**`, value: ` `},
            {name: ` **${funcion(3)}**`, value: ` `},
            {name: ` **${funcion(4)}**`, value: ` `},
            {name: ` **${funcion(5)}**`, value: ` `},
            {name: ` **${funcion(6)}**`, value: ` `},
            {name: ` **${funcion(7)}**`, value: ` `},
            {name: ` **${funcion(8)}**`, value: ` `},
            {name: ` **${funcion(9)}**`, value: ` `},
            {name: ` **${funcion(10)}**`, value: ` `},
            {name: ` **${funcion(11)}**`, value: ` `},
            {name: ` **${funcion(12)}**`, value: ` `},
            {name: ` **${funcion(13)}**`, value: ` `},
            {name: ` **${funcion(14)}**`, value: ` `},
            {name: ` **${funcion(15)}**`, value: ` `},
            {name: ` **${funcion(16)}**`, value: ` `},
            {name: ` **${funcion(17)}**`, value: ` `},
            {name: ` **${funcion(18)}**`, value: ` `},
            {name: ` **${funcion(19)}**`, value: ` `},
            {name: ` **${funcion(20)}**`, value: ` `},
            {name: ` **${funcion(21)}**`, value: ` `},
            {name: ` **${funcion(22)}**`, value: ` `},
            {name: ` **${funcion(23)}**`, value: ` `},
            {name: ` **${funcion(24)}**`, value: ` `},
            )
        .setTimestamp()
        .setFooter({ text: `${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}` });

        await message.channel.send({ embeds: [embedLista] });
    }
}
