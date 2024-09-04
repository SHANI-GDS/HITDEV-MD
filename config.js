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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/WgwemmG.jpeg" ; // SET LOGO FOR IMAGE 



global.devs = "923094029835" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923094029835";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923094029835";




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


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZpWk1ab21FRE1jdEdSZkVhcGtnbmVDVFZ3dFd1VDB5dFI2ZUJzUjZtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzRDT2NUUUZqZ2dkWWFHTU9PRm5pbXczeTVIU25obXVXOTM5SnErQTFXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTWVQTUFjR09CRzlZVnpOazRlek9QOG5LOXpFbGZWK3BTTDV5Sk9FWFdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1WDc3OHFWN3pHcVFDMDRJTkQ3YjBLTHpMVzBtWGdQdFlaYk9rb2ErRXl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOV1M0WFE4bTNleVBBdkc0WG04enZUaDZheWRFNDU4Sjk5aFJHWmVkV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkxL1ExNS9ZNUNXTjhSUmQzZEs1QVI1UGk5LzRubmdHTy9pS244c3B0ems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0I0dTFWN051TXZtKzROUm5za3ovTHdCNnNKVk5FM2lHTWFmcSthb00xRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1N1UTAxSmo3VHdNUE0wdU03aVRna244cXFrWTRDdldvTEVhQXo1ZzZCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PYmRQQUFCYTMza1kxSFhiTm5Jeko5THUwaWt4d1BpREk0UlpRSTVETG1PZHd1MjQ5ZmVUTnBFcHJBekhnRFJRMnlWdU9WOGRodEdjTDhBNUFxVmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6ImdkMmQ3ZURCelk4UUpaL3dYZjE1cDRySWZUbkc0NjR1V2I2L3J5NnRhTWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3NzA1ODk1NDU1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRBQUVGM0JDMjNBRkFDMTM0MDQwRTFCQ0FBQjEwMjFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU0MjMwMzV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilp3NHlFdTR6U3Zxal9DckwzaEdZcnciLCJwaG9uZUlkIjoiMzg2MGJjNzUtMjIxOS00MDJjLWE2Y2QtNTM0ODYyMmMxMjg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFXNkZxeVk1YXE1a3FHbGJ2Y0FDZjdFMEV2WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXeElLWnFGTHhVVnJGOTdKVktHSUxJZXQ3YXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEgxRjhaRkYiLCJtZSI6eyJpZCI6IjkxNzcwNTg5NTQ1NTo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdnpvwnZ6T8J2enPCdnpzwnZ6XLfCdn64u8J2frCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW1vNk5RQkVLcTczN1lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia0FaNTI4c2FOcS9oczFzdCs2N3FqeHdrNGt6R3NQUCtMQk5adjVvaGJSTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiODN5dDFGMERLeStNU0RsUW5aWFY1NTBEVjJGR3pqWXZTUmgxY1R5bmd5OTZNa3RQWE8ybzZta0x4eWxGam9WWnFTODFPU3lmZzFnTmtCSW5jeElaRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjgwdDBWRmRQZW4rWkYvS3hjZWQvcUNvb2NmK2FYbmRxWjR3REJQK0djaEQ2NVBkN2p4b2lTdWRGVml4QW1YV3MwVmNyRUhrcXdXaFMyMys0QUorb2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3NzA1ODk1NDU1OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkFHZWR2TEdqYXY0Yk5iTGZ1dTZvOGNKT0pNeHJEei9pd1RXYithSVcwVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQyMzAzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTXIifQ==cSxya3JrcmRypzhpavhqaMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMbWx1SUZFSm1WMnJZR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImE5MzFoV2RHSi9sYmtYOG92UXpCVWxFL1JremN1VHBUc3o4bVQyYUx0MjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlE4eVRGWlF0Tm1BNVhYbDAyZHNWTitnRkFyZmZ3N1BRQld1L3p5WlB2ak5sZ0VsSlA1Umx1T1Q4MklQVEgvejFVNU5ZZUpHY1ZCekJHTkdVTjRxQURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiTjl2YUdLZmNkZDFPZCt2ZkpZbkg3R3Y3NUdGMTlMNHp1MEgxUmFvbWNKZE5lbjhYT1U4SkRBNnpVMisrUDJrb2pFTmFNUndDZ2tWZGYwOEhHbkFpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA5NDAyOTgzNToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXdmQ5WVZuUmlmNVc1Ri9LTDBNd1ZKUlAwWk0zTGs2VTdNL0prOW1pN2R0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzM2MjMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVAwViJ9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿 𝘿𝙀𝙑𝙊𝙇𝙋𝙀𝙍 💌』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛʜᴇ-ᴍᴀɴɴᴏ-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "💌 𝙏𝙃𝙀-𝙈𝘼𝙉𝙉𝙊-𝙈𝘿💌",
  ownername:process.env.OWNER_NAME|| "𝙈𝘼𝙉𝙉𝙊-𝘽𝙇𝙊𝙐𝘾𝙃",


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
