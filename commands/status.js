module.exports = {
    name: 'status',
    description: "dit is de status van de bot",
    execute(client, message, args){
        message.channel.send(' ``` Bot Online! ``` ')
    }

}