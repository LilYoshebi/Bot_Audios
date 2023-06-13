const path = require('path');
const fs = require('fs');

function coleccion(n) {
    const audioPath = path.join(__dirname, '../../audios/');
    const audiosFiles = fs.readdirSync(audioPath);
    if (!audiosFiles[n]) return " "
    return `• ${audiosFiles[n]}`
}

module.exports = {
    funcion: coleccion
}