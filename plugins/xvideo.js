

const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
    pattern: "xvideos",
    alias: ["xvieos"],
    react: "🔞",
    desc: "Download videos from XVideo.com",
    category: "download",
    use: '.xvideo <search query>',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
 
const xnxx_list = await fetchJson(`https://api.agatz.xyz/api/xnxx?message=${q}`)
if(xnxx_list.data.result.length < 0) return await reply("Not results found !")
	
const xnxx_info = await fetchJson(`https://api.agatz.xyz/api/xnxxdown?url=${xnxx_list.data.result[0].link}`)
    
  // FIRST VIDEO
  
const xnxx = `💋 𝗫𝗡𝗫𝗫 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥\n\n*★| Video Title :* ${xnxx_info.data.title}\n*★| Duration :* ${xnxx_info.data.duration}\n\n${sadiya_md_footer}`

await conn.sendMessage( from, { image: { url: xnxx_info.data.image || '' }, caption: xnxx }, { quoted: mek })

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xnxx_info.data.files.low }, mimetype: "video/mp4", fileName: xnxx_info.data.title, caption: sadiya_md_footer }, { quoted: mek });

}catch(e){
console.log(e)
reply(e);
}
})