const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/SHANI-GDS/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM";
global.website=process.env.GURL || "https://chat.whatsapp.com/BNE0V8XpEZK0q4IgJ9jklM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/Sg8pLdq.jpeg" ; // SET LOGO FOR IMAGE 



global.devs = "923094029835" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923455116994";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923455116994";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944727644,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBJNzN5bmZuTEppSi9PYVBSSVpxam9XRzN1VnJ6dE1wQWZ0M3RxdWJITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1Q3d3pOSVVXS1pKSFFrckFOUUh6NnVadjgzaEJwWFBtTTVoWmh6cFlCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUFRHb1VDckI0QWUvSzhjV0FIMnppTWN2TTdqaWNXNzVzVzRra1pqVjJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0YzUxbmt5QkNoQy9PYWNBQUJ2VjV6K2x5RWNxMDkyTTg5S2FNb0daeXg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLL05FYjdxZGdWRnIzbkN2TzcrSXFMVEpFTDQrQnZxbEtwdnorYjFCVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikdka1l2WWZiZ1BQUHRndU8xRjRrbFB0MWNnMmZKVGVhdnhnQURRcHlLRFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1rR1Bya0d3QWtOS0hrSmU0aXN1T2NXeFFJWUc2alU1YW41RkNqMXhtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkJsNGtXVGVocWxGZ2w3TTM5N3R6dlR4bitVMXorTDVpTm1td0xhb0gyST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo1cWNkVGxCWEpmbTNRT0JIVkNEQ3N0RDcydkQrQlFyRm9IV1pVU1FSb29CbE90QzFRdTlyRENoK0R6Q1pIM3pnSmpBYUdoN2FlNlMzODNQbkFHUURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJrcGtlK1AvejJuN2VQcENVejJsWWljV2g2YmErR2FPZTR5S25rWnJwNVNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ0MzkyNTAyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1RUFCNUFBOTZEMzk0OUY1MDIwNkM3MEEwQTAxMDRBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NDcxMDAzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0NDM5MjUwMjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODBBQkY0MThENjRGMzBFMkE0QzZCMUIxMTEwRUUyQ0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTQ3MTAwM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieVlTN1pnX3VUOGk0OTMzUWhPUVVWdyIsInBob25lSWQiOiJjNmIyODZiZS1kMTY0LTQxNWMtYWMzYi02MGMyNTZkYjhiYTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURHM1dIckJQY29OZXdhbXRvWjZCdG5sMXVvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY3c0lwOG5VVStLRThPc1hoSVlqMGhnU2UzOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMQTdNNzVINyIsIm1lIjp7ImlkIjoiOTIzNDQzOTI1MDI4OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfpYBUYXVIZWVEIE9v8J+lgPCfpJ0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05XMTh2VUJFSXF5NHJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikk0VkMxZGo5OEkyL0VpQ1JmUUdWeWk3cnVXZDZqdEdWV3Y1RDlZTmJQRFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1iYlFyTWpyeUZ0OGRhanQ2SUFJSWlqNkRQYkhYMXUzWVNzdmR6aDdFSCs5c2R3MVlUaTZWa0hQZ01xUDNBd2hyZlRmTW1YNmV6N0g3ZitEbkZqZkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKL1p0ejlBcnRwekkzN202ZWRwckxIb1REdHJuMW5xNC9uZ0h4TWZjQm1VR0RYQW1TUlpQeVk0SW5ESUFhRzJRTlVGSWg0M1czeWRlNExaL0lkZjhBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ0MzkyNTAyODoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTT0ZRdFhZL2ZDTnZ4SWdrWDBCbGNvdTY3bG5lbzdSbFZyK1EvV0RXencxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NDcwOTk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5hSSJ9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『💌 𝙏𝙃𝙀 𝙎𝙃𝘼𝙉𝙄-𝙈𝘿 𝘿𝙀𝙋𝙇𝙊𝙔𝙀𝙍💌』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛʜᴇ-sʜᴀɴɪ-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "˻𝗦𝝜𝗔𝗡𝗜-𝗠𝗗-:𝟗͢𝟗𝟒˼",
  ownername:process.env.OWNER_NAME|| "˻𝗦𝝜𝗔𝗡𝗜-𝗠𝗗-:𝟗͢𝟗𝟒˼",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
