let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `👀💬 ¿Quieres el bot 24/7 en tu grupo? ✨🥳

• 🍃🌳 Contactate conmigo en el numero: 🔥🍁
• wa.me/51929838430

🍃🍁 Puedes entrar am grupo oficial 🔱🌳
• https://chat.whatsapp.com/IxdHYBEnUJ5Eiu3qiDjCTa
> 🌳🍃 Recuerda que no se admiten bots en este grupo 🔥🍁

❤️🎒 Recuerda estar atento en el canal oficial 💚🥳

🐦‍🔥 𝑵𝒂𝒖𝒇𝒓𝒂𝒁𝒂𝒑𝒑-𝑴𝑫 🐦‍🔥`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🥳✨ 𝐁𝐎𝐓 🎊 *24/7* ✨🥳`,
body: `🐦‍🔥 ¡¡¡𝙊𝙗𝙩𝙚𝙣𝙡𝙤 𝙖𝙝𝙤𝙧𝙖!!! 🐦‍🔥`,
"previewType": "PHOTO",
thumbnailUrl: menusImgs2, 
sourceUrl: 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'}}},
{ quoted: m})
}
handler.tags =['info'] 
handler.help = ['infinity', 'host', 'hosting'] 
handler.command = /^(comprar|hosting)$/i
export default handler
  
