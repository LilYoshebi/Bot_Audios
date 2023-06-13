const fs = require("fs");
const path =require('path')
const { IdAdmins } = require("../../../config.json");
const modulo = require('../../utils/ActualizarPrefijo')

module.exports = {
    name: "prefix",
    aliases: ["prefijo", "cambiarprefijo", "cambiarprefix"],
    description: "Sirve para cambiar el Preijo del Bot en el Servidor",
    run: async (client, message, arg) =>{
        if (!IdAdmins.includes(message.author.id)) return message.channel.send(`❌ ${message.author} No tienes los permisos necesarios`)

        const funtionActualizarPrefijo = modulo.funcion
        let prefix = funtionActualizarPrefijo()

        if (arg[0] === prefix) return message.channel.send(`❌ ${message.author} Ese es el prefijo actual`)

        try {
            const configPath = path.join(__dirname, '../../../config.json');
            const JSONpath = configPath;
            // Cargamos el archivo JSON
            const archivoJSON = fs.readFileSync(JSONpath, 'utf8');
            //Convertir el contenido del archivo JSON en un objeto JS
            const objetoJSON = JSON.parse(archivoJSON);
            //Modificar la propiedad "prefix" del objeto
            objetoJSON.prefix = arg[0];
            //Convertir el objeto modificado de vuelta a formato JSON
            const nuevoJSON = JSON.stringify(objetoJSON, null, '\t');
            //Guardar el nuevo JSON en el archivo
            fs.writeFileSync(JSONpath, nuevoJSON, 'utf8');

            const funtionActualizarPrefijo = modulo.funcion
            let prefix = funtionActualizarPrefijo()

            message.channel.send(`El prefijo del Bot ${client.user.tag} ha sido modificado por ${message.author} y ahora es **${prefix}**`);
        }catch(e){
            message.channel.send(`Ocurrio un error al cambiar el prefijo ${prefix}`, e);
        }
    }
}