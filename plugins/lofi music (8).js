import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = 'https://a.uguu.se/GiEzdRUh.mp3'
conn.sendFile(m.chat, vn, 'dj1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['kumon']
handler.tags = ['lofi music']
handler.command = /^(kumon)$/i
handler.fail = null
handler.exp = 100
export default handler