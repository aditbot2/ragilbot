const rewards = {
  exp: 9999999999999999,
  money: 99999999999999,
  potion: 100000000000000,
}
const cooldown = 0
let handler = async (m, {usedPrefix}) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) return conn.sendButton(m.chat, 
'*–––––『 CHEAT 』–––––*',
`Anjay ngecit 😱

⏱️ ${((user.lastclaim + cooldown) - new Date()).toTimeString()}`.trim(), './media/cooldown.jpg', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m, {asLocation: true})
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `⮕ ${global.rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
  }
  conn.sendButton(m.chat,
`*––––『 CHEAT 』––––*`,
`anjay ngecittt 😱😱
${text}`.trim(), './media/day.jpg', [
[`CHEAT`, `${usedPrefix}inventory`],
[`CHEAT`, `${usedPrefix}monthly`]
], m, {asLocation: true})
  user.lastclaim = new Date * 1
}
handler.customPrefix = /cit|cheat/i
handler.command = new RegExp
handler.cooldown = cooldown

handler.premium = true

export default handler
