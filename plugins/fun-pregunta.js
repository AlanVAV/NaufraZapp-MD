var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `*Y EL TEXTO?*`)
//m.react('❔')
await delay(1000 * 1)
//m.react('❓')
await delay(1000 * 1)
//m.react('❔')
await delay(1000 * 1)

conn.reply(m.chat, `🌩 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀𝐒 🌩
  
*Pregunta:* ${text}
*Respuesta:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo','Para que quieres saber','No te dire la respuesta'].getRandom()}`)

}
handler.help = ['pregunta']
handler.tags = ['juegos']
handler.command = /^preguntaaa|preguntasss|apakahhh$/i

handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

