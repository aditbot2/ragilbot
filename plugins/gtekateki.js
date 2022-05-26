import { tekateki } from '@bochilteam/scraper'

let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
        throw false
    }
    const json = await tekateki()
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekajawab untuk bantuan
Bonus: ${poin} XP

*‼️REPLY SOAL UNTUK MENJAWAB‼️*
`.trim()
    conn.tekateki[id] = [
        await conn.sendButton(m.chat, caption, author, ['hint', `${usedPrefix}tekajawab`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, ['tekateki', `${usedPrefix}tekateki`], conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

export default handler