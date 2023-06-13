const { getVoiceConnection, joinVoiceChannel, createAudioResource, createAudioPlayer, AudioPlayerStatus } = require('@discordjs/voice');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: "repro",
    aliases: ["p", "r"],
    description: "Reproduce un audio de la coleccion",
    run: async (client, message, arg) => {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send(`❌ ${message.author} Tienes que estar en un canal de voz`)

        const filePath = path.join(__dirname, `../../../audios/${arg[0]}.mp3`);
        if(!fs.existsSync(filePath)) return message.channel.send(`❌ ${message.author} El archivo ${arg[0]}.mp3 no existe`);

        const connection = getVoiceConnection(voiceChannel.guild.id);
        if (!connection) {
            try {
                await joinVoiceChannel({
                    channelId: voiceChannel.id,
                    guildId: voiceChannel.guild.id,
                    adapterCreator: voiceChannel.guild.voiceAdapterCreator
                  });
            }catch(e) {
                console.error("Error al intentar conectar el Bot al canal de audio", e);
            }
        }

        try {
            const connection = getVoiceConnection(voiceChannel.guild.id);
            const resource = createAudioResource(filePath);
            const player = createAudioPlayer();
            player.play(resource);
            connection.subscribe(player);

            const interval = setInterval(() => {
                if (message.member.voice.channel.members.size === 1) {
                    clearInterval(interval);
                    connection.destroy();
                    message.channel.send("Me habeis dejado solo🥹");
                }
            }, 60000);
        }catch(e) {
            console.error("Fallo al reproducir el audio", e);
        } 
    }
}
