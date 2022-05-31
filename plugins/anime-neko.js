import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/neko')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Crush kok 2d 🗿', author, json.url, [['neko', `${usedPrefix}neko`]], m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
handler.limit = true


export default handler