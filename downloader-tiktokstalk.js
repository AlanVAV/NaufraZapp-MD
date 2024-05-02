import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙳𝙴 𝚃𝙸𝙺𝚃𝙾𝙺*', m);
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
    const Mystic = `
*𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${json.result.username}
*𝙽𝙾𝙼𝙱𝚁𝙴:* ${json.result.nickname}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚁𝙴𝚂:* ${json.result.followers}
*𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚂:* ${json.result.followings}
*𝙻𝙸𝙺𝙴𝚂:* ${json.result.likes}
*𝚅𝙸𝙳𝙴𝙾𝚂:* ${json.result.video}
*𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${json.result.bio}
`.trim();
    conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false);
  } catch (e) {
    throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝚂𝙴 𝙴𝙲𝙾𝙽𝚃𝚁𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙳𝙾*';
  }
};
handler.help = ['tiktokstalk'].map((v) => v + ' <username>');
handler.tags = ['stalk'];
handler.command = /^(tiktokuser2|ttstalk)$/i;
export default handler;
