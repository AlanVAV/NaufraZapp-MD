//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
let crime = 500
let diamante = 10
const handler = async (m, {conn, usedPrefix, command, groupMetadata, participants, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`🦋 Hey la policía está vigilando en esta zona Por favor regresa en: ${msToTime(date - new Date())}`)
let randow
if (m.isGroup) randow = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else randow = m.chat
try {
let ps = groupMetadata.participants.map(v => v.id)
let randow = ps.getRandom()
let users = global.db.data.users[randow]
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)
let or = ['text', 'text2', 'text3', 'text4', 'text5']; 
let media = or[Math.floor(Math.random() * 4)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') return m.reply(`🍧 ${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') return m.reply(`🚓 ${pickRandom(global.robmal)} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= crime) 
if (media === 'text3') return m.reply(`💰 *${pickRandom(global.robar)}*\n\n${diamond} 💎Diamante\n${money} 🍧 SakuCoins`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)
if (media === 'text4') return m.reply(`🦋 ${pickRandom(global.robmal)}\n\n${diamond} 💎Diamante\n${money} 🍧 SakuCoins`).catch(global.db.data.users[m.sender].limit -= diamante).catch(global.db.data.users[m.sender].money -= crime)
if (media === 'text5') return conn.reply(m.chat, `🍓 le has robado a @${randow.split`@`[0]} 𝑈𝑛𝑎 𝐶𝑎𝑛𝑡𝑖𝑑𝑎𝑑 𝐷𝑒: ${exp} XP`, m, {contextInfo: {mentionedJid: [randow]}}).catch(global.db.data.users[m.sender].exp += exp).catch(global.db.data.users[randow].exp -= crime) 
} catch (e) {
console.log(e)}}
handler.help = ['robar'];
handler.tags = ['xp'];
handler.command = /^(abancarrr|Abancarrr|Crimeee|crimeee)$/i
handler.register = true
handler.group = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['Robaste un Banco 🍧 y Obtuviste', 'Negociarte con el jefe de la mafia y Obtuviste :', 'Casi te atrapa la policía pero lograste robar una cantidad valiosa de Oro 🥀. !Te cuidado la próxima vez! Obtuviste:', 'Los mafiosos te han pagado :', 'Le has robado al Administrador del Grupo', 'Le robarte a tu presidente una sumar de :', 'le robarte a un famoso un valor de :'];
global.robmal = ['LA POLICIA TE VIO 😔👮‍♂️ PERDISTE', 'Fuiste a robar un banco 💖 y tu ayudarte que vendio a la policía, perdiste', 'No pudiste escapar de la Policía 🚔😃, perdiste :']
