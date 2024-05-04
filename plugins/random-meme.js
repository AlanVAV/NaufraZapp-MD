/*   Creditos - ig : https://www.instagram.com/fg98._/    */
import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
//conn.sendFile(m.chat, url, 'error.jpg', `😂😂😂`, m)}
conn.sendButton(m.chat, `_🤣 ${command}_`.trim(), wm, url, [['↩️ 𝑶𝑻𝑹𝑶 ↩️', `/${command}`]], null, null, m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
export default handler

