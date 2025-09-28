const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Vempire_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RaZzgzMzNZK3p2N1VITzZramRWWG5YMW5DL2JWRnVBeS93cWpPeVExMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEJJSUJja2NXRkFWZlhtTng4QkJOVVl5ZFFHekFFSURCSGs4SFFIZkMyaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTGNicTZuS2NQSWFWS1ZoUzUxekdMNXlLR0pvK21BbUZpK2crRUN4UUhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSm10UW93ZGEzb0QvbHF6MTFPeW1yOWxOakNJUlBNb0VJV2FzRTFONWlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNFM1NJbFNuVW5wZnQ2NEplMGVKRXUreWVlVFFlNE1DRUY0cER3ckk3WGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1tdXlWRmdQVjAwNEVmZXgxQkJHSmRmSEF1ZDVuMTZqUXFwQW1jYk14aWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxnVExGbUpaVkJIKzFuZngyNU4zTm1nNUl6dks1c2k3RzhPd0cyVmNGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1R3VERWSlI0M25ZdFRyOVN4VngweXlIUU9IYTJFUHdKc1B2dVdZdDltaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh2OERpYm5NNDBjbjZlMDZLRzVrL0VQbjRjZ0tXQ2kwWElSdHJHUXBOOHRtQWxiTnJsb0JHQUxTUUZiSDJzK082N1F1bUkwTDFqb2lpTGFmczhML0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJlTWhkOG9XbVh6KzNMaFlib3BKL1NETTV6YldSYzZHYXVtMHFva0FpanBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ0NDM5ODk3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTk4QjBBRTY0QUM5Mzc1RDc3RkIyOTIyQzZFMDhCQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5MDI4NjQzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0NDQzOTg5NzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVCMzNGOEQ4MzM1OEMxNDVEQjBGOTJBNUNCQ0NCMDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTAyODY0M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQ1FXWFhQTDgiLCJtZSI6eyJpZCI6IjkyMzQ0NDM5ODk3MjoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJqZXJyeXkiLCJsaWQiOiIxMTUzNTQ4NjkxNzg0MTE6MTRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdS9oYkVDRUo3TDRzWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZeWxGa3FrMmlOZlFlYzlWMjR1b0ZxZ25CNU80SDBBNVJlNTcweE45ZjFnPSIsImFjY291bnRTaWduYXR1cmUiOiJWNXNYMmF3bEpkWmlXeS9MMENkcTJUMjJ5YXZ0dzR2ZG9wSWJwUUZJbW1xVjF6RkNkWG1qZG1Kb01UK3BFU1ljc2taaXFLWG9kb2NlQ1lXb2EveERBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWS9leW55MFJWUERrbFZqL0lpTDZGbEt0d2pNeVUrQ3RmcWtJZmlFd0dqVGQ3ZEZ1d2hxNnhSSDhDY0pBNm9ILzg3MzlBWEs2Tit0ZEFMNjFYWWlkQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NDQzOTg5NzI6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV01wUlpLcE5valgwSG5QVmR1THFCYW9Kd2VUdUI5QU9VWHVlOU1UZlg5WSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5MDI4NjQwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUliYSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yr0xau.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923132006659",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗 Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yr0xau.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𝗩𝗘𝗠𝗣𝗜𝗥𝗘_𝗠𝗗*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923132006659",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
