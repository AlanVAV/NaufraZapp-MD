/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `𝗜𝗻𝗴𝗿𝗲𝘀𝗲 𝘂𝗻 𝗻𝗼𝗺𝗯𝗿𝗲 𝗱𝗲 𝗹𝗮 𝗺𝘂𝘀𝗶𝗰𝗮 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗮 𝗯𝘂𝘀𝗰𝗮𝗿.`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
┌•━━━━━━━━━━━━━━━━━━━━•〤
│「🎬  \`YouTube Bot\`  🎧」
└•━━━━━━━━━━━━━━━━━━━━•〤
ᵖˡᵃʸ│𝗧𝗶𝘁𝘂𝗹𝗼/𝗡𝗼𝗺𝗯𝗿𝗲:
• ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ᵖˡᵃʸ│𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:
• ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ᵖˡᵃʸ│
• ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ᵘʳˡ│𝗘𝗻𝗹𝗮𝗰𝗲:
• ${yt_play[0].url}

1:35 ━━━━━━━━━━━•───────
⏪                           ⏸️                          ⏩
`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['🌎 𝙈𝙚𝙣𝙪 🌎', '/menucompleto']], m, md)

let listSections = [];             
listSections.push({
title: comienzo + ' 🎧 𝗦𝗘𝗟𝗘𝗖𝗖𝗜𝗢𝗡𝗔𝗥 🎬 ' + fin,
rows: [{ header: "🎧 AUDIO │ 𝗡𝗭", title: "", id: `${usedPrefix}playdoc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, { header: "🎬 VIDEO │ 𝗡𝗭", title: "", id: `${usedPrefix}playdoc2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }
]});
*/
/*listSections.push({
  text: `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}) */
/*
await conn.sendList(m.chat, `¿Que formato quiere para el contenido?\n\nNombre: ${text}\n`, `\n⬇️ Seleccione en este apartado ⬇️`, `🎧 𝗦𝗲𝗹𝗲𝗰𝗰𝗶𝗼𝗻𝗮𝗿 🎬`, listSections, {quoted: m});
} catch (e) {
await conn.reply(m.chat, `Ocurrio un error, reporte este comando con: #report.`, m)
console.log(`ERROR, INTENTELO DE NUEVO POR FAVOR.`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
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
  */                    

