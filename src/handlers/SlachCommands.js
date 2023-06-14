const fs = require('fs');
const path = require('path')
require('colors');

module.exports = async (client) => {
    try {
        console.log(`
╔═════════════════════════════════════════════════════════╗
║                                                         ║
║   /-/ Handler de SlachCommands /-/ por LilYoshebi /-/   ║
║                                                         ║
╚═════════════════════════════════════════════════════════╝`.yellow)
    }catch{}

    try {
        const filesPath = path.join(__dirname, '../slachcommands')
        const files = fs.readdirSync(filesPath).filter(file => file.endsWith(".js"));
        for (file of files) {
            try {
                slachcommand = require(`../slachCommands/${file}`);
                client.slachcommands.set(slachcommand.data.name, slachcommand);
                console.log(` 🟩 SlachCommand - ${slachcommand.data.name} Cargado.`.green);
            }catch(e) {
                console.log(` 🟥 SlachCommand - ${slachcommand.data.name} No Pudo Ser Cargado.`.red);
            }
        }
    }catch(e) {
        console.error(e);
    }
}