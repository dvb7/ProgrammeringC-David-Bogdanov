//Setup dotenv, so that the .env file works
require("dotenv").config();

//Variable setup
obj = { vchange:-50, hchange:50 }
let data;

const { info } = require("console");
//Setup the discord bot
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

//Setup Express
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

//Setup fs
var fs = require("fs");
var logger = "|SERVER LOG:| "

//Make the bot do something, if a message is sent.
client.on('message', gotMessage);

//Check the content of a message that is sent, and react if neccesary
function gotMessage(msg) {
    if (msg.channel.id == process.env.CHANNELID) {
        switch (msg.content) {
            case "!up":
                msg.channel.send("Moving up!");
                obj.vchange -= 5;
                break;
            case "!down":
                msg.channel.send("Moving down!");
                obj.vchange += 5;
                break;
            case "!left":
                msg.channel.send("Moving left!");
                obj.hchange -= 5;
                break;
            case "!right":
                msg.channel.send("Moving right!");
                obj.hchange += 5;
                break;
            case "!upupdowndownleftrightleftrightb-a-b-astart":
                msg.channel.send("Secret unlocked! 🥳🎉");
        }

        let data = JSON.stringify(obj)
        createFile(data, "database")
    }
}



function createFile(input, type){
    fs.writeFile("./../Server side/Client side/#Input/" + type + ".json", input, (err) => {
        // Rest of your code
        if (err) throw err;               
        console.log(logger + "FILE SENT");
    })
}

/*
//Make the variables available, 
//and send them if anybody tries to fetch them.
app.post('/api', (response) => {
    let allData = [ vchange, hchange ];
    response.json(allData);
    console.log(allData, "data sent");
  });
*/