let media = menusImgs4.getRandom()
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `📁 𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝙀 𝙀𝙇 𝙈𝙊𝘿𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍.
`
await conn.sendButton(m.chat, str, `Ajustes para grupos.\n` + author, media, [
['👥 Banear chat', '.banchat'],
['⏱️ Cerrar por 1H', '#grouptime on 1'],
['👥 Cerrar el grupo', '/grupo cerrar']], null, [
['Canal', `${channel}`]], m)}
handler.command = /^ajgrupo$/i
handler.exp = 80
export default handler
