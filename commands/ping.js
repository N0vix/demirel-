module.exports = {
    name: 'ping',
    description: "dit is een grapige command",
    execute(client, message, args){
        message.channel.send('Pong!')
    }

}