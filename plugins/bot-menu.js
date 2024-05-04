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
let vn = 'https://qu.ax/bfaM.mp3'
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
Lista de prueba.`.trim()
      
const buttonParamsJson = JSON.stringify({
title: "VER LISTA",
description: "Informacion de la lista",
sections: [
{ title: "💭 APARTADO DE ESTADOS 💭", highlight_label: "Popular",
rows: [
{ header: "🤖 ESTADO 🤖", title: "Mirar estado del bot", description: "Mira el estado del bot para comprender mejor ❤️", id: ".estado" },
{ header: "🛍️  COMPRAR BOT 🛍️", title: "Obten el bot en 24/7", description: "Obten el bot activo todos los dias en tu grupo 🔥", id: ".installbot" },
{ header: "💚 GRUPO OFICIAL 💚", title: "Participa", description: "Participa con nosotros y se parte de la comunidad ✨", id: ".gruponz" },
{ header: "✅ AUTO VERIFICADO ✅", title: "Verificate", description: "Verificate automáticamente con este comando 🥳", id: ".reg NZsub.18" }
]},
{ title: "🎒 UTILIDADES 🎒", highlight_label: "Popular",
rows: [
{ header: "🥳 SER SUB BOT 🥳", title: "Hazte un subbot", description: "Vincula tu numero con el bot para ser un subbot 🥳", id: ".nzcode" },
{ header: "🎬 DESCARGA VIDEOS Y AUDIOS 🎧", title: "Descarga en multimedia", description: "Descarga audios o videos a tu gusto 💎", id: ".dlav" },
{ header: "📦 DESCARGA APLICACIÓNES 📦", title: "Descarga apk", description: "Descarga aplicaciones sin gastar tus datos ❤️", id: ".apk" },
{ header: "😃 CHAT GPT 😃", title: "Chatgpt a disposición", description: "Habla con chatgpt si deseas saber algo 👀", id: ".chatgpt hola" }
]},
{ title: "💥 APARTADO DE MENU 💥", highlight_label: "Popular",
rows: [
{ header: "💯 MENU COMPLETO 💯", title: "Mirar el menu completo", description: "Mira todos los comandos del bot 🔥", id: ".menucompleto" },
{ header: "🔊 MENU DE AUDIOS 🔊", title: "Mirar el menu de audios", description: "Escucha audios con el bot 🤖", id: ".menuadv" },
{ header: "⬇️ MENU DE DESCARGAS ⬇️", title: "Mirar menu de descargas", description: "Los comandos para descargar estan aqui 💯", id: ".menudown" },
{ header: "🎊 MENU RPG 🎊", title: "Mirar el menu de rpg", description: "Sube de nivel y gana mas economia 🪙", id: ".menurpg" },
{ header: "🧰 MENU HERRAMIENTAS 🧰", title: "Mirar el menu de herramientas", description: "Comandos utiles en este apartado ✅", id: ".menuhrmts" },
{ header: "🥳 MENU STICKERS 🥳", title: "Mirar el menu de stickers", description: "Puedes hacer stickers en este apartado 👀", id: ".menustick" },
{ header: "🥏 MENU PARA GRUPOS 🥏", title: "Mirar el menu de grupos", description: "Mejora tu grupo con NaufraZapp-MD 😃", id: ".menugroup" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: wm + ` \n*${usedPrefix}menucompleto*` },
header: { title: `\n👋🏻 Bienvenido/a ${taguser}`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
      
} else { 
let menu = `⬇️ Selecciona los botones ⬇️`.trim()
await conn.sendFile(m.chat, menusImgs4, 'naufra.jpg', menu,  fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'Bot de WhatsApp automatico.', previewType: 0, thumbnail: imagen4, sourceUrl: yt}}}) 
//await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
}} catch (e) {
await m.reply(m.chat, 'error en el comando.')
console.log(`error`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help\?)$/i
handler.register = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
      
