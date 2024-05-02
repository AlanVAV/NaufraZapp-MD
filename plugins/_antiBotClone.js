
import { areJidsSameUser } from '@whiskeysockets/baileys'
export async function before(m, { participants, conn }) {
    if (m.isGroup) {
        let chat = global.db.data.chats[m.chat];
        
         if (!chat.antiBotClone) {
            return
        }
        

        let botJid = global.conn.user.jid // JID del bot principal

       if (botJid === conn.user.jid) {
           return
        } else {
           let isBotPresent = participants.some(p => areJidsSameUser(botJid, p.id))
            
          if (isBotPresent) {
                setTimeout(async () => {
                    await m.reply(`*『✦』El bot oficial:* \`NaufraZapp-MD\` *esta aqui, voy a salir para prevenir una suspensión por* \`Spam\``, null, fwc)
                    await this.groupLeave(m.chat)
                }, 5000)// 5 segundos
            }
        }
    }
}
