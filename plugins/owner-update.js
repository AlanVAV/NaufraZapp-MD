import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '*『❌』NaufraZapp-MD ya esta actualizado en la versión mas reciente.*'
if (messager.includes('Updating')) messager = '*『✅』Se ha actualizado NaufraZapp-MD con éxito!*\n\n*『💻』Actualizaciones en:*\n' + stdout.toString()
conn.reply(m.chat, messager,)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('NaufraBotSession/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `*『⚠️』No se pudo actualizar el bot, debido a que mejoraron algo que dan conflicto en el repositorio, tienes que reinstalar el bot.*\n\n*『💻』Archivos en conflicto:*\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '*『❌』Ocurrio un error inesperado, intentelo de nuevo.*'
if (error.message) {
errorMessage2 += '\n\n*『💻』Mensaje de error* ' + error.message;
}
await conn.reply(m.chat, errorMessage2,)
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['own']
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true

export default handler