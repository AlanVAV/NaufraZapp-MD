const {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion, 
    MessageRetryMap,
    makeCacheableSignalKeyStore, 
    jidNormalizedUser,
    PHONENUMBER_MCC
   } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import crypto from 'crypto'
import fs from "fs"
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js';

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {

  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
	const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
	throw `「𐄢」Solo puedes usar este comando en el bot principal.\n\n「𐄢」 wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix}serbot2`
}

	//=====
  async function bbts() {

  let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8)
  //let authFolderB = m.sender.split('@')[0]


    if (!fs.existsSync("./BotsWhatsAppOFC/"+ authFolderB)){
        fs.mkdirSync("./BotsWhatsAppOFC/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./BotsWhatsAppOFC/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""
    
//--
const {state, saveState, saveCreds} = await useMultiFileAuthState(`./BotsWhatsAppOFC/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  //browser: ['Chrome (Linux)', '', ''],
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

//--
let conn = makeWASocket(connectionOptions)

if (methodCode && !conn.authState.creds.registered) {
    if (!phoneNumber) {
        //parent.sendMessage(m.chat, { text: `✴️ Su número de teléfono no está definido` }, { quoted: m })
        process.exit(0);
    }
    let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
        //parent.sendMessage(m.chat, { text: `✴️ Su número debe comenzar con el código de país` }, { quoted: m })
        process.exit(0);
    }

    setTimeout(async () => {
        let codeBot = await conn.requestPairingCode(cleanedNumber);
        codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
        //parent.sendMessage(m.chat, { text: `➤ Code: *${codeBot}*\n\n${mssg.botqr}` }, { quoted: m })
       await conn.reply(m.chat, codeBot, fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🤖 SUB BOT CODE 🤖', body: wm, sourceUrl: global.channel, thumbnail: global.img3 }}})
	    parent.sendFile(m.chat, 'https://i.ibb.co/SKKdvRb/code.jpg', 'qrcode.png', `╭━━━•『🤖 𝗦𝗨𝗕 𝗕𝗢𝗧 🤖』•━• ⊹ ⋄\n┃    \`𝑵𝑨𝑼𝑭𝑹𝑨𝒁𝑨𝑷𝑷 - 𝑴𝑫 | V2\`\n╰━━━•『🤖 𝗦𝗨𝗕 𝗕𝗢𝗧 🤖』•━• ⊹ ⋄\n『✦』Sigue estos pasos para ser un *Sub-Bot*\n⊱•─────────────────•⊰\n❬1️⃣❭» Ingrese en los tres puntos en la parte superior de WhatsApp.\n⊱•─────────────────•⊰\n❬2️⃣❭» Presione en *Dispositivos Vinculados*\n⊱•─────────────────•⊰\n❬3️⃣❭» Presione en *Vincular un dispositivo*\n⊱•─────────────────•⊰\n❬4️⃣❭» En la parte inferior aparece un texto de: *Vincular con el número de teléfono*, presione en ese apartado.\n⊱•─────────────────•⊰\n❬5️⃣❭» Ingrese los 8 códigos que el bot le mandara.\n⊱•─────────────────•⊰\n❬6️⃣❭» Al realizar los pasos ya te habrás conectado.\n⊱•─────────────────•⊰\n❬💬❭» El código expira en 60 segundos...\n\n> ${wm}`, m)
rl.close();
	  
    }, 3000);
}

conn.isInit = false

//---new
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    // scan qr
   /* if (qr) {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', `${mssg.botqr}`, m)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan.key })
  }, 50000) //50 segundos
}*/

    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)

     if (code !== DisconnectReason.connectionClosed){ 
        parent.sendMessage(conn.user.jid, {text : `「𐄢」Reconectando, espere...`}, { quoted: m }) //reconectar
    } else {
        parent.sendMessage(m.chat, {text : `「𐄢」Sesion cerrada, tiene que volver a escanear el codigo QR.`}, { quoted: m }) // session cerrada
    }
    }
    //----
    if (global.db.data == null) loadDatabase()

    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parent.sendMessage(m.chat, {text : args[0] ? `「✅」Conectado con exito a NaufraZapp-MD` : `「𐄢」Conectado, puede conectese usando el ID de serbot`}, { quoted: m })
    await sleep(5000)
    if (args[0]) return
		await parent.sendMessage(conn.user.jid, {text : `「𐄢」Para volver a conectarse puede usar el comando #codesub2 para conectarte.`}, { quoted: m })
		parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./BotsWhatsAppOFC/" + authFolderB + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
	  }
 
  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
      conn.ev.removeAllListeners()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }}, 60000)
    

	
let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}

if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
bbts()

}
handler.help = ['botclone']
handler.tags = ['bebot']
handler.command = ['serbot2', 'codesub2', 'jadibot2', 'botclone2', 'clonebot2']
handler.register = true
handler.private = true

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
