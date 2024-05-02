const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*『✦』Use el comando de esta manera:*\n\n*${usedPrefix + command} Hola, elije una opción |opcion1|opcion2...*`;
  if (b[12]) throw `*『✦』Use el comando de esta manera:*\n\n*${usedPrefix + command} Hola, elije una opción |opcion1|opcion2...*`;
  const caption = `*『✦』La encuesta fue realizada por:*\n${name}\n*La respuesta:*\n${text.split('|')[0]}`.trim();
  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['poll', 'encuesta'];
export default handler;
