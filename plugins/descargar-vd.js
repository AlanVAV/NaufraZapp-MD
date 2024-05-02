import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `Ingrese un nombre, por ejemplo: *${usedPrefix + command}* Erika Lundmoen - Yad`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `No existe.`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
📑 » *Nombre:* ${vid.title}
📆 » *Publicado:* ${vid.ago}
⏳ » *Duracion:* ${vid.timestamp}
👀 » *Vistas:* ${vid.views.toLocaleString()}`
 await conn.sendButton(m.chat, play, wm, thumbnail, [
    ['🎧 𝗠𝗨𝗦𝗜𝗖𝗔 • 𝗡𝗭 🎧', `${usedPrefix}playdoc ${url}`],
    ['🎬 𝗩𝗜𝗗𝗘𝗢 • 𝗡𝗭 🎬', `${usedPrefix}playdoc2 ${url}`],
    ['🍃 Volver al Menu 🍃', `${usedPrefix}menu`]
  ], null, [['Canal', `${channel}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['dlav', 'downav']
handler.disabled = false

export default handler
