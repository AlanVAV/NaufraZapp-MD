import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*『✦』Ingresa un enlace para acortar.*';
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `*『✦』Error, verifique que el texto sea correcto.*`;
  const done = `*『✦』Enlace acortado correctamente.*\n\nAntes:\n${text}\n\n*Actual:*\n${shortUrl1}`.trim();
  m.reply(done);
};
handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|short|acortar|corto)$/i;
handler.fail = null;
export default handler;
