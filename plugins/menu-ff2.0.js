let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4'
await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: '> > 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑. 
 
 👑 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑
🖤 ➺ 🎫.donarsala
🖤 ➺ 🗼.𝘉𝘦𝘳𝘮𝘶𝘥𝘢
🖤 ➺ 🏝️.𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
🖤 ➺ 🏜️.𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
🖤 ➺ 🏗️.𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
🖤 ➺ 🏞️.𝘈𝘭𝘱𝘦𝘴

👑 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 👑
🖤 ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
🖤 ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 👑 ◂◂

𝘚𝘐𝘎𝘕𝘐𝘍𝘐𝘊𝘈𝘋𝘖𝘚: 𝘏𝘏:𝘔𝘔 (𝘏𝘖𝘙𝘈:𝘔𝘐𝘕𝘜𝘛𝘖𝘚) 
𝘊𝘗 (𝘊𝘖𝘋𝘐𝘎𝘖 𝘋𝘌 𝘗𝘈𝘐𝘚) 𝘗𝘈𝘙𝘈 𝘓𝘈 𝘏𝘖𝘙𝘈 (𝘔𝘟, 𝘊𝘖, 𝘊𝘓 𝘠 𝘈𝘙) 
𝘊𝘙 (𝘊𝘖𝘓𝘖𝘙 𝘋𝘌 𝘙𝘖𝘗𝘈)
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .4𝘷𝘴4 22:30 𝘔𝘟
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .8𝘷𝘴8 22:50 𝘕𝘌𝘎𝘙𝘖

⚔ ➺.4𝘷𝘴4 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.6𝘷𝘴6 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.8𝘷𝘴8 𝘏𝘏:𝘔𝘔 𝘊𝘙 
⚔ ➺.𝘴𝘤𝘳𝘪𝘮 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.𝘪𝘯𝘵𝘦𝘳𝘯𝘢4 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.12𝘷𝘴12 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.16𝘷𝘴16 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.20𝘷𝘴20 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.24𝘷𝘴24 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.𝘊𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰 𝘏𝘏:𝘔𝘔 𝘊𝘙
', mentions: [m.sender] }, { quoted: m })
await conn.groupLeave(id)}
handler.help = ['salir']
handler.tags = ['owner']
handler.command = /^(menuff2.0|out|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true

export default handler
