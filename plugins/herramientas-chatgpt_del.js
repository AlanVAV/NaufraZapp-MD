const handler = async (m, {usedPrefix}) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`*『✦』Se ha eliminado la sesion del bot con exito.*`);
  } catch (error1) {
    console.log(error1);
    throw `*『✦』Ocurrio un error inesperado.*`;
  }
};
handler.command = ['delchatgpt'];
export default handler;
