module.exports = {
    name: 'clear',
    description: "deze command verwijderd berichten",
    async execute(client, message, args){
         if(!args[0]) return message.reply("geeft alstjeblieft aan hoeveel berichten je wilt verwijderen");
         if(isNaN(args[0])) return message.reply("dat is geen getal")

         if(args[0] > 100) return message.reply("je kan niet meer dan 100 berichten verwijderen");
         if(args[0] < 1) return message.reply("je moet minimaal 1 bericht verwijderen")
    

        
         await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            if(message.member.roles.cache.has('911618713051086868')){
            message.channel.bulkDelete(messages)
        } else message.channel.send('je hebt geen permisie')
         })
    }
}  