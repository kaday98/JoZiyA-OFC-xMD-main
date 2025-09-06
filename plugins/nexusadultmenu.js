const axios = require("axios");
const { cmd } = require("../command");


cmd({
    pattern: "xmenu",
    alias: ["xmenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭───♠「 18+ CMD🔞」♠*
‎*├★ .xɴxx*
‎*├★ .ᴘᴏʀɴ*
‎*├★ .xᴠɪᴅᴇᴏs*
‎*├★ .ʀᴀɴᴅᴏᴍᴘᴏʀɴ*
‎*├★ .ʀᴀɴᴅᴏᴍxᴠɪᴅᴇᴏ*
‎*╰───────────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/96u4ui.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401814154475@newsletter',
                        newsletterName: "JoZiyA-OFC-xMD X MENU🦖🔞₊",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
