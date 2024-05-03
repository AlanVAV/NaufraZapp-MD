let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '👀', key: m.key } })
let str = `*💥 GRUPOS OFICIALES🐦‍🔥*

    *Naufrazapp oficial_*
  *❏ https://chat.whatsapp.com/IxdHYBEnUJ5Eiu3qiDjCTal*
*_Unete_*

    *_grupo bot Naufrazapp-MD_*
  *_❏ https://chat.whatsapp.com/Elot5C62z0AGvxwZjXsW4j*
*_Unete_*

  *💥 CANAL OFICIAL🐦‍🔥*

    *_Canal NaufraZapp-MD_*
  *❏ ${channel}*
*_Unete_*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^gruponz|linknz|grupoofc|grupooficial$/i
handler.register = true
handler.exp = 33

export default handler
