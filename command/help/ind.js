const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mess = {
                  "wait": "```-「 WAIT A SECCOND 」-```",
                  "success": "```-「 SUCCES ! 」-```",
                  "badmin": "```-「 BOT IS NOT ADMIN 」-```",
                  "wrongFormat": "```-「 FORMAT IS WRONG 」-```",
            "error": {
                  "stick": "```-「 MEDIA STICKER ONLY 」-```",
                  "lv": "```-「 SERVER ERROR 」-```",
                  "api": "```-「 SERVER ERROR 」-```"
               },
            "only": {
                  " owner": "```-「 DEVELOPER BOT ONLY 」-```",
                  "admin": "```-「 ADMIN GROUP ONLY 」-```",
                  "group": "```-「 USE GROUP ONLY 」-```",
                  "prem": "```-「 PREMIUM USER ONLY 」-```",
                  "pribadi": "```-「 PRIVATE CHAT ONLY 」-```"
               }
         }
const moment = require('moment-timezone')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam Ajg'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang Ajg'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore Ajg'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang️ Ajg'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi Ajg'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam Ajg'
}

exports.owner = (botname) =>{
	return`⚠︎Command Khusus Owner ${botname}⚠︎`
	}
exports.admin = (groupName) =>{
	return`⚠︎Command Khusus Admin ${groupName}⚠︎`
	}
exports.adminB = () =>{
	return`⚠︎Bot Bukan Admin⚠︎`
	}
exports.err = () =>{
	return`⚠︎Fitut Error Bangh⚠︎`
	}
exports.group = () =>{
	return`⚠︎Command Khusus Dalam Group⚠︎`
	}
exports.wait = () =>{
	return`➪Sedang Proses Bangh`
	}
exports.ok = () =>{
	return` Okh Done Bangh♲︎︎︎`
	}
exports.welcome = () =>{
	return`╭─ ⫹⫺ Intro Jancoeg🗿
│ ⫹⫺ Nama :
│ ⫹⫺ Umur :
│ ⫹⫺ Kelamin :
│ ⫹⫺ Askot :
╰───────────────`
      }
exports.leave = () =>{
	return`╭─⫹⫺ Berkurang Beban🗿
╰───────────────`
}
exports.script =`╭─⫹⫺ *SC by SnappyXD*
│ ⫹⫺𝙄𝙣𝙛𝙤 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 ♛
│ 𝐺𝑟𝑢𝑝 1:https://chat.whatsapp.com/BEwgAoBV2r92GXyaLQtIfq
│ 𝐺𝑟𝑢𝑝 2:https://chat.whatsapp.com/L9YWxI2woo4DqYOfQvYqBF
│ 
│ ⫹⫺𝑌𝑜𝑢𝑇𝑢𝑏𝑒 :
│ https://youtube.com/c/snapdxkz
│ 
│ ⫹⫺𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 :
│ wa.me/628813100198
│ 
│ ⫹⫺𝐺𝑖𝑡ℎ𝑢𝑏 :
│ https://github.com/SnappyXD
│ _click on link_ 
╰───────────────`
exports.status = (wa_version, mcc, mnc, os_version, device_manufacturer, device_model, runtime,pushname,salam) =>{
return`Hi ${pushname}, selamat ${salam}
╭─⫹⫺ [ _MyDevice_ ]
│ ⫹⫺  *Whatsapp :* ${wa_version}
│ ⫹⫺  *RAM :* 4000MB
│ ⫹⫺  *MCC :* ${mcc}
│ ⫹⫺  *MNC :* ${mnc}
│ ⫹⫺  *Versi OS :* ${os_version}
│ ⫹⫺  *Merk HP :* ${device_manufacturer}
│ ⫹⫺  *Versi HP :* ${device_model}
╰───────────────

*Runtime :* ${waktu(runtime)} `
}
exports.menu = (prefix) =>{
	return` 
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭─⫹⫺ *About Bot and Me*
│ ⫹⫺ ${prefix}menu
│ ⫹⫺ ${prefix}help
│ ⫹⫺ ${prefix}infobot
│ ⫹⫺ ${prefix}status
╰───────────────
╭─⫹⫺ *Download*
│ ⫹⫺ ${prefix}play [query]
│ ⫹⫺ ${prefix}song [judul lagu]
│ ⫹⫺ ${prefix}pinterest [query]
│ ⫹⫺ ${prefix}tiktok [url]
│ ⫹⫺ ${prefix}tiktoknowm [url]
│ ⫹⫺ ${prefix}tiktokwm [url]
│ ⫹⫺ ${prefix}tiktokaudio [url]
│ ⫹⫺ ${prefix}soundcloud [url]
│ ⫹⫺ ${prefix}telesticker [url]
╰───────────────
╭─⫹⫺ *Convert*
│ ⫹⫺ ${prefix}stiker [video/image]
│ ⫹⫺ ${prefix}takestick [reply stiker]
│ ⫹⫺ ${prefix}swm [text|text2]
│ ⫹⫺ ${prefix}semoji 🗿 [Error]
│ ⫹⫺ ${prefix}toimg [reply stiker]
│ ⫹⫺ ${prefix}tourl [reply stiker,image,video,audio,vn,etc]
│ ⫹⫺ ${prefix}tomp3 [reply video]
│ ⫹⫺ ${prefix}tomp4 [reply stiker]
│ ⫹⫺ ${prefix}smeme [text]
│ ⫹⫺ ${prefix}memegen [text|text2]
│ ⫹⫺ ${prefix}fast [video/vn]
│ ⫹⫺ ${prefix}tupai [video/vn]
│ ⫹⫺ ${prefix}vibra [video/vn]
│ ⫹⫺ ${prefix}robot [video/vn]
│ ⫹⫺ ${prefix}slow [video/vn]
│ ⫹⫺ ${prefix}bass [video/vn]
│ ⫹⫺ ${prefix}nightcore [video/vn]
╰───────────────
╭─⫹⫺ *Education*
│ ⫹⫺ ${prefix}nuliskiri [text]
│ ⫹⫺ ${prefix}nuliskanan [text]
│ ⫹⫺ ${prefix}foliokiri [text]
│ ⫹⫺ ${prefix}foliokanan [text]
╰───────────────
╭─⫹⫺ *Game*
│ ⫹⫺ ${prefix}tebakgambar 
╰───────────────
╭─⫹⫺ *Info*
│ ⫹⫺ ${prefix}owner
│ ⫹⫺ ${prefix}scsnappy
│ ⫹⫺ ${prefix}igsnappy
╰───────────────

╭─⫹⫺ *Owner*
│ ⫹⫺ ${prefix}broadcast [text]
│ ⫹⫺ ${prefix}leave
│ ⫹⫺ ${prefix}join
│ ⫹⫺ ${prefix}shutdown
│ ⫹⫺ ${prefix}gift
│ ⫹⫺ ${prefix}piltek
│ ⫹⫺ ${prefix}kickrakyat
│ ⫹⫺ ${prefix}runtime
│ ⫹⫺ >
│ ⫹⫺ $
│ ⫹⫺  => 
╰───────────────

╭─⫹⫺ *Group*
│ ⫹⫺ ${prefix}antilink 1 / 0
│ ⫹⫺ ${prefix}hidetag [text]
│ ⫹⫺ ${prefix}linkgrup
│ ⫹⫺ ${prefix}tagall
│ ⫹⫺ ${prefix}fitnah [teks1|teks2]
│ ⫹⫺ ${prefix}add +62xxxx
│ ⫹⫺ ${prefix}kick @tag
│ ⫹⫺ ${prefix}setdesc [text] 
│ ⫹⫺ ${prefix}setname [text] 
╰───────────────`
	}