import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '51929838430@s.whatsapp.net', '『⬇️』Aqui tienes tu código', 'status@broadcast')
}
handler.help = ['myns']
handler.tags = ['rg']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler