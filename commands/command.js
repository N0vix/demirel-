const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "commando lijst",
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#113450')
        .setTitle('commands')
        .setAuthor('AuraDevelopment')
        .setDescription('dit is een lijst van alle mogelijke commands')
        .addFields(
            {name: '-bol' , value: 'deze command geeft een leuk effect '},
            {name: '-ping' , value: 'deze command geeft een leuk effect '},
            {name: '-help' , value: 'deze command laat een lijst zien met alle mogelijke commands'},
            {name: '-botinfo' , value: 'deze command weergeeft alle nodige informatie over deze bot'},
            {name: '-suggestie' , value: 'deze command geeft je de mogelijkheid om een suggestie te plaatsen'},
            {name: '-statusnode' , value: 'deze command geeft de status van de bot aan'},
            {name: '-hub' , value: 'deze command verstuurd een Link van onze Verkoop HUB'},
            {name: '-donate' , value: 'deze command stuurt je een link van de donate HUB'},
            {name: '-clear' , value: 'deze command verwijderd berichten [STAFF ONLY]'},
            {name: '-stafftest' , value: 'deze command is bedoelt voor het testen van de bot [STAFF ONLY]'},
        )
        .setImage('https://maxcdn.icons8.com/windows10/PNG/512/Industry/bot-512.png')
        .setFooter('meer commands komen in de toekomst')

    message.channel.send(newEmbed);
    
    }


}
