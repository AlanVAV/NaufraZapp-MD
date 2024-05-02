const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`*『✦』Bienvenido/a a tu balance.*

Nombre:
• ${name}

Diamantes:
• ${global.db.data.users[who].diamond} 💎

Experiencia:
• ${global.db.data.users[who].exp} ⚡

*『✦』Para comprar diamantes use estos comandos:*
*${usedPrefix}buy 3*
*${usedPrefix}buyall*`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
