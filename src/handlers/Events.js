const fs = require('fs');
require('colors');

module.exports = async (client) => {
    try {
        console.log(`
╔═══════════════════════════════════════════════════╗
║                                                   ║
║   /-/ Handler de Eventos /-/ por LilYoshebi /-/   ║
║                                                   ║
╚═══════════════════════════════════════════════════╝`.yellow)
    }catch(e){}

    try {
        let cantidad = 0;
        const eventFolder = fs.readdirSync('./src/events/')
        for (folder of eventFolder) {
            const files = fs.readdirSync(`./src/events/${folder}`).filter(file => file.endsWith(".js"));
            for (file of files) {
                try {
                    const event = require(`../events/${folder}/${file}`);
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(...args));
                    } else {
                        client.on(event.name, (...args) => event.execute(...args, client));
                    }
                    console.log(` 🟩 Events - ${file} Cargado.`.green);
                }catch(e) {
                    console.log(` 🟥 Events - ${file} No Pudo Ser Cargado.`.red);
                }
            }
        }
    }catch(e) {
        console.error(e);
    }
}