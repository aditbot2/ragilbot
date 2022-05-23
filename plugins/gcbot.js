let handler = async (m) => m.reply(`
${['Ga join Ga kece 🗿🏳️‍🌈\nhttps://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY',
 'Join kuy, dijamin betah 🗿🏳️‍🌈\nhttps://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY', 
 'Anak dibawah umur jgn join 🗿🏳️‍🌈\nhttps://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY', 
 'Yang join bakal dikasih money 1jt 🗿🏳️‍🌈\nhttps://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY', 
 'join gk qi 🗿🏳️‍🌈\nhttps://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY', 
 'join gc bot 🗿🏳️‍🌈\nhttps://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler
