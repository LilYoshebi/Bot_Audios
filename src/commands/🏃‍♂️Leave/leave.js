const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: "leave",
    aliases: ["salir"],
    description: "Salir del canal de voz",
    run: async (client, message, arg) => {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send(`❌ ${message.author} No estás en un canal de voz.`);

        const connection = getVoiceConnection(voiceChannel.guild.id);
        if (!connection) return message.channel.send(`❌ ${message.author} El bot no está en un canal de voz.`);

        try {
            connection.destroy();
            message.channel.send(`El bot ha salido del canal de voz.`);
        } catch (error) {
            console.error("Ocurrió un error al intentar salir del canal de voz:", error);
            message.channel.send(`❌ Ocurrió un error al intentar salir del canal de voz.`);
        }
    }
};