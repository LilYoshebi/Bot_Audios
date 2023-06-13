const fs = require("fs");
const { REST, Routes } = require("discord.js");
require("colors");
const { token, clientId, guildId } = require("../../config.json");

const commands = [];

const slachCommandsFiles = fs.readdirSync("./src/slachcommands").filter(files => files.endsWith(".js"));

for (const files of slachCommandsFiles) {
    const slach = require(`../slachcommands/${files}`);
    commands.push(slach.data.toJSON())
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
	try {
		console.log(`Se van a cargar ${commands.length} [SlachCommands]`.yellow);
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);
		console.log(`🟩 ${data.length} [SlachCommands] Caragdos Con Exito.`.green);
	} catch (e) {
		console.error(e);
	}
})();

