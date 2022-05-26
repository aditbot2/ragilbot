let handler = async (m, { conn }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (!(id in conn.tekateki)) throw false
    let json = conn.tekateki[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^tekajawab$/i

handler.limit = true

export default handler