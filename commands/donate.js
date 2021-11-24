const Discord = require("discord.js");

module.exports = {
    name: 'donate',
    description: "deze command stuurt je een link van de donate hub",
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffad01')
        .setTitle('Donatie')
        .setAuthor('Aura development')
        .setDescription('deze command stuurt je een link van de donate hub')
        .addFields(
            {name: ' Robux donatie HUB' , value: ' https://www.roblox.com/games/8069060513/AURA-DEVELOPMENT-Donatie-HUB '},


            



        )

    message.channel.send(newEmbed);
    
    }


}
