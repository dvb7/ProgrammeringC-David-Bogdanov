require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);



// client.on('ready', readyDiscord) 

// function readyDiscord() {
//     console.log('haha');
// }

client.on('message', gotMessage);

function gotMessage(msg) {
    if (msg.channel.id == process.env.CHANNELID && msg.content === "Funny cat Garfield") {
        //msg.reply("no");
        msg.channel.send("no");
    }
}