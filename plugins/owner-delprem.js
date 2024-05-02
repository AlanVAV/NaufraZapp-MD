const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `*『👀』Mensione o responda el mensaje del participante asignado como usuario premium para quitarle el modo premium.*`;
  if (!user) throw `*『❌』El participante no se encuentra en la base de datos, tiene que registrarse.*`;
  if (user.premiumTime = 0) throw '*『⚠️』El participante no es un usuario premium.*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();

  user.premiumTime = 0;

  user.premium = false;

  const textdelprem = `*『✅』El participante: @${who.split`@`[0]} ahora no es un usuario premium en este bot.*`;
  m.reply(textdelprem, null, {mentions: conn.parseMention(textdelprem)});
};
handler.help = ['delprem <@user>'];
handler.tags = ['owner'];
handler.command = /^(remove|-|del)prem$/i;
handler.group = true;
handler.rowner = true;
export default handler;
