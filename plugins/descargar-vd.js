import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `Ingrese un nombre, por ejemplo: *${usedPrefix + command}* Lil Peep hate my life`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `No existe.`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
	≡ *FG MUSIC*
┌──────────────
▢ 📌 *Nombre:* ${vid.title}
▢ 📆 *Publicado:* ${vid.ago}
▢ ⌚ *Duracion:* ${vid.timestamp}
▢ 👀 *Vistas:* ${vid.views.toLocaleString()}
└──────────────`
 await conn.sendButton2(m.chat, play, wm, thumbnail, [
    ['🎶 MP3', `${usedPrefix}playdoc ${url}`],
    ['🎥 MP4', `${usedPrefix}playdoc2 ${url}`]
  ], null, [['Canal NZ', `${channel}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['audiodown', 'videodown']
handler.disabled = false

export default handler
