import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*『✦』Ingrese su codigo de verificacion, si no recuerdas el codigo, use el comando:* \`#myns\`';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*『✦』Ocurrio un error, verifique que el codigo sea correcto.*';
  user.registered = false;
  m.reply(`*『✅』Ya no estas registrado en NaufraZapp-MD*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;

