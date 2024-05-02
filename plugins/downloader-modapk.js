import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*『👀』Ingrese el nombre de la aplicación para buscar. Por ejemplo: #apk WhatsApp.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `*『📦 A P L I C A C I O N E S 📦』*
    
*『🗂️』NOMBRE:*
• ${data5.name}
    
*『🛰️』WEB:*
• ${data5.package}

*『♻️』ULTIMA VERSIÓN:*
• ${data5.lastup}

*『📦』PESO:*
• ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*『👀』Ingrese el nomnre de la aplicación para buscar. Por ejemplo: #apk WhatsApp.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*『❌』No se pudo enviar el archivo, tal vez se deba a que pesa mucho.*`;
  }    
};
handler.command = /^(apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
handler.limit = true
export default handler;
