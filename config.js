const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6285725753532'] //ur owner number
global.ownername = "WhyuTzu" //ur owner name
global.developer = "WhyuTzu" //nama lu
global.ytname = "Segera" //ur yt chanel name
global.socialm = "https://instagram.com/WhyuTrue_" //ur github or insta name
global.sgc = "Segera"
global.location = "Jateng" //ur location

//bot bomdy 
global.owner = ['6285725753532'] //ur number
global.ownernomer = "6285725753532" //ur number
global.ownertag = '6285725753532' //ur tag number
global.premium = ['6285725753532'] //ur premium number
global.botname = 'Hinakinu' //ur bot name
global.ownername = "Hinakinu"
global.linkz = "Segera" //your theme url which will be displayed on whatsapp
global.dana = "6285725753532"
global.pulsa = "6285725753532"
global.websitex = "segera" //ur website to be displayed
global.websitex1 = "segera"
global.botscript = 'Rahasia' //script link
global.themeemoji = "๐ฆ" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "Hinakinu" //ur sticker watermark author
global.wm = "Hinakinu" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Doneโ',
    admin: '๐๐ข๐ฏ๐บ๐ข ๐๐ช๐ด๐ข ๐ฅ๐ช ๐๐ถ๐ฏ๐ข๐ฌ๐ข๐ฏ ๐๐ญ๐ฆ๐ฉ ๐๐ฅ๐ฎ๐ช๐ฏ ๐๐ฐ๐ฅ!!',
    botAdmin: '๐๐ฐ๐ต ๐๐ถ๐ฌ๐ข๐ฏ ๐๐ฅ๐ฎ๐ช๐ฏ ๐ค๐ฐ๐ฌ',
    premime: '๐๐ข๐ฏ๐บ๐ข ๐๐ช๐ด๐ข ๐ฅ๐ช ๐๐ถ๐ฏ๐ข๐ฌ๐ข๐ฏ ๐๐ด๐ฆ๐ณ ๐๐ณ๐ฆ๐ฎ๐ช๐ถ๐ฎ!',
    owner: '๐๐ข๐ฏ๐บ๐ข ๐๐ช๐ด๐ข ๐ฅ๐ช ๐๐ถ๐ฏ๐ข๐ฌ๐ข๐ฏ ๐ฐ๐ญ๐ฆ๐ฉ ๐๐ธ๐ฏ๐ฆ๐ณ!',
    group: '๐๐ข๐ฏ๐บ๐ข ๐๐ช๐ด๐ข ๐๐ช ๐จ๐ถ๐ฏ๐ข๐ฌ๐ข๐ฏ ๐๐ช ๐๐ณ๐ฐ๐ถ๐ฑ',
    private: '๐๐ข๐ฏ๐บ๐ข ๐๐ช๐ด๐ข ๐ฅ๐ช ๐๐ถ๐ฏ๐ข๐ฌ๐ข๐ฏ ๐๐ช ๐๐ฉ๐ข๐ต ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ!',
    bot: '๐๐ฐ๐ต ๐๐ฏ๐ญ๐บ!',
    wait: '๐๐ข๐ช๐ต ๐๐ฆ๐ฅ๐ข๐ฏ๐จ ๐๐ช ๐๐ณ๐ฐ๐ด๐ฆ๐ด....',    linkm: 'Where is the link?',
    endLimit: '๐๐ช๐ฎ๐ช๐ต ๐๐ฌ๐ข๐ฏ ๐๐ช ๐ณ๐ฆ๐ด๐ฆ๐ต 12 ๐๐ข๐ณ๐ช',
    nsfw: '๐๐ช๐ต๐ถ๐ณ ๐๐ด๐ง๐ธ ๐๐ฆ๐ญ๐ถ๐ฎ ๐๐ช ๐ข๐ฌ๐ต๐ช๐ง๐ฌ๐ข๐ฏ ๐๐ญ๐ฆ๐ฉ ๐๐ฅ๐ฎ๐ช๐ฏ',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
