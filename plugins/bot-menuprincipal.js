import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「📑ִֶָ 𖥔 ࣪˖𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏ִֶָ 𖥔 ࣪˖📑」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}creador
└•⌕ *contacto del creador*
┌• ${usedPrefix}cuentanz
└•⌕ *cuentas oficiales*
┌• ${usedPrefix}cuentasoficiales
└•⌕ *cuentas oficiales*
┌• ${usedPrefix}estado
└•⌕ *ver estado del bot*
┌• ${usedPrefix}status
└•⌕ *ver estado del bot*
┌• ${usedPrefix}statusbot
└•⌕ *ver estado del bot*
┌• ${usedPrefix}gruponz
└•⌕ *ver el grupo oficial*
┌• ${usedPrefix}horario
└•⌕ *ver el horario*
┌• ${usedPrefix}comprar
└•⌕ *comprar bot*
┌• ${usedPrefix}hosting
└•⌕ *comprar servidores*
┌• ${usedPrefix}infobot
└•⌕ *información del bot*
┌• ${usedPrefix}speed
└•⌕ *rapidez del bot*
┌• ${usedPrefix}ping
└•⌕ *rapidez del bot*
┌• ${usedPrefix}listprem
└•⌕ *lista de usuarios premium*
┌• ${usedPrefix}sc
└•⌕ *script*
┌• ${usedPrefix}scrip
└•⌕ *script*
┌• ${usedPrefix}script
└•⌕ *script*
┌• ${usedPrefix}speedtest
└•⌕ *velocidad del bot*
┌• ${usedPrefix}instalarbot
└•⌕ *instalar el bot*
┌• ${usedPrefix}installbot
└•⌕ *instalar el bot*
┌• tyc
└•⌕ *terminos y condiciones*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「🌎ִֶָ 𖥔 ࣪˖𝑺𝒆𝒓 𝑩𝒐𝒕 𝑵𝒁ִֶָ 𖥔 ࣪˖🌎」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}deletesesion
└•⌕ *eliminar sesion*
┌• ${usedPrefix}serbot
└•⌕ *escanea con código QR*
┌• ${usedPrefix}serbot --code 
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}codesub2
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}subbots
└•⌕ *ver sub bots*
┌• ${usedPrefix}bcbots
└•⌕ *mensaje para todos los subbots*
┌• ${usedPrefix}stop
└•⌕ *apagar mi sub bot*
┌• ${usedPrefix}token
└•⌕ *token para ser sub bot.*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「⬇️ִֶָ 𖥔 ࣪˖𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔ִֶָ 𖥔 ࣪˖⬇️」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}fb
└•⌕ *enlace*
┌• ${usedPrefix}gdrive
└•⌕ *enlace*
┌• ${usedPrefix}gitclone
└•⌕ *enlace*
┌• ${usedPrefix}ig
└•⌕ *enlace*
┌• ${usedPrefix}instagram
└•⌕ *enlace*
┌• ${usedPrefix}iguser
└•⌕ *user*
┌• ${usedPrefix}igstory
└•⌕ *enlace*
┌• ${usedPrefix}imagen
└•⌕ *texto*
┌• ${usedPrefix}mediafire
└•⌕ *enlace*
┌• ${usedPrefix}apk
└•⌕ *nombre*
┌• ${usedPrefix}pinterest
└•⌕ *texto*
┌• ${usedPrefix}play
└•⌕ *enlace • texto*
┌• ${usedPrefix}play2
└•⌕ *enlace • texto*
┌• ${usedPrefix}play.1
└•⌕ *enlace • texto*
┌• ${usedPrefix}play.2
└•⌕ *enlace • texto*
┌• ${usedPrefix}play3
└•⌕ *enlace • texto*
┌• ${usedPrefix}play4
└•⌕ *enlace • texto*
┌• ${usedPrefix}playdoc
└•⌕ *enlace • texto*
┌• ${usedPrefix}playdoc2
└•⌕ *enlace • texto*
┌• ${usedPrefix}playlist
└•⌕ *texto*
┌• ${usedPrefix}playlist2
└•⌕ *texto*
┌• ${usedPrefix}tiktokfoto
└•⌕ *user*
┌• ${usedPrefix}ringtone
└•⌕ *enlace*
┌• ${usedPrefix}soundcloud
└•⌕ *nombre*
┌• ${usedPrefix}cover
└•⌕ *nombre*
┌• ${usedPrefix}spotify
└•⌕ *nombre*
┌• ${usedPrefix}stickerpack 
└•⌕ *nombre*
┌• ${usedPrefix}tiktok
└•⌕ *enlace*
┌• ${usedPrefix}tiktokimg
└•⌕ *enlace*
┌• ${usedPrefix}tiktokuser
└•⌕ *user*
┌• ${usedPrefix}wallpaper2
└•⌕ *texto*
┌• ${usedPrefix}twitter
└•⌕ *enlace*
┌• ${usedPrefix}twitter2
└•⌕ *enlace*
┌• ${usedPrefix}ytmp3doc
└•⌕ *enlace*
┌• ${usedPrefix}ytamp3
└•⌕ *enlace*
┌• ${usedPrefix}ytmp3
└•⌕ *enlace*
┌• ${usedPrefix}ytest
└•⌕ *enlace*
┌• ${usedPrefix}ytmp4doc
└•⌕ *enlace*
┌• ${usedPrefix}ytvmp4
└•⌕ *enlace*
┌• ${usedPrefix}ytmp4
└•⌕ *enlace*
┌• ${usedPrefix}videodoc
└•⌕ *enlace*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「👥ִֶָ 𖥔 ࣪˖𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝑮𝒓𝒖𝒑𝒂𝒍ִֶָ 𖥔 ࣪˖👥」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}add
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}agregar
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}añadir
└•⌕ *numero +54xxxxxxx*
┌• ${usedPrefix}admins
└•⌕ *llamar a los admins*
┌• ${usedPrefix}group
└•⌕ *open*
┌• ${usedPrefix}group
└•⌕ *close*
┌• ${usedPrefix}grupo
└•⌕ *abrir*
┌• ${usedPrefix}grupo
└•⌕ *cerrar*
┌• ${usedPrefix}grouptime on
└•⌕ *1*
┌• ${usedPrefix}grouptime off
└•⌕ *1*
┌• ${usedPrefix}del
└•⌕ *mensaje*
┌• ${usedPrefix}delete
└•⌕ *mensaje*
┌• ${usedPrefix}demote
└•⌕ *quitar admin*
┌• ${usedPrefix}quitaradmin
└•⌕ *quitar admin*
┌• ${usedPrefix}destraba
└•⌕ *evitar trabas*
┌• ${usedPrefix}sider
└•⌕ *evitar trabas*
┌• ${usedPrefix}verfantasmas
└•⌕ *ver inactivos*
┌• ${usedPrefix}hidetag
└•⌕ *foto, video, gif, sms*
┌• ${usedPrefix}infogroup
└•⌕ *información grupal*
┌• ${usedPrefix}reply
└•⌕ *fake reply*
┌• ${usedPrefix}kick
└•⌕ *@tag*
┌• ${usedPrefix}ban
└•⌕ *@tag*
┌• ${usedPrefix}sacar
└•⌕ *@tag*
┌• ${usedPrefix}kick2
└•⌕ *@tag*
┌• ${usedPrefix}ban2
└•⌕ *@tag*
┌• ${usedPrefix}sacar2
└•⌕ *@tag*
┌• ${usedPrefix}link
└•⌕ *mostrar enlace*
┌• ${usedPrefix}linkgroup
└•⌕ *mostrar enlace*
┌• ${usedPrefix}listanum
└•⌕ *lista de baneados*
┌• ${usedPrefix}kicknum
└•⌕ *lista de baneados*
┌• ${usedPrefix}listwarn
└•⌕ *lista de advertidos*
┌• ${usedPrefix}mute
└•⌕ *@tag*
┌• ${usedPrefix}unmute
└•⌕ *@tag*
┌• ${usedPrefix}promote
└•⌕ *@tag*
┌• ${usedPrefix}daradmin
└•⌕ *@tag*
┌• ${usedPrefix}restablecer
└•⌕ *cambiar link grupal*
┌• ${usedPrefix}setbye
└•⌕ *texto*
┌• ${usedPrefix}setwelcome
└•⌕ *texto*
┌• ${usedPrefix}setdesc
└•⌕ *texto*
┌• ${usedPrefix}setfoto
└•⌕ *img*
┌• ${usedPrefix}setname
└•⌕ *texto*
┌• ${usedPrefix}tagall
└•⌕ *mensionar a todos*
┌• ${usedPrefix}todos
└•⌕ *mensionar a todos*
┌• ${usedPrefix}invocar
└•⌕ *mensionar a todos*
┌• ${usedPrefix}unwarn
└•⌕ *@tag*
┌• ${usedPrefix}warn
└•⌕ *@tag*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「🧰ִֶָ 𖥔 ࣪˖𝑯𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔ִֶָ 𖥔 ࣪˖🧰」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}bard
└•⌕ *texto*
┌• ${usedPrefix}acortar
└•⌕ *enlace* 
┌• ${usedPrefix}short
└•⌕ *enlace*
┌• ${usedPrefix}edittamaño
└•⌕ *video, img*
┌• ${usedPrefix}tamaño
└•⌕ *video, img*
┌• ${usedPrefix}calc
└•⌕ *235 × 400*
┌• ${usedPrefix}chatgpt
└•⌕ *texto*
┌• ${usedPrefix}delchatgpt
└•⌕ *eliminar sesion*
┌• ${usedPrefix}chatgptvoz
└•⌕ *texto*
┌• ${usedPrefix}clima
└•⌕ *ciudad, país*
┌• ${usedPrefix}tiempo
└•⌕ *ciudad, país*
┌• ${usedPrefix}dalle
└•⌕ *texto*
┌• ${usedPrefix}dropmail
└•⌕ *configurar*
┌• ${usedPrefix}poll
└•⌕ *encuesta*
┌• ${usedPrefix}encuesta
└•⌕ *encuesta*
┌• ${usedPrefix}fake
└•⌕ *@tag*
┌• ${usedPrefix}fakereply
└•⌕ *@tag*
┌• ${usedPrefix}remini
└•⌕ *imagen*
┌• ${usedPrefix}hd
└•⌕ *imagen*
┌• ${usedPrefix}inspec
└•⌕ *enlace grupal*
┌• ${usedPrefix}nowa
└•⌕ *numero*
┌• ${usedPrefix}ocr
└•⌕ *numero*
┌• ${usedPrefix}totexto
└•⌕ *texto*
┌• ${usedPrefix}qr
└•⌕ *texto*
┌• ${usedPrefix}qrcode
└•⌕ *texto*
┌• ${usedPrefix}spoiler
└•⌕ *read more*
┌• ${usedPrefix}readmore
└•⌕ *read more*
┌• ${usedPrefix}readqr
└•⌕ *ver código QR*
┌• ${usedPrefix}revelar
└•⌕ *video • img*
┌• ${usedPrefix}view
└•⌕ *vídeo • img*
┌• ${usedPrefix}spam
└•⌕ *número, cantidad*
┌• ${usedPrefix}spamwa
└•⌕ *número, cantidad*
┌• ${usedPrefix}style
└•⌕ *texto*
┌• ${usedPrefix}styletext
└•⌕ *texto*
┌• ${usedPrefix}ssweb
└•⌕ *web*
┌• ${usedPrefix}ss
└•⌕ *web*
┌• ${usedPrefix}topdf
└•⌕ *texto, enlace*
┌• ${usedPrefix}translate
└•⌕ *mensaje traducido*
┌• ${usedPrefix}traducir
└•⌕ *mensaje traducido*
┌• ${usedPrefix}trad
└•⌕ *mensaje traducido*
┌• ${usedPrefix}quemusica
└•⌕ *buscar musica*
┌• ${usedPrefix}whatmusic
└•⌕ *buscar musica*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「🍃ִֶָ 𖥔 ࣪˖𝑴𝑨𝑲𝑬𝑹ִֶָ 𖥔 ࣪˖🍃」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}blur
└•⌕ *texto*
┌• ${usedPrefix}gay
└•⌕ *@tag*
┌• ${usedPrefix}hornycard
└•⌕ *@tag*
┌• ${usedPrefix}stupid
└•⌕ *@tag*
┌• ${usedPrefix}pixel
└•⌕ *@tag*
┌• ${usedPrefix}pixelar
└•⌕ *@tag*
┌• ${usedPrefix}simpcard
└•⌕ *@tag*
┌• ${usedPrefix}ytcomment
└•⌕ *texto*
┌• ${usedPrefix}logohacker
└•⌕ *texto*
┌• ${usedPrefix}aovwallpaper
└•⌕ *texto*
┌• ${usedPrefix}link1
└•⌕ *texto*
┌• ${usedPrefix}logofreefire
└•⌕ *texto*
┌• ${usedPrefix}memelogo
└•⌕ *texto*
┌• ${usedPrefix}memelogo2
└•⌕ *texto*
┌• ${usedPrefix}boom
└•⌕ *texto*
┌• ${usedPrefix}graffiticartoon
└•⌕ *texto*
┌• ${usedPrefix}girlgamer
└•⌕ *texto*
┌• ${usedPrefix}firework
└•⌕ *texto*
┌• ${usedPrefix}cardchristmas
└•⌕ *texto*
┌• ${usedPrefix}flowercard
└•⌕ *texto*
┌• ${usedPrefix}gold
└•⌕ *texto*
┌• ${usedPrefix}handlove
└•⌕ *texto*
┌• ${usedPrefix}heartcup
└•⌕ *texto*
┌• ${usedPrefix}heartflashlight
└•⌕ *texto*
┌• ${usedPrefix}birthdaycake
└•⌕ *texto*
┌• ${usedPrefix}birthdaycake3
└•⌕ *texto*
┌• ${usedPrefix}facebooksilverplay
└•⌕ *texto*
┌• ${usedPrefix}neonsantin
└•⌕ *texto*
┌• ${usedPrefix}facebooksilverplay2
└•⌕ *texto*
┌• ${usedPrefix}womenday
└•⌕ *texto*
┌• ${usedPrefix}summerysand
└•⌕ *texto*
┌• ${usedPrefix}wetglass
└•⌕ *texto*
┌• ${usedPrefix}mylove
└•⌕ *texto*
┌• ${usedPrefix}pikachu
└•⌕ *texto*
┌• ${usedPrefix}logochristmas
└•⌕ *texto*
┌• ${usedPrefix}birthdaycake2
└•⌕ *texto*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「🔱ִֶָ 𖥔 ࣪˖𝑷𝒂𝒓𝒂 𝑶𝒘𝒏𝒆𝒓𝒔ִֶָ 𖥔 ࣪˖🔱」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}addowner
└•⌕ *Dar owner.*
┌• ${usedPrefix}update
└•⌕ *Actualizar bot.*
┌• ${usedPrefix}agregarmsg
└•⌕ *Guardar sms.*
┌• ${usedPrefix}agregarvideo
└•⌕ *Guardar video.*
┌• ${usedPrefix}agregarsticker
└•⌕ *Guardar sticker.*
┌• ${usedPrefix}agregaraudio
└•⌕ *Guardar audio.*
┌• ${usedPrefix}agregarimg
└•⌕ *Guardar img.*
┌• ${usedPrefix}agregarvn
└•⌕ *Guardar.*
┌• ${usedPrefix}eliminarmsg
└•⌕ *Eliminar sms.*
┌• ${usedPrefix}eliminarvideo
└•⌕ *Eliminar video.*
┌• ${usedPrefix}eliminarsticker
└•⌕ *Eliminar sticker.*
┌• ${usedPrefix}eliminaraudio
└•⌕ *Eliminar audio.*
┌• ${usedPrefix}eliminarimg
└•⌕ *Eliminar img.*
┌• ${usedPrefix}eliminarvn
└•⌕ *Eliminar.*
┌• ${usedPrefix}vermsg
└•⌕ *Ver sms.*
┌• ${usedPrefix}vervideo
└•⌕ *Ver video.*
┌• ${usedPrefix}versticker
└•⌕ *Ver sticker.*
┌• ${usedPrefix}veraudio
└•⌕ *Ver audio.*
┌• ${usedPrefix}verimg
└•⌕ *Ver img.*
┌• ${usedPrefix}vervnmsg
└•⌕ *Ver.*
┌• ${usedPrefix}listavideo
└•⌕ *Lista de videos.*
┌• ${usedPrefix}listasticker
└•⌕ *Lista de stickers.*
┌• ${usedPrefix}listaaudio
└•⌕ *Lista de audios.*
┌• ${usedPrefix}listaimg
└•⌕ *Lista de img.*
┌• ${usedPrefix}listavn
└•⌕ *Lista.*
┌• ${usedPrefix}addprem
└•⌕ *Agregar user premium.*
┌• ${usedPrefix}addprem2
└•⌕ *Agregar user premium.*
┌• ${usedPrefix}addprem3
└•⌕ *Agregar user premium.*
┌• ${usedPrefix}addprem4
└•⌕ *Agregar user premium.*
┌• ${usedPrefix}dard
└•⌕ *Dar diamantes.*
┌• ${usedPrefix}añadirdiamantes
└•⌕ *Añadir diamantes.*
┌• ${usedPrefix}addd
└•⌕ *Agregar diamantes.*
┌• ${usedPrefix}añadirxp
└•⌕ *Dar exp.*
┌• ${usedPrefix}addxp
└•⌕ *Dar exp.*
┌• ${usedPrefix}tenerpoder
└•⌕ *Recursos ilimitados.*
┌• ${usedPrefix}autoadmin
└•⌕ *Solo owners.*
┌• ${usedPrefix}banchat
└•⌕ *Banear el chat.*
┌• ${usedPrefix}unbanchat
└•⌕ *Desbanear el chat.*
┌• ${usedPrefix}banlist
└•⌕ *Lista de baneados.*
┌• ${usedPrefix}banedlist
└•⌕ *Lista de desbaneados.*
┌• ${usedPrefix}banuser
└•⌕ *Banear el usuario.*
┌• ${usedPrefix}unbanuser
└•⌕ *Desbanear el usuario.*
┌• ${usedPrefix}bcgc
└•⌕ *Mensaje oficial.*
┌• ${usedPrefix}bcgc2
└•⌕ *Mensaje oficial.*
┌• ${usedPrefix}block
└•⌕ *Bloquear usuario.*
┌• ${usedPrefix}unblock
└•⌕ *Desbloquear usuario.*
┌• ${usedPrefix}blocklist
└•⌕ *Lista de bloqueados.*
┌• ${usedPrefix}bc
└•⌕ *Mensaje oficial.*
┌• ${usedPrefix}comunicado
└•⌕ *Mensaje oficial.*
┌• ${usedPrefix}bcc
└•⌕ *Mensaje oficial.*
┌• ${usedPrefix}bcchats
└•⌕ *Mensaje oficial.*
┌• ${usedPrefix}msg
└•⌕ *Mensaje.*
┌• ${usedPrefix}chetar
└•⌕ *Recursos ilimitados.*
┌• ${usedPrefix}infinity
└•⌕ *Recursos ilimitados.*
┌• ${usedPrefix}ilimitado
└•⌕ *Recursos ilimitados.*
┌• ${usedPrefix}cleartmp
└•⌕ *Borrar tmp.*
┌• ${usedPrefix}deleteplugin
└•⌕ *Borrar plugin.*
┌• ${usedPrefix}borrarplugin
└•⌕ *Borrar plugin.*
┌• ${usedPrefix}deleteplu
└•⌕ *Borrar plugin.*
┌• ${usedPrefix}delprem
└•⌕ *Quitar user premium.*
┌• ${usedPrefix}handerror
└•⌕ *Generar error.*
┌• ${usedPrefix}get
└•⌕ *Get.*
┌• ${usedPrefix}fetch
└•⌕ *Get.*
┌• ${usedPrefix}getplugin
└•⌕ *Guardar Plugin.*
┌• ${usedPrefix}listgroup
└•⌕ *Lista de grupo con bot.*
┌• ${usedPrefix}join
└•⌕ *Unir al bot en un grupo.*
┌• ${usedPrefix}unete
└•⌕ *Unir al bot en un grupo.*
┌• ${usedPrefix}unirte
└•⌕ *Unir al bot en un grupo.*
┌• ${usedPrefix}leave
└•⌕ *Salir del grupo.*
┌• ${usedPrefix}salir
└•⌕ *Salir del grupo.*
┌• ${usedPrefix}reporte
└•⌕ *Reportar errores.*
┌• ${usedPrefix}resetprefix
└•⌕ *Restablecer prefijos.*
┌• ${usedPrefix}resetuser
└•⌕ *Restablecer usuario.*
┌• ${usedPrefix}restart
└•⌕ *Reiniciar el bot.*
┌• ${usedPrefix}reiniciar
└•⌕ *Reiniciar el bot.*
┌• ${usedPrefix}saveimage
└•⌕ *Guardar img.*
┌• ${usedPrefix}saveplugin
└•⌕ *Guardar plugin.*
┌• ${usedPrefix}setbotname
└•⌕ *Nombre del bot.*
┌• ${usedPrefix}setbiobot
└•⌕ *Descripción del bot.*
┌• ${usedPrefix}setppbot
└•⌕ *Foto del bot.*
┌• ${usedPrefix}setprefix
└•⌕ *Cambiar prefijo.*
┌• ${usedPrefix}gitpull
└•⌕ *Botones.*
┌• ${usedPrefix}viewimage
└•⌕ *Ver img.*
┌• ${usedPrefix}reunion
└•⌕ *Creadores.*
 `.trim()
    
const vi = [
'https://qu.ax/ygwT.mp4',
  'https://qu.ax/iFCi.mp4',
     'https://qu.ax/jie.mp4',
        'https://qu.ax/Pbha.mp4',
           'https://qu.ax/bdvm.mp4'
]
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, contextInfo: yt })
//await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: imgAll.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: menusImgs3.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, img5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
    conn.reply(m.chat, 'Ocurrio un error inesperado.', m);
    }
}

handler.command = /^(menu|memu|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
