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
const d = new Date(new Date + 3600000);
const locale = 'es-ES';
const week = d.toLocaleDateString(locale, {weekday: 'long'});
const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
const user = global.db.data.users[m.sender];
const {money, joincount} = global.db.data.users[m.sender];
const {exp, limit, level, role} = global.db.data.users[m.sender];
const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
const rtotal = Object.entries(global.db.data.users).length || '0'
const more = String.fromCharCode(8206);
const readMore = more.repeat(850);
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
let estado = `🎒 TUS RECURSOS 🎒
•╌╌╌╌╌╌╌╌╌╌╌╌•
𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀
• ${limit}

𝗘𝘅𝗽
• ${exp}

𝗡𝗶𝘃𝗲𝗹
• ${level}

𝗥𝗮𝗻𝗴𝗼
• ${role}
`
await conn.sendButton(m.chat, estado, `👀 Gana mas recursos!!\n\n` + nameN3, pp, [
['ALL MENU', '.menucompleto'], ['MINAR', '/minar'],
['COFRE', '#cofre'], ['SUBIR NIVEL', '#levelup']], null, [
['Canal', `${channel}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(mirecurso|misrecursos|minfo)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
