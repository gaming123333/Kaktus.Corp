

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://prokozak76:prokozak76@kaktus.bflyu.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Public Lavalink v3",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v3.ajieblogs.eu.org",
      port:  443,
      secure: true
    }
  ]
}
