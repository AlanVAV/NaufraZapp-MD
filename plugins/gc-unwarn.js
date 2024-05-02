const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const warntext = `*『✦』Mensione o responda el mensaje de un participante.*`;
  if (!who) throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '*『✦』El participante tiene 0 advertencia*';
  user.warn -= 1;
  await m.reply(`『✦』Para el participante: ${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`}\nSe ha quitado una advertencia.\n\n*『✦』Advertencias: ${user.warn}/3*`, null, {mentions: [who]});
};
handler.command = /^(unwarn|delwarn|quitaradvertencia|deladvertencia|delwarning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
