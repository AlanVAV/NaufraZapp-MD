let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `*『⛏️』Minaste: ${hasil} de Experiencia!!*`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*『✦』Por favor, espera: ${msToTime(time - new Date())} para minar de nuevo.*`  

conn.fakeReply(m.chat, info, '5493873687620@s.whatsapp.net', '🪙「⛏️ 𝗠 𝗜 𝗡 𝗔 𝗥 ⛏️」🪙', 'status@broadcast')   
//m.reply(`*[ 🎉 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${hasil} 𝚇𝙿*`)
global.db.data.users[m.sender].lastmiming = new Date * 1

}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}