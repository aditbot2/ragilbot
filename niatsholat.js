const contoh = `*Asmael Hosny*
`
// data here
const anjuran = `From Abu hurarirah radhiallahu anhu, Rasulullah Saw said: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا.
Meaning: "Indeed, Allah has ninety-nine names, aka one hundred less than one. Whoever counts them, will surely enter Paradise; He is Witr and loves the Witr.`

let handler = async (m, { args, usedPrefix, command }) => {
    let json = JSON.parse(JSON.stringify(global.niatsholat))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) throw `Example:\n${usedPrefix + command} 1`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 5) throw `minimum 1 & max 5!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
    }
    m.reply(contoh + data + anjuran)
}
handler.help = ['niat sholat [1-5]']
handler.tags = ['quran']
handler.command = /^(niatsholat)$/i
export default handler

global.niatsholat = [
    {
        "index" : 1,
	"name": "Niat Sholat Subuh",
	"arabic":  "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
	"latin" : "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
	"terjemahan" : "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala"
    },
    {
        "index" : 2,
	"name": "Niat Sholat Dzuhur",
	"arabic":  "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
	"latin" : "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
	"terjemahan" : "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala"
    },
    {
        "index" : 3,
	"name": "Niat Sholat Ashar",
	"arabic":  "اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
	"latin" : "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
	"terjemahan" : "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala"
    },
    {
        "index" : 4,
	"name": "Niat Sholat Maghrib",
	"arabic":  "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
	"latin" : "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
	"terjemahan" : "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala"
    },
    {
        "index" : 5,
	"name": "Niat Sholat Isya",
	"arabic":  "اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
	"latin" : "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
	"terjemahan" : "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala"
    }
]