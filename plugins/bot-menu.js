let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
┌─⊷ *Menu* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
▢ Fino señores
▢ Sad
└──────────────
`
    let pp = imagen4; 
    await conn.sendButton(m.chat, m2, wm, pp, [
    ['❬🔊❭ 𝗔 𝗨 𝗗 𝗜 𝗢 ❬🔊❭', `${usedPrefix}playdoc`],
    ['❬🎬❭ 𝗩 𝗜 𝗗 𝗘 𝗢 ❬🎬❭', `${usedPrefix}playdoc2`],
    ['「🍁 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 🍁」', `${usedPrefix}menu`]
  ], null, [['Canal', `${channel}`]], m)
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)*/
   
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'memu'] 

export default handler
