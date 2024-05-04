// Botones interactivos adptados y funcionando por Gata Dios (GataNina-Li)

import { getDevice } from '@whiskeysockets/baileys'
import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
const dispositivo = await getDevice(m.key.id)
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = menusImgs4.getRandom()
//let vn = 'https://qu.ax/bfaM.mp3'
let pareja = global.db.data.users[m.sender].pasangan 
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `
Hola`.trim()
      
const buttonParamsJson = JSON.stringify({
title: "VER LISTA",
description: "Activa y desactiva las funciones fácilmente!! ✨",
sections: [
{ title: "👋🏻 DAR BIENVENIDA 👋🏻", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de dar bienvenida", id: usedPrefix + "on welcome" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de dar bienvenida", id: usedPrefix + "off welcome" }
]},
{ title: "🌎 MODO PUBLICA 🌎", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de modo publico", id: usedPrefix + "on public" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de modo publico", id: usedPrefix + "off public" }
]},
{ title: "🔞 HORNY 🔞", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de comandos para adultos", id: usedPrefix + "on modohorny" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de comandos para adultos", id: usedPrefix + "off modohorny" }
]},
{ title: "🌐 ANTI ENLACES 1 🌐", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de eliminar enlaces", id: usedPrefix + "on antilink" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de eliminar enlaces", id: usedPrefix + "off antilink" }
]},
{ title: "🌐 ANTI ENLACES 2 🌐", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de eliminar todo enlace", id: usedPrefix + "on antilink2" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de eliminar todo enlace", id: usedPrefix + "off antilink2" }
]},
{ title: "💯 DETECTOR 💯", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de detectar eventos", id: usedPrefix + "on detect" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de detectar eventos", id: usedPrefix + "off detect" }
]},
{ title: "💯 DETECTOR 2 💯", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de detectar eventos", id: usedPrefix + "on detect2" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de detectar eventos", id: usedPrefix + "off detect2" }
]},
{ title: "♻️ RESTRICCIONES ♻️", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de las restricciones", id: usedPrefix + "on restrict" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de las restricciones", id: usedPrefix + "off restrict" }
]},
{ title: "👀 AUTO LEER MENSAJES 👀", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Activar la funcion de leer mensajes automáticamente", id: usedPrefix + "on autoread" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Desactivar la funcion de leer mensajes automáticamente", id: usedPrefix + "off autoread" }
]},
{ title: "🔊 AUDIOS DEL BOT 🔊", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "El bot mandara audios automáticamente", id: usedPrefix + "on audios" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot dejara de mandar audios automáticamente", id: usedPrefix + "off audios" }
]},
{ title: "🎁 STICKERS AUTOMÁTICOS 🎁", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Al mandar imágenes o videos de 7 segundos, creara el sticker automáticamente", id: usedPrefix + "on autosticker" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Dejara de crear stickers automáticamente", id: usedPrefix + "off autosticker" }
]},
{ title: "🥳 REACCIONES AUTOMÁTICOS 🥳", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "El bot reaccionara los mensajes automáticamente", id: usedPrefix + "on reaction" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot dejara de reaccionar a los mensajes", id: usedPrefix + "off reaction" }
]},
{ title: "👤 SOLO PRIVADOS 👤", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "El bot solo hablara en chats privados", id: usedPrefix + "on pconly" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot volverá a hablar en los grupos y en privados", id: usedPrefix + "off pconly" }
]},
{ title: "👥 SOLO GRUPOS 👥", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "El bot solo hablara en chats grupupales", id: usedPrefix + "on gconly" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot volvera a hablar en privados y grupos", id: usedPrefix + "off gconly" }
]},
{ title: "🔓 ANTI VER UNA VEZ 🔓", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "La foto de ver una vez y el video de ver una vez, seran vistos", id: usedPrefix + "on antiviewonce" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot dejara de invadir la privacidad", id: usedPrefix + "off antiviewonce" }
]},
{ title: "☎️ ANTI LLAMADAS ☎️", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "El bot bloqueara al usuario que lo llame", id: usedPrefix + "on anticall" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot dejará de bloquear las llamadas", id: usedPrefix + "off anticall" }
]},
{ title: "😑 ANTI TOXICOS Y TOXICAS 😑", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Advertira a los que digan groserias", id: usedPrefix + "on antitoxic" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Dejara advertir las groserias", id: usedPrefix + "off antitoxic" }
]},
{ title: "💻 ELIMINAR TRABAS 💻", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Borrará todo texto que tenga mas de 4000 carácteres", id: usedPrefix + "on antitraba" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Dejara de borrar esos caracteres", id: usedPrefix + "off antitraba" }
]},
{ title: "🇲🇴 ELIMINAR ARABES 🇲🇴", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Eliminara a los numeros arabes que se unan al grupo", id: usedPrefix + "on antiarabe" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Dejara de eliminar los numeros raros", id: usedPrefix + "off antiarabe" }
]},
{ title: "👑 MODO ADMIN 👑", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Solo los administradores del grupo podran usar el bot", id: usedPrefix + "on modoadmin" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Todos los participantes podran usar el bot", id: usedPrefix + "off modoadmin" }
]},
{ title: "🤖 AUTO CHAT GPT 🤖", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Chatgpt hablara automáticamente y únicamente en chats privados", id: usedPrefix + "on modoia" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El chatgpt dejara de hablar", id: usedPrefix + "off modoia" }
]},
{ title: "🎭 SIM SIMI 🎭", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Habla con el bot", id: usedPrefix + "on simsimi" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot dejara de hablar", id: usedPrefix + "off simsimi" }
]},
{ title: "💬 ANTI ELIMINAR MENSAJES 💬", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "El bot reenviara los mensajes eliminados", id: usedPrefix + "on antidelete" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "El bot dejara de enviar mensajes eliminados", id: usedPrefix + "off antidelete" }
]},
{ title: "🍷 ANTI SPAM 🍷", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Advertira a los usuarios que hagan mucho spam", id: usedPrefix + "on antispam" },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Dejara de advertir a los usuarios que hacen mucho spam", id: usedPrefix + "off antispam" }
]},
{ title: "😃 NO PRIVADO 😃", highlight_label: "Popular",
rows: [
{ header: "✅ ACTIVAR ✅", title: "Funcion", description: "Bloqueara a los usuarios que manden mensaje en el privado del bot", id: usedPrefix + "on antiprivado " },
{ header: "⛔ DESACTIVAR ⛔", title: "Funcion", description: "Dejara de bloquear a los que hablen el bot en privado", id: usedPrefix + "off antiprivado" }
]},
{ title: "🌎 BOTONES ÚTILES 🌎", highlight_label: "Popular",
rows: [
{ header: "✅ Auto Registrarse", title: "", description: "Registrate con este boton, o tambien puedes registrarte manualmente con el #reg", id: usedPrefix + "reg NZsub.18" },
{ header: "🤖 Ser un subbot", title: "", description: "Se un subbot en NaufraZapp-MD", id: usedPrefix + "nzcode" },
{ header: "👑 Creador", title: "", description: "Tienes dudas? Contactame por este medio!", id: usedPrefix + "creador" },
{ header: "🎒 Tus Recursos", title: "", description: "Mira tus recursos en este bot", id: usedPrefix + "minfo" }
]},
{ title: "🌌 MENU 🌌", highlight_label: "Popular",
rows: [
{ header: "🍁 VER MENU", title: "", description: "Mira el menu disponible para ti", id: usedPrefix + "menucompleto" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: wm + ` \n*Recuerda avisar de algun error.*` },
header: { title: `LISTA DE FUNCIONES PARA EL BOT`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
      
} else { 
let menu = `╭─────────────────•〘🎊〙
│Bienvenido/a ${username}
╰─────────────────•〘🎊〙
> ❒ Seleccione las funciones que quieres apagar o desactivar.

`.trim()
await conn.sendFile(m.chat, menusImgs4, 'naufra.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'Bot de WhatsApp', previewType: 0, thumbnail: imagen4, sourceUrl: gp1}}}) 
//await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
}} catch (e) {
await m.reply(m.chat, 'error')
console.log(`error`)
console.log(e)}}

handler.command = /^(funciones|funcions|funs|funcs|function\?)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
         
