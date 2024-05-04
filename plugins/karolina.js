let media = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `📁 𝙎𝙀𝙇𝙀𝘾𝘾𝙄𝙊𝙉𝙀 𝙀𝙇 𝙈𝙊𝘿𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍.
`
await conn.sendButton(m.chat, str, `Ajustes para grupos.\n` + author, media, [
['✅ Abrir el grupo', '.nfzgrupo abrir'],
['⛔ Cerrar el grupo', '#nfzgrupo cerrar'],
['🗂️ Configuración', '/funcs']], null, [
['Canal', `${channel}`]], m)}
handler.command = /^grupo|group$/i
handler.exp = 80
export default handler

