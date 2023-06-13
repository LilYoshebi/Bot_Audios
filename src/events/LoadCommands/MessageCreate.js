const { Events } = require('discord.js');
const modulo = require('../../utils/ActualizarPrefijo')

module.exports = {
    name: Events.MessageCreate,
    async execute(message, client) {
        try {
            const funtionActualizarPrefijo = modulo.funcion
            const prefix = funtionActualizarPrefijo()

            if (!message.content.startsWith(prefix) || message.author.bot) return;
            const arg = message.content.slice(prefix.length).trim().split(/ +/);
            const comand = arg.shift().toLocaleLowerCase()
    
            const cmd = client.commands.get(comand) || client.commands.find(c => c.aliases && c.aliases.includes(comand));

            if (cmd) {
                cmd.run(client, message, arg);
            }

        }catch(e) {
            console.error(e)
        }
    }
}