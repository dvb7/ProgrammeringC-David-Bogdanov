const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzg5NDExOTI0OTUzMDA2MDgx.X9xrJQ._1fExeylCVlp4ANRp3JiSpSEutc');

// client.on('ready', readyDiscord) 

// function readyDiscord() {
//     console.log('haha');
// }

client.on('message', gotMessage);

function gotMessage(msg) {
    if (msg.channel.id == '677529835685543959' && msg.content === "Funny cat Garfield") {
        //msg.reply("no");
        msg.channel.send("no");
    }
}