const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Aura Development is online!');
    client.user.setActivity('good quality | -help| Aura Development | Currently online', { type: "WATCHING" }).catch(console.error)
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if(!cmd) return message.channel.send("sorry dit commando bestaat niet ```let er tijdens het uitvoeren van het commando op dat je de juiste gramatica gebruikt voor verdere informatie kan je de command -help gebruiken ``` ");
    
    cmd.execute(client, message, args);


});

client.login('ODMyMTQyODEyMjI4MDkxOTM1.YHffYg.NZRCH-0sJXhEeo1YS8zZ0YpHDUw');