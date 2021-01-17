//Setup dotenv, so that the .env file works
require("dotenv").config();

//Variable setup
let vchange = -50;
let hchange = 50;

//Setup the discord bot
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

//Setup Express
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

//Make the bot do something, if a message is sent.
client.on('message', gotMessage);

//Check the content of a message that is sent, and react if neccesary
function gotMessage(msg) {
    if (msg.channel.id == process.env.CHANNELID) {
        switch (msg.content) {
            case "!up":
                msg.channel.send("Moving up!");
                vchange -= 5;
                break;
            case "!down":
                msg.channel.send("Moving down!");
                vchange += 5;
                break;
            case "!left":
                msg.channel.send("Moving left!");
                hchange -= 5;
                break;
            case "!right":
                msg.channel.send("Moving right!");
                hchange += 5;
        }
    }
}

//Make the variables available, 
//and send them if anybody tries to fetch them.
app.post('/api', (response) => {
    let allData = [ vchange, hchange ];
    response.json(allData);
    console.log(allData, "data sent");
  });