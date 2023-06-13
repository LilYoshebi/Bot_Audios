const fs = require('fs');
const path = require('path');

module.exports ={
    name: "remove",
    aliases: ["delete", "eliminar"],
    description: "Elimina un audio de la coleccion",
    run: async (client, message, arg) => {
        if(!arg[0]) return message.channel.send(`❌ ${message.author} Tienes que especificar un audio`);

        const filePath = path.join(__dirname, `../../../audios/${arg[0]}.mp3`);
        if(!fs.existsSync(filePath)) return message.channel.send(`❌ ${message.author} El archivo ${arg[0]}.mp3 no existe`);

        try {
            fs.unlinkSync(filePath);
            message.channel.send(`El archivo ${arg[0]}.mp3 se elimino correctamente`)
        }catch(e) {
            console.error(`Error al eliminar el audio ${arg[0]}.mp3`, e);
        }

    }
}