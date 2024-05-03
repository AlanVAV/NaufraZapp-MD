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
🐦‍🔥 ᵖˡᵃʸ│𝗡𝗼𝗺𝗯𝗿𝗲:
${vid.title}
⊱•───────• ${vs} •───────•⊰
🐦‍🔥 ᵖˡᵃʸ│𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻:
${vid.timestamp}
⊱•───────• ${vs} •───────•⊰
🐦‍🔥 ᵖˡᵃʸ│𝗩𝗶𝘀𝘁𝗮𝘀:
${vid.views.toLocaleString()}`
 await conn.sendButton(m.chat, play, wm, thumbnail, [
    ['❬🔊❭ 𝗔 𝗨 𝗗 𝗜 𝗢 ❬🔊❭', `${usedPrefix}playdoc ${url}`],
    ['❬🎬❭ 𝗩 𝗜 𝗗 𝗘 𝗢 ❬🎬❭', `${usedPrefix}playdoc2 ${url}`],
    ['「🍁 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 🍁」', `${usedPrefix}menu`]
  ], null, [['Canal', `${channel}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['dlav', 'downav']
handler.disabled = false

export default handler
