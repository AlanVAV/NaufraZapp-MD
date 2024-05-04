import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
if (!teks) throw `*Ingrese el nombre de la canción por favor. Por ejemplo: ${usedPrefix + command} Billie Eilish bored*`
try {
const result = await getTracks(teks);
const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
const json = await res.json();
let img; 
try {
img = result.album.artwork;
} catch {
try {
img = json.thumbnail.genius;
} catch {
const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
img = await bochil.getRandom();
}}
await conn.sendButton(m.chat, `*TITULO: ${result[0].title || ''}*\n\n*ARTISTA: ${result[0].artist || ''}*\n\n*LETRA:*\n${lyrics || ''}`, null, img, [
['🎵 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝘼𝙪𝙙𝙞𝙤 🎵', `/playdoc ${text}`],
['🎬 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙑𝙞𝙙𝙚𝙤 🎬', `#playdoc2 ${text}`],
['🌃 𝙈𝙚𝙣𝙪 🌃', '/menu']], null, null, m)
//conn.sendFile(m.chat, img, 'letra.jpg', `ღ ${mid.smsYT1} :\n💚 *${result[0].title || ''}*\n\nღ ${mid.smsYT2} :\n💜 *${result[0].artist || ''}*\n\nღ ${mid.smsYT3} :\n${lyrics || ''}`, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
} catch (e) {
await conn.reply(m.chat, `𝙀𝙧𝙧𝙤𝙧 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`, fkontak, m)
console.log(`𝙀𝙧𝙧𝙤𝙧 𝙚𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: ${usedPrefix + command}`)
console.log(e)
handler.limit = 0
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 0
//handler.level = 2
//handler.register = true
export default handler
