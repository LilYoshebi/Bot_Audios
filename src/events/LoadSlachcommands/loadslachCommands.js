
const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction, client) {
		if (!interaction.isChatInputCommand()) return;

		const command = client.slachcommands.get(interaction.commandName);

		if (!command) {
			console.error(`El comando ${interaction.commandName} no fue encontrado.`);
			return;
		}

		try {
			await command.execute(interaction, client);
		} catch (error) {
			console.error(`Error al ejecutar el comando ${interaction.commandName}`);
			console.error(error);
		}
	},
};