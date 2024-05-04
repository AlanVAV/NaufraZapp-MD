const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
『✦』Debe de ingresar de estas maneras:

*Para abrir el grupo, es:*
 *${usedPrefix + command} abrir*
 
*Para cerrar el grupo, es:*
 *${usedPrefix + command} cerrar*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('『✦』Grupo configurado con exito.');}
};
handler.help = ['nfzgroup open / close', 'nfzgrupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(nfzgroup|nfzgrupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
