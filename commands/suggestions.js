const { MessageEmbed } = require('discord.js');
module.exports = {
     name:'suggestie',
     aliases: ['suggest', 'sugestion'],
     Permissions: [],
     description: 'maakt een suggestie aan',
     execute(client, message, args, cmd, discord){
      console.log(args)
      const channel = message.guild.channels.cache.find(c => c.name === '「💼」suggestie')
        if(!channel) return message.channel.send('suggestie kanaal bestaat niet')

        let messageArgs = args.join(" ");
        const embed = new MessageEmbed()
        .setColor('#f5d22e')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);
        channel.send(embed)
     }
    }