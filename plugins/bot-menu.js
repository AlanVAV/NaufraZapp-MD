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
    conn.sendButton(m.chat, m2, wm, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpl)
    /*conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)*/
   
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'memu'] 

export default handler
