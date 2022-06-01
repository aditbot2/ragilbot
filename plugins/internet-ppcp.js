import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=2c9fdb8c2e0153a007b5c9a7')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'Cewek', gc, json.result.female,[['NEXT', `/${command}`]], m)
conn.sendButton(m.chat, 'Cowok', gc, json.result.male, [['NEXT', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['random pict']
handler.command = /^(ppcp|ppcouple)$/i
handler.private = true
handler.limit = true
export default handler
