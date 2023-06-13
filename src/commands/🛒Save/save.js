const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const { fileURLToPath } = require('url');

module.exports = {
    name: "save",
    aliases: ["guardar"],
    description: "Añade el audio adjuntado a la coleccion",
    run: async (client, message, arg) => {
        if(!message.attachments.size) return message.channel.send(`❌ ${message.author} No se adjunto ningun archivo de audio`);

        const attachment = message.attachments.first();
        if(!attachment.name.toLowerCase().endsWith(".mp3")) return message.channel.send(`❌ ${message.author} El archiivo adjuntado debe ser .mp3`);

        if(!arg[0]) return message.channel.send(`❌ ${message.author} Tienes que especificar el nombre con el que se guardara`);

        try {
            const filePath = path.join(__dirname, `../../../audios/${arg[0]}.mp3`);
            const fileStream = fs.createWriteStream(filePath);
            const audioFile = await fetch(attachment.url);

            await pipeline(audioFile.body, fileStream, (error) => {
                if (error) {
                    console.error(error);
                }else {
                    console.log(`${arg[0]}.mp3 se guardo con exito`);
                }
            });

            fileStream.on('finish', () => {
                fileStream.close();
                message.channel.send(`El archivo adjuntado se ha guardado con exito como: ${arg}`);
            })
        }catch(e) {
            console.error(e);
        }
    }
}