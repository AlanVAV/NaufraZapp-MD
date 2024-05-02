const handler = async (m, {conn, text}) => {
  if (!text) throw '*『👤』Mensione o etiquete a un usuario.*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*『👤』Mensione o etiquete a un usuario.*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*『✅』Se ha desbaneado el usuario con éxito.*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;

/*let handler = async (m, {conn, text}) => {

let user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
let bant = `📍 *Etiquete a una persona*`
if (!text) return conn.reply(m.chat, bant,)
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.reply(m.chat, bant, m, { mentions: [text] })
let users = global.db.data.users

users[who].banned = false
 m.reply(`✅ *Se desbaneo al usuario ${text} con éxito*`, m.chat, { mentions: conn.parseMention(text)}) 

}
handler.help = ['unbanuser']
handler.tags = ['own']
handler.command = /^unbanuser$/i

handler.rowner = true

export default handler*/