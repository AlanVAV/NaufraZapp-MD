let handler = async (m, { conn, usedPrefix, isOwner }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:💎 NaufraZapp-MD 💎\nFN:💎 NaufraZapp-MD 💎\nORG:💎 NaufraZapp-MD 💎\nTITLE:\nitem1.TEL;waid=51929838430:51929838430\nitem1.X-ABLabel:💎 NaufraZapp-MD 💎\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:💎 NaufraZapp-MD 💎\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '💎 NaufraZapp-MD 💎', contacts: [{ vcard }] }}, {quoted: fkontak})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creador', 'propietario', 'dueño'] 

handler.register = true
export default handler

/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['owner', 'creador']  
handler.register = true
export default handler*/
