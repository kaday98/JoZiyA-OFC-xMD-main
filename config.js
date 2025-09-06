const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JoZiyA-OFC-xMD=vZ9ggDKD#U0sIIEPtEKJ39HjiGKho-t32jWvlfg15bF1v0o3hHOk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/96u4ui.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM JoZiyA-OFC-xMD CREATED BY RAMESH <NOW ALIVE> ",
};
