let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`Tf pulsa sabi kali y 🗿
083133162295 - Axis 🗿️‍🌈

Ingin add bot ke group?
25k / bulan
atau trial 24 jam, minat? chat owner
wa.me/6283133162295`, './media/donate.jpg', 'https://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY', 'Bot Group', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler