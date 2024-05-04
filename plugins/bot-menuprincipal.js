let handler = async (m, { conn, command, usedPrefix }) => {
let pp = menusImgs4.getRandom()
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
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
┌• ${usedPrefix}menu
└•⌕ *Menu de lista*


┍━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
│「🌎ִֶָ 𖥔 ࣪˖𝑺𝒆𝒓 𝑩𝒐𝒕 𝑵𝒁ִֶָ 𖥔 ࣪˖🌎」
┕━━━━━━━━━━━━━━━━━━━•𖥔 ࣪˖
┌• ${usedPrefix}nzcode
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}codesub2
└•⌕ *Registra con código de 8 dígitos*
┌• ${usedPrefix}subbots
└•⌕ *ver sub bots*
┌• ${usedPrefix}bcbots
└•⌕ *mensaje para todos los subbots*
┌• ${usedPrefix}stop
└•⌕ *apagar mi sub bot*


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
┌• ${usedPrefix}dlav
└•⌕ *enlace • texto*
┌• ${usedPrefix}downav
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
└•⌕ *Creadores.*`
await conn.sendButton(m.chat, estado, wm, pp, [
['✅ 𝗔𝗨𝗧𝗢𝗩𝗘𝗥𝗜𝗙𝗬 ✅', '.reg NZsub.18'],
['💻 𝗘𝗦𝗧𝗔𝗗𝗢 💻', '/estado'],
['🛒 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗕𝗢𝗧 🛒', '#installbot']], null, [
['Canal', `${channel}`]], null, [
['NaufraZapp', `${creador}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(menucompleto)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
 
