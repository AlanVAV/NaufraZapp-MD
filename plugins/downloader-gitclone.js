import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `¡º?¡»Ingrese un enlace de github v¨¢lido.

Por ejemplo:
${usedPrefix + command} https://github.com/Bots-WhatsApp-OFC/Githib-Emoji
`;
  if (!regex.test(args[0])) throw '¡º?¡»El enlace ingresado no es valido.\nIntente de nuevo con otro enlace que si sea valido.';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`¡º?¡»Descargando...`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
handler.register = true
export default handler;
