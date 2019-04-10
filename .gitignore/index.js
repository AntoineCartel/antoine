const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
 
client.login('NTY0NDgyMjM5MTAzMjM4MTg1.XKohUw.swdNaQ80Xjr6eT90ENZTxQbR2hY');
 

//Command pose une question

client.on('message', message =>{
    if(message.content === "!don"){
        message.channel.sendMessage("Ce n'est pas possible actuellement de faire une donation.");
        console.log('répond à tfq');
    }
});

client.on('message', message =>{
    if(message.content === "!concours"){
        message.channel.sendMessage("Il a actuellement un concours je t'invite a aller voir dans le chanel concours.");
        console.log('répond à tfq');
    }
});

client.on('message', message =>{
    if(message.content === "!youtube"){
        message.channel.sendMessage("Il vous faut 100 abonnés pour avoir le grade youtubeur ou streamer");
        console.log('répond à tfq');
    }
});

client.on('message', message =>{
    if(message.content === "!recrutement"){
        message.channel.sendMessage("Pour être recruter dans notre staff je vous invite a faire une candidature propre dans le chanel candidature");
        console.log('répond à tfq');
    }
});

client.on('message', message =>{
    if(message.content === "!esclave"){
        message.channel.sendMessage("Le seul esclave c'est pierre (il crois qu'il a du luxe en lui mais c'est pas vrai) ");
        console.log('répond à tfq');
    }
});



// Jeu pour les membre

client.on('ready', function () {
    console.log('Bot ON')
})
 
client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:","si tu veux"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("ORANGE")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
    }
})


//Bienvenue + A quitter

client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('552954641361403914').send(embed)
    member.addRole('555514664939814925')
 
});
 
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('552954641361403914').send(embed)
 
});



