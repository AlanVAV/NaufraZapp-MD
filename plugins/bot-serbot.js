/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE GATABOT-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM GATABOT-MD, THANK YOU **/
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = menusImgs4.getRandom()
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `😃 𝗛𝗢𝗟𝗔𝗔𝗔!!! 👋🏻
💯 ¿𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗦𝗘𝗥 𝗦𝗨𝗕𝗕𝗢𝗧? 👀
• • •⊰•╌╌╌╌╌╌╌╌╌╌╌╌•⊱• • •
⏩ 𝗨𝗦𝗔 𝗘𝗟 𝗕𝗢𝗧𝗢𝗡: \`Pedir Code\` 🌃
• • •⊰•╌╌╌╌╌╌╌╌╌╌╌╌•⊱• • •
📚 𝗦𝗜 𝗧𝗜𝗘𝗡𝗘𝗦 𝗗𝗨𝗗𝗔𝗦, 𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗔𝗠𝗘
𝗖𝗢𝗡 𝗘𝗟 𝗕𝗢𝗧𝗢𝗡: \`Creador\` ✨
• • •⊰•╌╌╌╌╌╌╌╌╌╌╌╌•⊱• • •
🌎 𝗠𝗜𝗥𝗔 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗕𝗢𝗧
𝗖𝗢𝗡 𝗘𝗟 𝗕𝗢𝗧𝗢𝗡: \`Menu Completo\` 💭
`
await conn.sendButton(m.chat, estado, `Es importante que te registres primero y que tambien vallas al privado del bot si estas en un grupo para usar este comando.\n\n` + wm, pp, [
['🌎 MENU COMPLETO 🌎', '.menucompleto'],
['🔢 PEDIR CODE 🔢', '/nzcode']], null, [
['Creador', `${channel}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(serbot|clonebot|rentbot|serbot --code|serbot2|serbotnz)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
