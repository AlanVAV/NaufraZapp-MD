import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  const info = `
「🤖 \`ESTADISTICAS\` 🤖」

✧ ᵇᵒᵗ│𝗧𝗜𝗘𝗠𝗣𝗢 𝗔𝗖𝗧𝗜𝗩𝗢:
• *${uptime}*

✧ ᵇᵒᵗ│𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗖𝗛𝗔𝗧𝗦:
• *${chats.length - groups.length}*

✧ ᵇᵒᵗ│𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧𝗦:
• *${groups.length}* 

✧ ᵇᵒᵗ│𝗖𝗛𝗔𝗧𝗦 𝗔𝗟𝗟:
*${chats.length}* 
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l` },
    mimetype: `application/${document}`,
    fileName: `💯 NaufraZapp-MD 💯`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l",
        mediaType: 2,
        previewType: "pdf",
        title: "Bot de WhatsApp automático",
        body: wm,
        thumbnail: menusImgs4,
        sourceUrl: "https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
  /*conn.sendButton(m.chat, Message, wm, [
    ['♾️ 𝗘𝗦𝗧𝗔𝗗𝗢 ♾️', `${usedPrefix}estado`],
    ['🌎 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 🌎', `${usedPrefix}allmenu`],
    ['🍁 𝗚𝗥𝗨𝗣𝗢 • 𝗡𝗭 🍁', `${usedPrefix}comprar`]
  ], m)*/
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
handler.register = true
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
