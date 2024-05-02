import fetch from 'node-fetch';
const handler = async (m, {conn, args, usedPrefix}) => {
  if (args.length == 0) return conn.reply(m.chat, `*『✦』Puedes buscar de la siguiente manera:*\n\n\`#kpop bts\`\n\`#kpop exo\`\n\`#kpop blackpink\``, m);
  if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
    fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
        .then((res) => res.text())
        .then((body) => {
          const randomkpop = body.split('\n');
          const randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)];
          conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m);
        })
        .catch(() => {
          conn.reply(m.chat, '*『✦』Ocurrio un error inesperado, intentelo de nuevo.*', m);
        });
  } else {
    conn.reply(m.chat, `*『✦』Ocurrio un error, la busqueda no está disponible. Por favor escribe ${usedPrefix}kpop para ver la lista de busquedas disponibles en el bot.*`, m);
  }
};
handler.help = ['kpop'].map((v) => v + ' <query>');
handler.tags = ['image'];
handler.command = /^(kpop)$/i;
export default handler;
