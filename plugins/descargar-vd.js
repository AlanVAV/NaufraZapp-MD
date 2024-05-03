import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `Ingrese un texto para buscar el contenido.`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `🐦‍🔥 ᵖˡᵃʸ│𝗡𝗼𝗺𝗯𝗿𝗲:
• ${yt_play[0].title}
⊱•───────• ${vs} •───────•⊰
🐦‍🔥 ᵖˡᵃʸ│𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:
• ${secondString(yt_play[0].duration.seconds)}
⊱•───────• ${vs} •───────•⊰
🐦‍🔥 ᵖˡᵃʸ│𝗩𝗶𝘀𝘁𝗮𝘀:

> NZ
• ${MilesNumber(yt_play[0].views)}`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['🍃 𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼 🍃', '/menucompleto']], m, md)

let listSections = [];             
listSections.push({
title: '⬇️' DESCARGAS ⬇️,
rows: [{ header: "🔊 𝗔𝗨𝗗𝗜𝗢 🔊", title: "", id: `${usedPrefix}playdoc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, { header: "🎬 𝗩𝗜𝗗𝗘𝗢 🎬", title: "", id: `${usedPrefix}playdoc2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }
]});

/*listSections.push({
  text: `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}) */

await conn.sendList(m.chat, `𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘𝗟 𝗖𝗢𝗡𝗧𝗘𝗡𝗜𝗗𝗢:\n• *${text}*`, `\n🍁 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿 🍁`, `🗂️ 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖𝙧 🗂️`, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤 𝙚𝙣 𝙡𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖...\n\n${wm}`, fkontak, m)
console.log(`𝙍𝙚𝙥𝙤𝙧𝙩𝙖 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.`)
console.log(e)
handler.limit = 0
}}
handler.command = ['downva', 'dlva', 'buscarytav']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }
                                                                                                                                
