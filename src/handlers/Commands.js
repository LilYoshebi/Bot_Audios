const fs = require('fs');
require('colors');

module.exports = (client) => {
    try {
        console.log(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║   /-/ Handler de Comandos /-/ por LilYoshebi /-/   ║
║                                                    ║
╚════════════════════════════════════════════════════╝`.yellow)
    }catch{}

    try {
        const CommandFolder = fs.readdirSync('./src/commands/');
        for (folder of CommandFolder) {
            const files = fs.readdirSync(`./src/commands/${folder}/`).filter(files => files.endsWith(".js"));
            try {
                for (commadFile of files) {
                    const command = require(`../commands/${folder}/${commadFile}`);
                    client.commands.set(command.name, command);
                    if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach((alias) => client.aliases.set(alias, command.name));
                    console.log(` 🟩 Comando - ${commadFile} Cargado.`.green);
                }
            }catch(e) {
                console.log(` 🟥 Comando - ${commadFile} No Pudo Ser Cargado.`,e.red);
            }
        }
    }catch(e) {
        console.error(e);
    }
}