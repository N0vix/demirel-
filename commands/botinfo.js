const Discord = require("discord.js");

module.exports = {
    name: 'botinfo',
    description: "BotInformatie",
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00ff0c')
        .setTitle('Bot Informatie')
        .setAuthor('Novix#1000')
        .setDescription('deze command geeft alle nodige informatie over dezee bot aan')
        .addFields(
            {name: 'Eigenaar' , value: 'Novix#1000 '},
            {name: 'datum van aanmaak' , value: ' 19 november 2021 '},
            {name: 'Coding software' , value: ' Visual studio code '},
            {name: 'gemaakt voor' , value: ' administratie binnen aura development '},
            {name: 'datum van aanmaak' , value: ' 19 november 2021 '},
            {name: 'Versie' , value: ' 1.0.5 Betá '},
            {name: 'Verdere informatie' , value: ' Deze bot staat nog in de betà versie er zullen in de toekomst nog veel updates en verbeteringen komen houd hier rekening mee '},
            



        )

    message.channel.send(newEmbed);
    
    }


}
