//Setup dotenv, so that the .env file works
require("dotenv").config();

//Variable setup
obj = { vchange:-50, hchange:50, color:'rgb(0,0,0)', size:50, shape:"cir" }
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
var logger = "|BOT LOG:| "

//Make the bot do something, if a message is sent.
client.on('message', gotMessage);

//Check the content of a message that is sent, and react if neccesary
function gotMessage(msg) {
    if (msg.channel.id == process.env.CHANNELID) {
        switch (msg.content) {
            
            //Colors
            case "!red":
                msg.channel.send("Going red!")
                obj.color == 'rgb(220,0,0)'
                break;
            case "!green":
                msg.channel.send("Going green!")
                obj.color == 'rgb(0,220,0)'
                break;
            case "!blue":
                msg.channel.send("Going blue!")
                obj.color == 'rgb(0,0,220)'
                break;
            
            //Directions
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

            //Sizes
            case "!big":
                msg.channel.send("Going big!")
                obj.size += 40
                break;
            case "!small":
                msg.channel.send("Going home!")
                
                if (obj.size >= 40) {
                    obj.size -= 40
                } else {
                    obj.size -= obj.size
                }
                
                break;

            //Shapes
            case "!circle":
                msg.channel.send("Going round!")
                obj.shape == "cir"
                break;
            case "!square":
                msg.channel.send("Going boxing!")
                obj.shape == "squ"
                break;
            case "!triangle":
                msg.channel.send("Going sharp!")
                obj.shape == "tri"
                break;

            //Easter Eggs
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