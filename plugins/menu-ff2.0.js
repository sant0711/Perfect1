let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4'
await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: '*Adios a todos, el Bot se despide! 𝙎𝘼𝙉𝙏 𝘽𝙊𝙏 - 𝙈𝘿 👑')
handler.help = ['menuff']
handler.tags = ['freefire' ,'main'] 
handler.command = ['menuff22', 'menufreefire']

export default handler
