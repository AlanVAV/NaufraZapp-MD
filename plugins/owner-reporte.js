const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*『👀』Ingrese un mensaje de reporte, por ejemplo:* \`#reporte\` el comando menu no responde.`;
  if (text.length < 10) throw `*『💬』El reporte tiene que tener minimo mas de 10 caracteres.*`;
  if (text.length > 1000) throw `*『🗯️』El reporte no tiene que ser mas de 1000 caracteres, intentelo de nuevo.*`;
  const teks = `

wa.me/${m.sender.split`@`[0]}

${text}
`;
  conn.reply('5493873687620@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
    conn.reply('523142183828@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});

  m.reply(`*『✅』Se ha enviado el reporte, tendra respuestas si el mensaje mensionado sea cierto, y si no, sera ignorado.*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;