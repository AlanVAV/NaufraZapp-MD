
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `*${usedPrefix + command}* Erika Lundmeon - Yad`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `No encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🥳') 
  let play = `
Titulo: ${vid.title}
Publicado: ${vid.ago}
Duración: ${vid.timestamp}
Vistas: ${vid.views.toLocaleString()}`
 await conn.sendButton2(m.chat, play, wm, thumbnail, [
    ['MP3', `${usedPrefix}playdoc ${url}`],
    ['MP4', `${usedPrefix}playdoc2 ${url}`]
  ], null, [['Canal', `${channel}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['dlav', 'downav']
handler.disabled = false

export default handler
   
