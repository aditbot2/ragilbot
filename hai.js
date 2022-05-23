let handler = async (m) => m.reply(`
${['haii 🗿',
 'aloo 🗿',
 'halo beb 🗿',
 'haii tod 🗿'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.customPrefix = /hai|halo/i
handler.command = new RegExp

export default handler
