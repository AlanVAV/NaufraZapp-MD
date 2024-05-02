import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.postimg.cc/Bbg6n5zQ/IMG-20240421-WA0274.jpg')
  if (user.registered === true) throw `*『✦』Ya estas registrado, para volver a registrarte, usa el comando: #myns*`
  if (!Reg.test(text)) throw `*『✦』El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n#reg *Nombre.edad*\n\n\`\`\`Ejemplo:\`\`\`\n#reg *Naufrago.19*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*『✦』No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
  if (!age) throw '*『✦』No puedes registrarte sin la edad, la edad es opcional. Inténtelo de nuevo.*'
  if (name.length >= 30) throw '*『✦』El nombre no debe de tener mas de 30 caracteres.*' 
  age = parseInt(age)
  if (age > 999) throw '*『😏』Viejo/a Sabroso/a*'
  if (age < 5) throw '*『🍼』Ven aquí, te adoptare!!*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
//m.react('📩') 
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
let regbot = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「😃」𝗡𝗼𝗺𝗯𝗿𝗲:
${name}

「📆」𝗘𝗱𝗮𝗱:
${age} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> Para ver tu numero de serie, use el comando: \`#myns\`

ⁿᵃᵘᶠʳᵃᶻᵃᵖᵖ`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler