module.exports = {
    name: "ping",
    aliases: ["ms"],
    description: "Este comando te da la latencia del Bot",
    run: (client, message, arg) => {
        message.reply({ content: `El pind del Bot es de **${client.ws.ping}ms**`})
    }
}