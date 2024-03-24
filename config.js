const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94763524434"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bDTDceutstrPgnZFSRExNMNUOhRRAAJh@viaduct.proxy.rlwy.net:34029"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94763524434' 
global.devs = '94763524434';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1uYk1odWtGZEpmQ1BCTnJoditIcGFQRUZTcHlQVkJwMlBjMkEwRVAxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2NFQWtGTlY3YUFJWEJ0d2Q1UTRqMDZPMzFHOUloazB5Z2ZTaEdLVERRUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRGc1OUQ1cCtwazJNODNhY0J5SGRyYXJ5b3duN2lWWWhZNUFpOFZ1eDFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYjZqZlZYMHFZZWZlRVlqWlg2ejhUWlYyZXlTK1YxNWtpZXZERzhyZUVRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOSEZCTlRSc2xQRHBuK052Z0VMMVc5NkxsNTQ0TVhZOGtLYWVGRHRvRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRITk1kWmZncitiL0gvN0JYeDlaYXhaU29XS2gwcFl4QnZoa2V4TGZtd1k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WVMrMWQ0UFlNVXoxeE0yMUNPRFhmRW9leGxlV2l0b1B5N3QzejRaVVN5anFrYXZaUTNGYlJMMjNZejNjTVJNMStqTW5uUU1UNFNFVDlCbnpSdnBEQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3MywiYWR2U2VjcmV0S2V5IjoiQXhmRXhzSVlYc2dLR2F4ZmVHR3lnT29IUUpYRnpISkVCcG45K1ZzUVRzdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiejc3NTZVLUdSVVNJdTdla3loT2d6ZyIsInBob25lSWQiOiI3MjJlYWQ1OS1mZTBmLTQ4NDEtYmQ1Mi0yNTY4NzNhNWNmY2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXFWRGdUdFhSVVdUMm5ESkRZSmJsbmFZblNrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMlFJdlQ1bVFWNjFMOHZuNkZQWDVXR2w1QjA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZTdqLzRIRU9IMy82OEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhrZlgzZDhFYVJ0Um1hTWFKc3A1NVdYL256TmdTcCtRc0I2UWt4Y0RRWE09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZYajQzalUzRXlnWi9BQS9hL2VkTXlvN2M2T0N5NHRuVVBJSStVcHpPQjJQa0oya1VOcFAvb3ZIU2RDaGYySC9ycTZhQXo1b3g5TGVrOE0veFgxdUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5KzRaN3VIeG56MkJhYm90UHIvYlJoNEowTXQzTFhuQzZDWDVZQktKREs3WWM0S29oNjkxc3hWb3B1NS9oK05CVlpOQ05yYlFIaEZCd0YxcGpxKzJDQT09In0sIm1lIjp7ImlkIjoiOTQ3NjM1MjQ0MzQ6MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzUyNDQzNDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNaSDE5M2ZCR2tiVVptakdpYktlZVZsLzU4ellFcWZrTEFla0pNWEEwRnoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTEyNzQ5ODB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '*@ST*' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey! I'm alive now. My owner is *@ST!*' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '9d32d80c-acd2-4a90-8688-8d9a10d1aecb' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'ST23' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
