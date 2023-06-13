const path = require('path');
const fs = require('fs');

function actualizarPrefijo() {
  try {
    const configPath = path.join(__dirname, '../../config.json');
    const data = fs.readFileSync(configPath, 'utf8');
    const objetoJSON = JSON.parse(data);
    const prefix = objetoJSON.prefix;
    return objetoJSON.prefix;
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  funcion: actualizarPrefijo
};