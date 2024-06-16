//Modüller\\
const path = require("path")
var fs = require('fs')
const { AoiClient, CustomEvent } = require("aoi.js")
//Modüller\\


//Bot\\
const client = new AoiClient({
    token: "token"
    prefix: "+",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
})
//Bot\\

//Handler\\
require("./+/handler/variables.js")(client)
//Handler\\

//Events\\
require("./+/events/status")(client)
//Events\\

//Loader\\
client.loadCommands("./commands/", false)
//Loader\\