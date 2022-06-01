import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = 'https://a.uguu.se/WvKBbzNV.mp3'
conn.sendFile(m.chat, vn, 'dj1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['bukalapak']
handler.tags = ['lofi music']
handler.command = /^(bukalapak)$/i
handler.fail = null
handler.exp = 100
export default handler