/*
# SnappyXD - Owner - SnapBotzz
# Copyright (C) 2021 SnapBotzz Created By SnappyXD
#
# This file is a part of < https://github.com/SnappyXD/SnapBotzz.V.0.01/ >
# PLease read the GNU Affero General Public License in
# <https://www.github.com/SnappyXD/SnapBotzz.V.0.01/blob/v1/LICENSE/>.
*/ 

// WhatsApp api
const
	{
		WAConnection ,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
	
//module exports
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const yts = require( 'yt-search')

//library
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../lib/functions')
const { fetchJson, kyun, fetchText } = require('../lib/fetcher')
const { color, bgcolor } = require('../lib/color')
const { yta, ytv} = require('../lib/y2mate')
const simple = require('../lib/simple')
const { uploadImages } = require('../lib/uploadimage')
const { emoji2 } = require('../lib/emoji2')
const { emoji1 } = require('../lib/emoji1')
const  Exif = require('../lib/exif')
const exif = new Exif()
typemenu = 'templateLocation'

//json
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))

const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))

//settings
const simbol = '�'
const setting = JSON.parse(fs.readFileSync('./settings/config.json'))
let {
	ownername,
	ownernumber,
	ownernumber2,
	ownernumber3,
	ownernumber4,
	ownernumber5,
	botname,
	session_name,
	myweb,
	youtube,
	github,
	background,
	gambar
	} = setting
let thumbnail = fs.readFileSync(setting.thumbnail)
fake = 'SnapBotzz by SnappyXD'
baterai = {
battery: "" || "Not detected",
isCharge: "" || true
}
hit_today = []
banChats = false
/*
# language
# available now [ind]
*/
const  { ind } = require(`./help`)
lang = ind 

//times
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

//start script
			async function starts() {
				const SnappyXD = new WAConnection()
				SnappyXD.version = [2, 2143, 3]  //jika ada update dari WhatsApp web silahkan ubah
				SnappyXD.logger.level = 'warn'
				console.log(color(figlet.textSync('SnapBotzz', {
					font: 'Standard',
					horizontalLayout: 'default',
					vertivalLayout: 'default',
					whitespaceBreak: false
					}), 'green'))
				SnappyXD.on('qr', () => {
					console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN QR MASK 15 SECONDS, AND SUBSCRIBE YOUTUBE SNAPDXKZ'))
					})
			fs.existsSync(`./settings/${session_name}`) && SnappyXD.loadAuthInfo(`./settings/${session_name}`)
			SnappyXD.on('connecting', () => {
				console.log(chalk.black(chalk.bgBlue('|\x1b[1;32m SnapBotzz \x1b[1;37m|')),color('Connecting...', 'green'))
				})
			SnappyXD.on('open', () => {
				console.log(chalk.black(chalk.bgBlue('|\x1b[1;32m SnapBotzz \x1b[1;37m|')), color('Connected', 'green'))
			})
			await SnappyXD.connect({timeoutMs: 30*1000}) 
			fs.writeFileSync(`./settings/${session_name}`, JSON.stringify(SnappyXD.base64EncodedAuthInfo(), null, '\t'))

					
//greetings
				SnappyXD.on('group-participants-update', async(anu) => {
					try {
						const sendButLoc = async (id, text1, desc1, gam1, but = [], options = {}) => {
							const mediaxxaaaa = await SnappyXD.prepareMessage(id, gam1, MessageType.location, {thumbnail: gam1})
							var mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
							const buttonMessages = {
								locationMessage: mhan.message.locationMessage,
								contentText: text1,
								footerText: desc1,
								buttons: but,
								headerType: 6
								}
							SnappyXD.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						const mdata = await SnappyXD.groupMetadata(anu.jid)
						console.log(anu)
						num = anu.participants[0]
						let v = SnappyXD.contacts[num] || { notify: num.replace(/@.+/, "") };
						anu_user = v.vname || v.notify || num.split("@")[0];
						try {
							ppmem = await SnappyXD.getProfilePicture(num);
							} catch (e) {
								ppmem = 'https://telegra.ph/file/f8df36078279304745bae.png'
								}
						try {
							ppgc = await SnappyXD.getProfilePicture(anu.jid);
							} catch (e) {
								ppgc = 'https://telegra.ph/file/d4c05638fa7886a1d8060.jpg'
								}
						let ppmem2 = await getBuffer(ppmem)
						let ppmem3 = await uploadImages(ppmem2)
						let ppgc2 = await getBuffer(ppgc)
						let ppgc3 = await uploadImages(ppgc2)
						let gakloo = [{
										"buttonId": `.owner`,
										"buttonText": {
											"displayText": "Welcome 👋"
											},
										"type": "RESPONSE"
										}]
						if (anu.action == 'add' && !num.includes(SnappyXD.user.jid)) {
							welcome = await getBuffer(`https://api-SnappyXDbot.herokuapp.com/api/greetings/welcome2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=SnappyXDbot`)
							try{
							await sendButLoc(mdata.id, `Welkam @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome(), '©'  + ownername, welcome, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welkam"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Welkam @${num.split('@')[0]} to ${mdata.subject}` + '\n' + lang.welcome(), '©'  + ownername, ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welkam"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
						} else if (anu.action == 'remove' && !num.includes(SnappyXD.user.jid)) {
							goodbye = await getBuffer(`https://api-SnappyXDbot.herokuapp.com/api/greetings/goodbye2?name=${encodeURI(anu_user)}&member=${encodeURI(mdata.participants.length)}&groupName=${encodeURI(mdata.subject)}&ppuser=${ppmem3}&bgurl=${background}&apikey=SnappyXDbot`)
							try{
							await sendButLoc(mdata.id, `Bye Bitch @${num.split('@')[0]}` + '\n' + lang.leave(), '©'  + ownername, goodbye, [{"buttonId": `.owner`,"buttonText": {"displayText": "Al-Fatihah 🤲"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendButLoc(mdata.id, `Bye Bitch @${num.split('@')[0]}` + '\n' + lang.leave(), '©'  + ownername, ppmem2, [{"buttonId": `.owner`,"buttonText": {"displayText": "Al-Fatihah 🤲"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
							
						}
				} catch (e) {
					console.log('Error : %s', color(e, 'red'))
					}
				})
				
				SnappyXD.on('chat-update', async (mek) => {
					try {
						if (!mek.hasNewMessage) return
						 mek = mek.messages.all()[0]
						if (!mek.message) return
						if (mek.key && mek.key.remoteJid == 'status@broadcast') return
						if (mek.key.fromMe) return
						mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
						const content = JSON.stringify(mek.message)
						const from = mek.key.remoteJid
						const type = Object.keys(mek.message)[0]
						const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
                        const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
						const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
						const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
						const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
						var prefix = /^[°•π÷×¶∆£¢€¥®™✓|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓|~+×_*!#$,|`÷?;:%%^&./\\©^]/gi) : '#'
						body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
						var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
						const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
						budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
						const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
						const arg = budy.slice(command.length + 2, budy.length)
						const args = body.trim().split(/ +/).slice(1)
						const q = args.join(' ')
						const runtime = process.uptime()   
						const isCmd = body.startsWith(prefix)
						const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = SnappyXD.user.phone
						const botNumber = SnappyXD.user.jid
						const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
	                    const ownernumber2 = [`6281352402264@s.whatsapp.net`] 
	                    const ownernumber3 = [`16073002812@s.whatsapp.net`] 
	                    const ownernumber4 = [`18038841108@s.whatsapp.net`] 
	                    const ownernumber5 = [`17244016489@s.whatsapp.net`] 
						const isGroup = from.endsWith('@g.us')
						const totalchat = await SnappyXD.chats.all()
						const sender = mek.key.fromMe ? SnappyXD.user.jid : isGroup ? mek.participant : mek.key.remoteJid
						const isOwner = mek.key.fromMe ? SnappyXD.user.jid : ownerNumber.includes(sender)
						const conts = mek.key.fromMe ? SnappyXD.user.jid : SnappyXD.contacts[sender] || { notify: jid.replace(/@.+/, '') }
						const pushname = mek.key.fromMe ? SnappyXD.user.name : conts.notify || conts.vname || conts.name || '-'
						
						//apaya
						const isAntiLink = isGroup ? antilink.includes(from) : false
						
						const groupMetadata = isGroup ? await SnappyXD.groupMetadata(from) : ''
						const groupName = isGroup ? groupMetadata.subject : ''
						const groupId = isGroup ? groupMetadata.jid : ''
						const groupMembers = isGroup ? groupMetadata.participants : ''
						const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
						const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
						const isGroupAdmins = groupAdmins.includes(sender) || false
						
			//fake fakestatus
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "628813100198-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} 🏟️\nBy ${ownername}`, orderTitle: 'SnappyXD', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "628813100198-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "628813100198-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} 🏟️\nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "628813100198-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `© ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '628813100198-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
			let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `628813100198-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
		
			 
			//function
const listmsg = (from, title, desc, list) => { 
            let po = SnappyXD.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "","listType": "SINGLE_SELECT","sections": list}}, {})
            return SnappyXD.relayWAMessage(po, {waitForAck: true})
        }        
           const katalog = (teks) => {
             res = SnappyXD.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_� SnappyXD_*", "thumbnail": thumbnail, "surface": 'CATALOG' }}, {quoted:ftrol})
             SnappyXD.relayWAMessage(res)
        }
            const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 999, status: 200, thumbnail: gambar, surface: 200, message: `➥ Made By ${ownername}\n➥ Hallo Bangh ${pushname}`, orderTitle: 'SnappyXD', sellerJid: '0@s.whatsapp.net'} } }      
            const freply = (teks) => {
            SnappyXD.sendMessage(from, teks, text, {quoted:mek, contextInfo:{ "mentionedJid": [sender], "externalAdReply":{"title": fake,"body": `self-public`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/Gatau-01-22`,"thumbnail": thumbnail}}})
        }          	
			const fakestatus = (teks) => {
            SnappyXD.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                           "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                           "mimetype": "image/jpeg",
                           "caption": fake,
                           "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                           "fileLength": "28777",
                           "height": 1080,
                           "width": 1079,
                           "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                           "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                           "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                           "mediaKeyTimestamp": "1610993486",
                           "jpegThumbnail": ('https://telegra.ph/Gatau-01-22'),
                           "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: { "mentionedJid": [sender], "forwardingScore":999,"isForwarded":false},sendEphemeral: true
            })
        }
        
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? SnappyXD.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : SnappyXD.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
			}
		    const sleep = async (ms) => {
				return new Promise(resolve => setTimeout(resolve, ms));
			}
			const sendMess = (hehe, teks) => {
				SnappyXD.sendMessage(hehe, teks, text)
			}
			
			const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        SnappyXD.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
					}
					const fn = Date.now() / 10000;
					const filename = fn.toString()
					let mime = ""
					var download = function (uri, filename, callback) {
						request.head(uri, function (err, res, body) {
							mime = res.headers['content-type']
							request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
							});
							};
							download(url, filename, async function () {
								console.log('done');
								let media = fs.readFileSync(filename)
								let type = mime.split("/")[0]+"Message"
								if(mime === "image/gif"){
									type = MessageType.video
									mime = Mimetype.gif
									}
									if(mime.split("/")[0] === "audio"){
										mime = Mimetype.mp4Audio
										}
										SnappyXD.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
										fs.unlinkSync(filename)
									});
								} 
			async function sendFileFromUrl(from, url, caption, mek, men) {
				let mime = '';
				let res = await axios.head(url)
				mime = res.headers['content-type']
				let type = mime.split("/")[0]+"Message"
				if(mime === "image/gif"){
					type = MessageType.video
					mime = Mimetype.gif
					}
				if(mime === "application/pdf"){
					type = MessageType.document
					mime = Mimetype.pdf
					}
				if(mime.split("/")[0] === "audio"){
					mime = Mimetype.mp4Audio
					}
					return SnappyXD.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, thumbnail: Buffer.alloc(0), mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
				}
				
				// send message button
				const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						SnappyXD.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await SnappyXD.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						SnappyXD.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await SnappyXD.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						SnappyXD.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await SnappyXD.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					SnappyXD.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				//self public
                if (!mek.key.fromMe && !isOwner && banChats === true) return		
 	 

				// antilink
                if (manti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        await SnappyXD.sendMessage(from, `Hmm maap nih gua kick, dilarang share link di group ini`, text , {quoted: mek})
		        SnappyXD.groupRemove(from, [kic]).catch((e)=>{fakestatus(`Bot Harus Jadi Admin`)})
		        }
			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat Jawaban kamu benar!", `� ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    fakestatus("Jawaban Salah!")
                }
            }
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			//console termux
			console.log(chalk.black(chalk.bgWhite('| New Chat |')), time, chalk.black(chalk.bgGreen(budy || command)), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		
//colong aja bang, ingat jgn asal colong ntr sc lu error
switch (command) {
case 'menu': case 'help': case 'SnappyXD':
 
				sendButLocation(from, lang.menu(prefix, salam, pushname), '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.scsnappy', buttonText:{displayText: 'Subscribe'}, type: 1},{buttonId: '.igsnappy', buttonText:{displayText: 'Instagram'}, type: 1}], {quoted: mek})
				break
case 'infobot': case 'sc':
 
			sendButLocation(from, lang.script, '©' + ownername, thumbnail, [{buttonId: '.scsnappy', buttonText: {displayText: 'Subscribe'}, type: 1},{buttonId: '.igsnappy', buttonText:{displayText: 'Instagram'}, type: 1}], {quoted: mek})
break

case 'owner':{
	 
		const ownerContact = ["628813100198","6281352402264","17867304942","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = SnappyXD.contacts[i] != undefined ? SnappyXD.contacts[i].vname || SnappyXD.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Dika is SnappyXD\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await SnappyXD.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
				}
			break
case 'runtime':
            if (!mek.key.fromMe && !isOwner) return  fakestatus(lang.owner(botname))
sendButLocation(from, lang.status(wa_version, mcc, mnc, os_version, device_manufacturer, device_model, runtime,pushname,salam), '©' + ownername, thumbnail, [{buttonId: '.scsnappy', buttonText: {displayText: 'Subscribe'}, type: 1},{buttonId: '.igsnappy', buttonText:{displayText: 'Instagram'}, type: 1}], {quoted: mek})
break
case 'ping': 
					const timestampi = speed();
					const latensyi = speed() - timestampi
					fakestatus(`Speed: ${latensyi.toFixed(4)} Second`)
					break
case 'shutdown': 
            if (!mek.key.fromMe && !isOwner) return  fakestatus(lamg.owner(botname))
                fakestatus('Bye Bitches')
				return SnappyXD.sendMessage(from, JSON.stringify(eval(process.exit())))
				break
case 'sticker':case 'stiker':case 'stickergif':case 'stikergif':case 'sgif':case 's':
 
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await SnappyXD.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							ran = getRandom('.webp')
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											SnappyXD.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await SnappyXD.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							ran = getRandom('.webp')
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											SnappyXD.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            SnappyXD.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            SnappyXD.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            SnappyXD.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            SnappyXD.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await SnappyXD.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							SnappyXD.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'ig': case 'igdl': 
 
	if (!q) return fakestatus('Linknya?')
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return fakestatus(mess.errorLink)
	let urlnya = q
	zee.igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    SnappyXD.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    SnappyXD.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => fakestatus(`🤲 Server eror`))
            
             break
case 'tiktok':
 
sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', '© ' + ownername, thumbnail, [{buttonId: `.tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})
						
             break
case 'tiktoknowm':   
 
			if (!q) return fakestatus('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return fakestatus('Invalid link')
			fakestatus(lang.wait())
			let nowem = q
			zee.ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					SnappyXD.sendMessage(from,noweem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Download.mp4`,quoted: mek})
					})
				}).catch((err) => fakestatus(`Link tidak valid`))
			
             break 
case 'tiktokwm':
 
			if (!q) return fakestatus('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return fakestatus('Invalid link')
			fakestatus(lang.wait())
			let wem = args.join(' ')
			zee.ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					SnappyXD.sendMessage(from,weem , MessageType.document, {mimetype: 'video/mp4',filename: `Tiktok Wm.mp4`,quoted: mek})
					})
				}).catch((err) => fakestatus(`Link tidak valid`))
			
             break 
case 'tiktokmusic': case 'tiktokaudio':  
 
			if (!q) return fakestatus('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return fakestatus('Invalid Link')
			fakestatus(lang.wait())
			let audi = q
			hx.ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					SnappyXD.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => fakestatus(`Link tidak valid`))
			
             break
case 'pinterest': 
 
			if(!q) return fakestatus('Masukkan query')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
              	  sendButImage(from,  lang.ok() , `© ${ownername}`,we, [{"buttonId": `.pinterest ${q}`,"buttonText": {"displayText": "Next"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
                   }).catch(async(err) => {
                    fakestatus('Terjadi kesalahan')
                })
                
             break
case 'play': case 'song':
 
			if (args.length === 0) return fakestatus(`Kirim perintah *${prefix}play* _Judul lagu_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '© ' + ownername, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					fakestatus('Terjadi kesalahan')
					}
			
             break
case 'ytsearch': case 'yts':
if(!q) return  fakestatus(`Example : ${prefix + command} Melukis senja`)
 fakestatus('Searching...')
try{
ysearch = await yts(q)
}catch(e){
return  fakestatus(mess.error.api)
}
p = 0
teks = `Y TS E A R C H\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
teks += `${p+=1}.\nTitle :` + i.title + '\n'
teks += `Url :` + i.url + '\n'
teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
}
teks +=`Ketik ${prefix}ytmp3 < link > untuk mengambil Music!\nKetik ${prefix}ytmp4 < link > untuk mengambil Video!`
 fakestatus(teks)
break
case 'play':
if (args.length < 1) return  fakestatus(`Kirim perintah *${prefix}play query`)
 fakestatus('Searching...')
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `* Data Berhasil Di Temukan !!*
*Title* : ${title}
*Views* : ${yut.videos[0].views}
*Duration* : ${yut.videos[0].timestamp}
*URL* : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, capti)
ya = await getBuffer(thumb)
py =await SnappyXD.prepareMessage(from, ya, image)
SnappyXD.sendMessage(from, { contentText: `${capti}`, footerText: `${fake}`, 
buttons: [
{buttonId: `${prefix}ytmp3 ${yut.videos[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${prefix}ytmp4 ${yut.videos[0].url}}`, buttonText: {displayText: 'VIDEO'}, type: 1}], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '',
jpegThumbnail: ya, 
contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
})
 break     
 case 'ytmp3':
if (args.length === 0) return  fakestatus(`Kirim perintah *${prefix}ytmp3 [ Link Video YT ]*`)
try {
fakestatus(lang.wait())
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 35000) return sendMediaURL(from, thumb, ` Data Berhasil Didapatkan!\n\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = ` Data Berhasil Didapatkan!\n*Title* : ${title}\n*Ext* : MP3\n*Link* : ${a.data}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt2 = await getBuffer(thumb)
fakestatus(captions)
bvid2 = await getBuffer(dl_link)
await 
SnappyXD.sendMessage(from, bvid2, audio, { quoted:mek
})
})
})
} catch (err) {
 fakestatus(mess.error.api)
}
break

case 'ytmp4':
if (args.length === 0) return  fakestatus(`Kirim perintah *${prefix}ytmp4 [ Link Video YT ]*`)
try {
fakestatus(lang.wait())
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 40000) return  fakestatus(` Data Berhasil Didapatkan!
*Title* : ${title}
*Ext* : MP4
*Link* : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link`)
				const captionsYtmp4 = ` Data Berhasil Didapatkan!
*Title* : ${title}
*Ext* : MP4
*Link* : ${a.data}

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt3 = await getBuffer(thumb)
fakestatus(captionsYtmp4)
bvid3 = await getBuffer(dl_link)
await SnappyXD.sendMessage(from, bvid3, video, { quoted:mek
})
})		
})
} catch (err) {
 fakestatus(mess.error.api)
}
break
case 'mediafire':
               if (args.length < 1) return  fakestatus('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return  fakestatus('Link Tidak Valid !!')
                fakestatus(lang.wait)
 
               res = await mediafiredl(q)
               result = ` -..
 *MEDIAFIRE DOWNLOAD*
 -.. 

*Data Berhasil Didapatkan!*
\`\`\` Nama : ${res[0].nama}\`\`\`
\`\`\` Ukuran : ${res[0].size}\`\`\`
\`\`\` Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
              fakestatus(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6285878313791@g.us" }: {})},message:{"orderMessage":{"orderId":"6285878313791","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
             break  
//group
case 'daftar': case 'verify': case 'verif':
			if (isGroup) return  fakestatus(lang.group)
			try {
					ppregis = await SnappyXD.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender, pushname, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname, time, serialUser, _registered), `© ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break
case 'antilink':
 
			if (!isGroup) return fakestatus(lang.group())
			if (!isGroupAdmins) return fakestatus(lang.admin(groupName))
			if (!isBotGroupAdmins) return fakestatus(lang.adminB())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return fakestatus('Telah di aktifkan sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						fakestatus(`✅ Berhasil mengaktifkan ${command}`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return fakestatus('Udh mati')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						fakestatus(`✅ Berhasil mematikan ${command}`)
					} else {
						fakestatus('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return fakestatus(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return fakestatus(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return fakestatus(`Reply Gambar!`)
										fakestatus(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await SnappyXD.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										SnappyXD.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											fakestatus(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return fakestatus(`Kirim perintah *${prefix + command}* SnappyXDbot`)
									if (q.includes('|')) return fakestatus(`Kirim perintah *${prefix + command}* SnappyXDbot`)
									try {
										if (!isQuotedImage) return fakestatus(`Reply Gambar!`)
										fakestatus(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await SnappyXD.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											fakestatus(lang.err())
											console.log(e)
										}
										}
									break	
case 'leave':
			if (!isGroup) return fakestatus(lang.group())
			if (!isOwner) return fakestatus(lang.owner(botname))
			setTimeout( () => {
			SnappyXD.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			SnappyXD.sendMessage(from, 'Sayonara👋', text)
			}, 0)
			break
case 'hidetag':
 
			if (!isGroup) return fakestatus(lang.group())
			if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.admin)
			var value = q
			var group = await SnappyXD.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			SnappyXD.sendMessage(from, options, text)
			break
case 'linkgrup':case 'linkgroup': case 'linkgc':
 
			if (!isGroup) return fakestatus(lang.group())
			linkgc = await SnappyXD.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			SnappyXD.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'tagall':
 
			if (!isGroup) return fakestatus(lang.group())
			if (!isGroupAdmins) return fakestatus(lang.admin(groupName))
			members_id = []
			taga = (args.length > 1) ? body.slice(8).trim() : ''
			taga += '\n\n'
			for (let mem of groupMembers) {
				taga += `➸ @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(taga, members_id, true)
			break 
case 'setname':
 
			if (!isGroup) return fakestatus(lang.group())
			if (!isGroupAdmins) return fakestatus(lang.admin(groupName))
			if (!isBotGroupAdmins) return fakestatus(lang.adminB())
					await SnappyXD.groupUpdateSubject(from, `${q}`)
					SnappyXD.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
 
			if (!isGroup) return fakestatus(lang.group())
			if (!isGroupAdmins) return fakestatus(lang.admin(groupName))
			if (!isBotGroupAdmins) return fakestatus(lang.adminB())
					await SnappyXD.groupUpdateDescription(from, `${q}`)
					SnappyXD.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'kick':
 
			if (!isGroup) return fakestatus(lang.group())
			if (!isGroupAdmins) return fakestatus(lang.admin(groupName))
			if (!isBotGroupAdmins) return fakestatus(lang.adminB())
			if(!q)return fakestatus(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await SnappyXD.groupRemove(from, [kickya])
			fakestatus(`Succses kick target!`)
break
case 'add':
          if (!isGroupAdmins) return fakestatus(mess.only.admin)
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              entah = arg.split("|")[0]
              entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
              entah = `${entah}@s.whatsapp.net`
              SnappyXD.groupAdd(from, [entah])
              } else {
              orang = mek.message.extendedTextMessage.contextInfo.quotedMessage.sender
              await SnappyXD.groupAdd(from, [orang])
}
              break
case 'pm': case 'promote':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null)
            return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            fakestatus(`Selamat @${mentioned[0].split('@')[0]} Telah Jadi Beban`, mentioned, true)
            SnappyXD.groupMakeAdmin(from, mentioned)
            break
					

            case 'dm': case 'demote':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null)
            return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            fakestatus(`Mampus @${mentioned[0].split('@')[0]} Ga Jadi Admin :v`, mentioned, true)
            SnappyXD.groupDemoteAdmin(from, mentioned)
            break
case 'fitnah':
                if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				SnappyXD.sendMessage(from, cs[2], MessageType.text, target)
			 break
case "stats":
      case "stats":
      case "botstat":{
      	var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
        let timestamp = speed();
        let latensi = speed() - timestamp
        const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = SnappyXD.user.phone
        let runtime = process.uptime()
        stats = `[_Bot Stats_]
*Speed :* ${latensi.toFixed(4)} Second
*Runtime :* ${runtime}

[_Phone Stats_]
*Version Wa :* ${wa_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Hostname :* ${require('os').hostname}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}`
        SnappyXD.sendMessage(stats,  { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
      }
      break
case 'bc':
case 'broadcast':
            if (!mek.key.fromMe && !isOwner) return  fakestatus(mess.only.owner)

            if (args.length < 1) return  fakestatus('Textnya Mane?')

            anu = await SnappyXD.chats.all()

            for (let _ of anu) {

            const buttons = [{buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}]

            const buttonMessage = {

            headerType: "IMAGE",

            contentText: `*[ PESAN SIARAN BOT ]*\n\n${q}`,

            footerText: `Broadcast SnapBotzz @^0.0.1`,

            buttons: buttons,

            headerType: 1

            }

            SnappyXD.sendMessage(`${_.jid}`,

            buttonMessage,

            MessageType.buttonsMessage)
            }

            fakestatus('*Succes Broadcast*')

            break   
            case 'image':
          case 'gimage':
          case 'googleimage':
              if (args.length < 1) return fakestatus('Apa Yang Mau Dicari?')
              fakestatus(mess.wait)
              teks = args.join(' ')
              res = await _gis(teks, google)
              function google(error, result){
              if (error){ return fakestatus('_Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
              break
case 'nightcore':{
	                 if (!isQuotedAudio) return fakestatus('fakestatus audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return fakestatus('Error!')
						hah = fs.readFileSync(ran)
						SnappyXD.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break      
case 'bass': {
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return fakestatus('Error!')
										hah = fs.readFileSync(ran)
										SnappyXD.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return fakestatus('Error!')
											uhh = fs.readFileSync(ran)
											SnappyXD.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												fakestatus('Error!')
												}  
											}
												
									break
case 'robot':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return fakestatus('Error!')
										hah = fs.readFileSync(ran)
										SnappyXD.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return fakestatus('Error!')
										hah = fs.readFileSync(ran)
										SnappyXD.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return fakestatus('Error!')
											hah = fs.readFileSync(ran)
											SnappyXD.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												fakestatus(mess.error)
												}  	
												}
												break
case 'fast':{
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await SnappyXD.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return fakestatus('Error!')
											hah = fs.readFileSync(ran)
											SnappyXD.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												fakestatus('Error!')
												}  
										}
									break
									case 'nulis':
									fakestatus(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'toimg':{
		if (!isQuotedSticker) return fakestatus('fakestatus stc nya!')
					fakestatus(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await SnappyXD.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return fakestatus('Eror')
					buffer = fs.readFileSync(ran)
					SnappyXD.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return fakestatus(`Kirim perintah *${prefix}nuliskiri* teks`)
									fakestatus(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => fakestatus(mess.error))
									.on('exit', () => {
										SnappyXD.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return fakestatus(`Kirim perintah *${prefix}nuliskanan* teks`)
									fakestatus(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => fakestatus(mess.error))
									.on('exit', () => {
										SnappyXD.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return fakestatus(`Kirim perintah *${prefix}foliokiri* teks`)
									fakestatus(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => fakestatus(mess.error))
									.on('exit', () => {
										SnappyXD.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return fakestatus(`Kirim perintah *${prefix}foliokanan* teks`)
									fakestatus(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => fakestatus(mess.error))
									.on('exit', () => {
										SnappyXD.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
//------------------< Public/Self >-------------------

        case 'public':
          	if (!mek.key.fromMe && !isOwner && banChats === true) return		
 	         if (banChats === true) return
          	banChats = false
              freply(`*[ PUBLIC - MODE ]*`)
          	break
	case 'self':
          	if (!mek.key.fromMe && !isOwner && banChats === true) return		
         	 if (banChats === true) return	
          	uptime = process.uptime()
          	banChats = true
              freply(`*[ SELF - MODE ]*`)
          	break

//<!------ Kon-Tol ------!>
              case 'tourl':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              fakestatus(lang.wait())
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              owgi = await SnappyXD.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              fakestatus(res)
              } else {
              fakestatus('kirim/reply gambar/video')
}
break
case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await SnappyXD.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            fakestatus('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
            if (!isQuotedVideo) return fakestatus('reply videonya')
            ffakestatus(lang.wait())
            ecmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            mdia = await SnappyXD.downloadAndSaveMediaMessage(ecmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${mdia} ${ran}`, (err) => {
            fs.unlinkSync(mdia)
            if (err) return fakestatus(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            SnappyXD.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
 case 'gift':
listMsg = {
 buttonText: `Menu Ekstrim`,
 footerText: '',
 description: `JANGAN DIBUKA BANGH`,
 sections: [
                     {
                      "title": `Bagaimana hadiahnya?`,
 rows: [{
"title": `${emoji1(prefix)}`,
"description": 'Virus Anonymous',
"rowId": "/menu"
}]
                     }],
 listType: 1,
 ListMessageListType: 2
}
if (!args[0]) {
SnappyXD.sendMessage(from, listMsg, MessageType.listMessage, {quoted: troli, contextInfo: { mentionedJid: [sender]}})
} else {
  SnappyXD.sendMessage(`${args[0]}@s.whatsapp.net`, listMsg, MessageType.listMessage, {quoted: troli, contextInfo: { mentionedJid: [sender]}})
}
            break
case 'piltek':
gifnya = await getBuffer('https://telegra.ph/Thumbnail-01-20')
anu =`${emoji2(prefix)}`
await SnappyXD.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/mp4', quoted: troli, caption: anu})
break
case 'scsnappy':
           fakestatus(`Hallo Bangh ${pushname}\n_Jangan lupa subrek Chenel SnapBotzz_\nhttps://youtube.com/channel/snapdxkz\n_Thank Ya Yng Udah Subrek_`)
           break
     case 'igsnappy':
            fakestatus(`Hallo Bangh ${pushname}\n_Jangan lupa Follow ig Snappy_\nhttps://instagram.com/bukan.snappy\n_Thank Ya Yng Udh Follow_`)
            break
case 'readmore':
      case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    fakestatus( text1 + readmore + text2)
                    break
		default:
if (budy.startsWith('>')){
try {
	if (!isOwner) return fakestatus(lang.owner(botname))
return SnappyXD.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
fakestatus(e)
}
}  
if (budy.startsWith('$')){
if (!isOwner) return fakestatus(lang.owner(botname))
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return fakestatus(`SnappyXD:~ ${err}`)
if (stdout) {
fakestatus(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!isOwner) return fakestatus(lang.owner(botname))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return fakestatus(bang)
}
try {
fakestatus(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
fakestatus(String(e))
}
}                                               	
              }   
 //gua enc, biar nanti bisa di jual klo dah bnyk fimtur
function _0x5b43(_0x13cb2b,_0xe199d2){const _0x305ccd=_0x305c();return _0x5b43=function(_0x5b4386,_0x399037){_0x5b4386=_0x5b4386-0x98;let _0x129017=_0x305ccd[_0x5b4386];return _0x129017;},_0x5b43(_0x13cb2b,_0xe199d2);}const _0x301b28=_0x5b43;(function(_0x4b69f3,_0x173912){const _0x4bcf0a=_0x5b43,_0x5359a5=_0x4b69f3();while(!![]){try{const _0x34b6db=parseInt(_0x4bcf0a(0xbd))/0x1+parseInt(_0x4bcf0a(0xf7))/0x2*(-parseInt(_0x4bcf0a(0x110))/0x3)+parseInt(_0x4bcf0a(0x13f))/0x4*(parseInt(_0x4bcf0a(0x9d))/0x5)+-parseInt(_0x4bcf0a(0xf0))/0x6*(-parseInt(_0x4bcf0a(0xaf))/0x7)+parseInt(_0x4bcf0a(0xb6))/0x8*(parseInt(_0x4bcf0a(0x11b))/0x9)+-parseInt(_0x4bcf0a(0x138))/0xa+-parseInt(_0x4bcf0a(0xca))/0xb;if(_0x34b6db===_0x173912)break;else _0x5359a5['push'](_0x5359a5['shift']());}catch(_0x1b9376){_0x5359a5['push'](_0x5359a5['shift']());}}}(_0x305c,0xdb4aa));switch(command){case _0x301b28(0x13b):case'fb':case _0x301b28(0xf4):case _0x301b28(0xf1):{if(!isGroup)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),'Klik\x20Button\x20Untuk\x20Verify',[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!q)return fakestatus(_0x301b28(0x9f)+(prefix+command)+_0x301b28(0x142));if(!q['includes'](_0x301b28(0xd4)))return fakestatus(_0x301b28(0x13c));await fakestatus(lang[_0x301b28(0x14a)]());const API_GUEST=_0x301b28(0xa2),API_TIMELINE=_0x301b28(0x113),AUTH=_0x301b28(0x100),UserAgent=()=>{const _0x41d036=_0x301b28,_0x47122a=[_0x41d036(0xe7),_0x41d036(0xe1),_0x41d036(0xb9),_0x41d036(0x125),_0x41d036(0xb4),_0x41d036(0x13a),_0x41d036(0x121),_0x41d036(0xda),_0x41d036(0xd7),_0x41d036(0xab),_0x41d036(0xe4),'Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/77.0.3865.120\x20Safari/537.36',_0x41d036(0xc5),_0x41d036(0x12b),_0x41d036(0x11d),_0x41d036(0x106),_0x41d036(0xc9),_0x41d036(0x10e),_0x41d036(0xb5),_0x41d036(0x109),_0x41d036(0x149),_0x41d036(0xe8),_0x41d036(0x13e),_0x41d036(0xe7),_0x41d036(0xe1),'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_11_6)\x20AppleWebKit/601.7.7\x20(KHTML,\x20like\x20Gecko)\x20Version/9.1.2\x20Safari/601.7.7',_0x41d036(0xde)],_0xf6f553=_0x47122a[~~(Math['random']()*_0x47122a[_0x41d036(0xd1)])];return _0xf6f553;},getID=_0x182ecc=>{const _0x5e2549=_0x301b28;let _0x246821=/twitter\.com\/[^/]+\/status\/(\d+)/,_0x574bf7=_0x246821[_0x5e2549(0x115)](_0x182ecc);return _0x574bf7&&_0x574bf7[0x1];},getInfo=async function(_0x330500){const _0x5610fa=_0x301b28,_0x11fd95=getID(_0x330500);if(_0x11fd95){let _0x4917cf;try{const _0x379954=await getToken();_0x4917cf=_0x379954[_0x5610fa(0xd8)];}catch(_0x41bb21){throw new Error(_0x41bb21);}const _0x167d8e=await axios[_0x5610fa(0xe6)](Util[_0x5610fa(0xdc)](API_TIMELINE,_0x11fd95),{'headers':{'x-guest-token':_0x4917cf,'authorization':AUTH}});if(!_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)][_0x5610fa(0xa6)][_0x11fd95][_0x5610fa(0x98)])throw new Error('No\x20media');const _0x2de451=_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)]['tweets'][_0x11fd95][_0x5610fa(0x98)][_0x5610fa(0xbc)];if(_0x2de451[0x0]['type']===_0x5610fa(0xaa))return{'type':_0x2de451[0x0][_0x5610fa(0x114)],'full_text':_0x167d8e[_0x5610fa(0xa8)]['globalObjects']['tweets'][_0x11fd95][_0x5610fa(0xbb)],'variants':_0x2de451[0x0][_0x5610fa(0x145)][_0x5610fa(0xbe)]};if(_0x2de451[0x0][_0x5610fa(0x114)]===_0x5610fa(0x135))return{'type':_0x2de451[0x0][_0x5610fa(0x114)],'full_text':_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)][_0x5610fa(0xa6)][_0x11fd95][_0x5610fa(0xbb)],'variants':_0x2de451[_0x5610fa(0xe3)](_0x5d16ba=>_0x5d16ba[_0x5610fa(0xb1)])};if(_0x2de451[0x0][_0x5610fa(0x114)]==='animated_gif')return{'type':_0x2de451[0x0][_0x5610fa(0x114)],'full_text':_0x167d8e[_0x5610fa(0xa8)][_0x5610fa(0xa5)][_0x5610fa(0xa6)][_0x11fd95][_0x5610fa(0xbb)],'variants':_0x2de451[0x0][_0x5610fa(0x145)]['variants']};}else throw new Error(_0x5610fa(0xc7));};async function getToken(){const _0xed890a=_0x301b28;try{const _0xa35a77=await axios[_0xed890a(0xfc)](API_GUEST,null,{'headers':{'authorization':AUTH}});if(_0xa35a77[_0xed890a(0xfa)]===0xc8&&_0xa35a77[_0xed890a(0xa8)])return _0xa35a77[_0xed890a(0xa8)];}catch(_0x48bcd6){throw new Error(_0x48bcd6);}}const fbdl=async _0x51e767=>{async function _0x2fbba1(){const _0x476985=_0x5b43;let _0x5dc264=UserAgent();const _0x2b4732=await axios['get']('https://downvideo.net',{'headers':{'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','accept-language':_0x476985(0x12c),'sec-fetch-user':'?1','User-Agent':_0x5dc264}}),_0x3659c7=cheerio[_0x476985(0xcf)](_0x2b4732['data']);let _0x88d8d0;return _0x3659c7(_0x476985(0xbf))[_0x476985(0x120)](_0x476985(0xc2))[_0x476985(0xcd)]((_0x93f069,_0x7ed67c)=>{const _0x44f3e4=_0x476985;let _0x1da41a=_0x3659c7(_0x7ed67c)[_0x44f3e4(0x139)](_0x44f3e4(0xf8));_0x1da41a&&(_0x88d8d0=_0x1da41a);}),{'ua':_0x5dc264,'token':_0x88d8d0};}async function _0x16bdda(_0x2aaf95,_0x859e70){const _0x599d35=_0x5b43,_0x2916dd=await axios({'url':_0x599d35(0xd2),'method':_0x599d35(0x9b),'data':new URLSearchParams(Object['entries'](_0x2aaf95)),'headers':{'accept':_0x599d35(0x9e),'accept-language':_0x599d35(0x12c),'sec-fetch-user':'?1','content-type':_0x599d35(0x12f),'User-Agent':_0x859e70}}),_0x5ad314=cheerio['load'](_0x2916dd[_0x599d35(0xa8)]);let _0x2656ec=[];return _0x5ad314(_0x599d35(0x123))['find']('a')['each']((_0xd071d3,_0x97c2ac)=>{const _0xa1566d=_0x599d35;let _0x4a96c4=_0x5ad314(_0x97c2ac)[_0xa1566d(0x139)](_0xa1566d(0x126)),_0xce19ee=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0xce19ee[_0xa1566d(0xb8)](_0x4a96c4)&&_0x2656ec[_0xa1566d(0xfe)](_0x4a96c4);}),_0x2656ec;}const _0x534ea4=await _0x2fbba1();let _0x3e4475={'URL':_0x51e767,'token':_0x534ea4['token']};const _0x544b08=await _0x16bdda(_0x3e4475,_0x534ea4['ua']);return _0x544b08;};try{zee[_0x301b28(0x101)](''+q)[_0x301b28(0xf5)](async _0x2128ec=>{const _0x48828b=_0x301b28;let _0xea3dc6='*----「\x20FACEBOOK\x20DOWNLOADER\x20」----*\x0a\x0a';_0xea3dc6+=_0x48828b(0xb0)+_0x2128ec[_0x48828b(0xed)]+'\x0a',_0xea3dc6+='*•\x20Type\x20:*\x20'+_0x2128ec[_0x48828b(0x128)][0x0]['extension']+'\x0a',_0xea3dc6+=_0x48828b(0xc6)+_0x2128ec[_0x48828b(0x128)][0x0]['quality']+'\x0a',_0xea3dc6+=_0x48828b(0xdd)+_0x2128ec[_0x48828b(0x128)][0x1][_0x48828b(0xea)]+'\x0a',_0xea3dc6+=_0x48828b(0x10f)+_0x2128ec[_0x48828b(0x107)];let _0x22edcd=await getBuffer(_0x2128ec[_0x48828b(0x128)][0x1][_0x48828b(0x107)]);SnappyXD[_0x48828b(0xdf)](from,_0x22edcd,video,{'mimetype':_0x48828b(0xa1),'quoted':mek,'caption':_0xea3dc6});});}catch{fbdl(''+q)[_0x301b28(0xf5)](_0x272992=>{sendFileFromUrl(from,_0x272992[0x0],'Done',mek);});}}break;case _0x301b28(0xae):if(!isGroup)return sendButMessage(from,lang['noregis'](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!q)return fakestatus(_0x301b28(0x9f)+(prefix+command)+_0x301b28(0x131));if(!q[_0x301b28(0x119)](_0x301b28(0x134)))return fakestatus(_0x301b28(0x112));await fakestatus(lang[_0x301b28(0x14a)]()),zee[_0x301b28(0x117)](''+q)[_0x301b28(0xf5)](async _0x9bd10d=>{const _0x206a1b=_0x301b28;let _0x5813da=_0x206a1b(0xeb);_0x5813da+=_0x206a1b(0xb0)+_0x9bd10d[_0x206a1b(0xed)]+'\x0a',_0x5813da+=_0x206a1b(0x136)+_0x9bd10d[_0x206a1b(0x118)]+'\x0a',_0x5813da+=_0x206a1b(0xc6)+_0x9bd10d[_0x206a1b(0x128)][0x1][_0x206a1b(0x14b)]+'\x0a',_0x5813da+='*•\x20Ext\x20:*\x20'+_0x9bd10d['medias'][0x0][_0x206a1b(0xdb)]+'\x0a',_0x5813da+=_0x206a1b(0xd5)+_0x9bd10d['medias'][0x0][_0x206a1b(0xea)]+'\x0a',_0x5813da+='*•\x20Url\x20\x20:*\x20'+_0x9bd10d[_0x206a1b(0x107)]+'\x0a\x0a',_0x5813da+=_0x206a1b(0xf2),sendFileFromUrl(from,_0x9bd10d[_0x206a1b(0x11c)],_0x5813da,mek),SnappyXD[_0x206a1b(0xdf)](from,await getBuffer(_0x9bd10d[_0x206a1b(0x128)][0x0]['url']),audio,{'quoted':mek,'mimetype':_0x206a1b(0xd0)});});break;case'telesticker':case _0x301b28(0x103):{if(!isGroup)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!isGroup)return fakestatus(lang[_0x301b28(0xce)]());if(!q)return fakestatus(_0x301b28(0x144)+(prefix+command)+'\x20*https://t.me/addstickers/geestickerpack*');if(!q['includes'](_0x301b28(0x143)))return fakestatus(_0x301b28(0xee));var telestc=await zee[_0x301b28(0x11e)](''+q);await fakestatus(lang[_0x301b28(0x14a)]());for(let i=0x0;i<(telestc[_0x301b28(0xd1)]<0xa?telestc[_0x301b28(0xd1)]:0xa);i++){SnappyXD[_0x301b28(0xdf)](from,await getBuffer(telestc[i][_0x301b28(0x107)]),sticker,{'mimetype':_0x301b28(0xa4),'quoted':mek});}}break;case _0x301b28(0x132):if(!isGroup)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),'Klik\x20Button\x20Untuk\x20Verify',[{'buttonId':'.daftar','buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(!isGroup)return fakestatus(lang[_0x301b28(0xce)]());if(tebakgambar[_0x301b28(0xe9)](sender[_0x301b28(0x122)]('@')[0x0]))return fakestatus(_0x301b28(0xa9));hx[_0x301b28(0x132)]()['then'](async _0x3ebd44=>{const _0x139e6f=_0x301b28;tebakya=await getBuffer(_0x3ebd44[0x0]['image']),jawaban=''+_0x3ebd44[0x0][_0x139e6f(0xa0)][_0x139e6f(0x12a)]('Jawaban\x20',''),tebakgambar[sender[_0x139e6f(0x122)]('@')[0x0]]=jawaban[_0x139e6f(0x10a)](),fs[_0x139e6f(0x11f)](_0x139e6f(0x116),JSON[_0x139e6f(0xb7)](tebakgambar)),console[_0x139e6f(0x10b)](jawaban),SnappyXD[_0x139e6f(0xdf)](from,tebakya,image,{'quoted':mek,'caption':_0x139e6f(0xf6)}),await sleep(0x1d4c0),tebakgambar['hasOwnProperty'](sender[_0x139e6f(0x122)]('@')[0x0])&&(SnappyXD[_0x139e6f(0xdf)](from,_0x139e6f(0x12e)+'\x0a\x0a'+_0x139e6f(0xfd)+'\x0a'+'_'+jawaban+'_',text,{'quoted':mek}),delete tebakgambar[sender[_0x139e6f(0x122)]('@')[0x0]],fs['writeFileSync'](_0x139e6f(0x116),JSON['stringify'](tebakgambar)));});break;case _0x301b28(0x11a):case _0x301b28(0xc3):if(!isGroup)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':'Daftar'},'type':0x1}],{'quoted':fgif});if(!isGroup)return fakestatus(lang[_0x301b28(0xce)]());if(!q)return fakestatus(_0x301b28(0xd6));qes=args[_0x301b28(0xb2)]('\x20'),fakestatus(lang[_0x301b28(0x14a)]()),emoji[_0x301b28(0xe6)](''+qes)['then'](async _0xced70e=>{const _0x23f196=_0x301b28;teks=''+_0xced70e[_0x23f196(0x104)][0x4][_0x23f196(0x107)],console[_0x23f196(0x10b)](teks),sendStickerFromUrl(from,''+teks);});break;case _0x301b28(0xb3):{if(!isGroup)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':'.daftar','buttonText':{'displayText':_0x301b28(0xba)},'type':0x1}],{'quoted':fgif});if(args[_0x301b28(0xd1)]===0x0)return fakestatus(_0x301b28(0xd9)+prefix+_0x301b28(0x146));if(!isUrl(args[0x0])&&!args[0x0][_0x301b28(0x119)]('youtu'))return fakestatus(_0x301b28(0x148));var mulaikah=args[_0x301b28(0xb2)]('\x20');await fakestatus(lang['wait']());function ytMp3(_0x272440){return new Promise((_0x18300f,_0x426841)=>{const _0x19a4a7=_0x5b43;ytdl[_0x19a4a7(0xe0)](_0x272440)[_0x19a4a7(0xf5)](async _0x13e7cb=>{const _0x5bc793=_0x19a4a7;let _0x2c3080=[];for(let _0x52d0a7=0x0;_0x52d0a7<_0x13e7cb[_0x5bc793(0x9a)][_0x5bc793(0xd1)];_0x52d0a7++){let _0xae4355=_0x13e7cb[_0x5bc793(0x9a)][_0x52d0a7];if(_0xae4355[_0x5bc793(0xcb)]==_0x5bc793(0xef)){let {contentLength:_0x4dc463}=_0xae4355,_0x180cf6=await bytesToSize(_0x4dc463);_0x2c3080[_0x52d0a7]={'audio':_0xae4355[_0x5bc793(0x107)],'size':_0x180cf6};};};let _0x202116=_0x2c3080['filter'](_0x266beb=>_0x266beb['audio']!=undefined&&_0x266beb[_0x5bc793(0xe5)]!=undefined),_0x53333b=await axios[_0x5bc793(0xe6)](_0x5bc793(0xe2)+_0x202116[0x0][_0x5bc793(0x133)]),_0x541338=_0x53333b[_0x5bc793(0xa8)],_0x2a5712=_0x13e7cb['videoDetails']['title'],_0x5a82b7=_0x13e7cb[_0x5bc793(0xd3)][_0x5bc793(0x147)],_0x36cf9c=_0x13e7cb['videoDetails'][_0x5bc793(0xf3)],_0xc2922e=_0x13e7cb[_0x5bc793(0xd3)][_0x5bc793(0xad)],_0x3bc0c2=_0x13e7cb['videoDetails'][_0x5bc793(0x10c)],_0x479ef1=_0x13e7cb[_0x5bc793(0xd3)][_0x5bc793(0x127)],_0x380f66=_0x13e7cb['videoDetails']['uploadDate'],_0x4a71be=_0x13e7cb[_0x5bc793(0xec)][_0x5bc793(0xcc)][_0x5bc793(0x105)][_0x5bc793(0x11c)][_0x5bc793(0xfb)][0x0]['url'];_0x18300f({'title':_0x2a5712,'result':_0x541338,'size':_0x202116[0x0][_0x5bc793(0xe5)],'thumb':_0x4a71be,'views':_0x36cf9c,'likes':_0xc2922e,'dislike':_0x3bc0c2,'channel':_0x479ef1,'uploadDate':_0x380f66,'desc':_0x5a82b7});})[_0x19a4a7(0x10d)](_0x426841);});}ytMp3(''+mulaikah)['then'](async _0x742ee4=>{const _0x3eadc1=_0x301b28;let _0x22bcc7=_0x3eadc1(0xf9)+_0x742ee4[_0x3eadc1(0xed)]+_0x3eadc1(0x12d)+_0x742ee4['quality']+_0x3eadc1(0xa3)+_0x742ee4[_0x3eadc1(0xe5)]+_0x3eadc1(0x108)+_0x742ee4[_0x3eadc1(0x13d)]+_0x3eadc1(0xff)+_0x742ee4[_0x3eadc1(0xad)]+_0x3eadc1(0x140)+_0x742ee4[_0x3eadc1(0xa7)]+_0x3eadc1(0xac)+_0x742ee4[_0x3eadc1(0xc4)]+_0x3eadc1(0xc1)+_0x742ee4[_0x3eadc1(0x111)]+'\x0a*•\x20Url\x20:*\x20'+q;sendFileFromUrl(from,_0x742ee4[_0x3eadc1(0xc0)],_0x22bcc7,mek),sendFileFromUrl(from,_0x742ee4[_0x3eadc1(0x124)],'',mek);});}break;case _0x301b28(0x130):{if(!isGroup)return sendButMessage(from,lang[_0x301b28(0x99)](pushname),_0x301b28(0x141),[{'buttonId':_0x301b28(0x137),'buttonText':{'displayText':'Daftar'},'type':0x1}],{'quoted':fgif});if(args['length']===0x0)return fakestatus('Kirim\x20perintah\x20*'+prefix+'ytmp3*\x20_Url\x20YouTube_');if(!isUrl(args[0x0])&&!args[0x0][_0x301b28(0x119)](_0x301b28(0x9c)))return fakestatus('Link\x20tidak\x20valid!');var mulaikah=args[_0x301b28(0xb2)]('\x20');function ytMp4(_0x361138){return new Promise(async(_0x182e43,_0x2a9d1b)=>{const _0x2e537c=_0x5b43;ytdl['getInfo'](_0x361138)[_0x2e537c(0xf5)](async _0x52b862=>{const _0x2dc10f=_0x2e537c;let _0x4d681b=[];for(let _0x3cf02d=0x0;_0x3cf02d<_0x52b862[_0x2dc10f(0x9a)][_0x2dc10f(0xd1)];_0x3cf02d++){let _0x51515e=_0x52b862[_0x2dc10f(0x9a)][_0x3cf02d];if(_0x51515e[_0x2dc10f(0xc8)]=='mp4'&&_0x51515e['hasVideo']==!![]&&_0x51515e['hasAudio']==!![]){let {qualityLabel:_0xee6e82,contentLength:_0x26f862}=_0x51515e,_0x5d2f72=await bytesToSize(_0x26f862);_0x4d681b[_0x3cf02d]={'video':_0x51515e[_0x2dc10f(0x107)],'quality':_0xee6e82,'size':_0x5d2f72};};};let _0x54a725=_0x4d681b[_0x2dc10f(0x102)](_0x4f3ec5=>_0x4f3ec5['video']!=undefined&&_0x4f3ec5[_0x2dc10f(0xe5)]!=undefined&&_0x4f3ec5[_0x2dc10f(0x14b)]!=undefined),_0xd5bf80=await axios[_0x2dc10f(0xe6)]('https://tinyurl.com/api-create.php?url='+_0x54a725[0x0]['video']),_0x302b1b=_0xd5bf80['data'],_0x585643=_0x52b862['videoDetails']['title'],_0x3142b6=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0x147)],_0x43e609=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0xf3)],_0x4de9c0=_0x52b862['videoDetails'][_0x2dc10f(0xad)],_0x5efd62=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0x10c)],_0x1125e0=_0x52b862[_0x2dc10f(0xd3)][_0x2dc10f(0x127)],_0x7d0c49=_0x52b862['videoDetails'][_0x2dc10f(0x111)],_0x5476eb=_0x52b862[_0x2dc10f(0xec)][_0x2dc10f(0xcc)][_0x2dc10f(0x105)][_0x2dc10f(0x11c)]['thumbnails'][0x0][_0x2dc10f(0x107)];_0x182e43({'title':_0x585643,'result':_0x302b1b,'quality':_0x54a725[0x0][_0x2dc10f(0x14b)],'size':_0x54a725[0x0][_0x2dc10f(0xe5)],'thumb':_0x5476eb,'views':_0x43e609,'likes':_0x4de9c0,'dislike':_0x5efd62,'channel':_0x1125e0,'uploadDate':_0x7d0c49,'desc':_0x3142b6});})[_0x2e537c(0x10d)](_0x2a9d1b);});};ytMp4(''+mulaikah)[_0x301b28(0xf5)](async _0x3d28bf=>{const _0x5daf7d=_0x301b28;let _0x21a5f2='*----「\x20YOUTUBE\x20VIDEO\x20」----*\x0a\x0a*•\x20Title\x20:*\x20'+_0x3d28bf[_0x5daf7d(0xed)]+_0x5daf7d(0x12d)+_0x3d28bf[_0x5daf7d(0x14b)]+_0x5daf7d(0xa3)+_0x3d28bf[_0x5daf7d(0xe5)]+_0x5daf7d(0x108)+_0x3d28bf[_0x5daf7d(0x13d)]+_0x5daf7d(0xff)+_0x3d28bf[_0x5daf7d(0xad)]+'\x0a*•\x20Dislikes\x20:*\x20'+_0x3d28bf[_0x5daf7d(0xa7)]+_0x5daf7d(0xac)+_0x3d28bf[_0x5daf7d(0xc4)]+'\x0a*•\x20Upload\x20:*\x20'+_0x3d28bf[_0x5daf7d(0x111)]+_0x5daf7d(0x129)+q;sendFileFromUrl(from,_0x3d28bf[_0x5daf7d(0xc0)],_0x21a5f2,mek),sendFileFromUrl(from,_0x3d28bf[_0x5daf7d(0x124)],'',mek);});}break;}function _0x305c(){const _0x3e8780=['1132KeWjMH','\x0a*•\x20Dislikes\x20:*\x20','Klik\x20Button\x20Untuk\x20Verify','\x20link\x20Facebook','t.me','Contoh:\x20','video_info','ytmp3*\x20_Url\x20YouTube_','description','Link\x20tidak\x20valid!','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64;\x20rv:68.0)\x20Gecko/20100101\x20Firefox/68.0','wait','quality','extended_entities','noregis','formats','POST','youtu','13535KsQTKc','text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Example\x20:\x20','jawaban','video/mp4','https://api.twitter.com/1.1/guest/activate.json','\x0a*•\x20Size\x20:*\x20','image/webp','globalObjects','tweets','dislike','data','Masih\x20ada\x20permainan\x20yang\x20sedang\x20berlangsung','video','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64;\x20rv:45.0)\x20Gecko/20100101\x20Firefox/45.0','\x0a*•\x20Channel\x20:*\x20','likes','soundcloud','7nqcKkB','*•\x20Title\x20:*\x20','media_url_https','join','ytmp3','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/79.0.3945.88\x20Safari/537.36','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/92.0.4515.107\x20Safari/537.36','273264ahOMwm','stringify','test','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/69.0.3497.100\x20Safari/537.36','Daftar','full_text','media','704812pNeLrk','variants','div[class=\x22input-group\x20col-lg-9\x22]','thumb','\x0a*•\x20Upload\x20:*\x20','input','emoji','channel','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/85.0.4183.121\x20Safari/537.36','*•\x20Quality\x20:*\x20','Not\x20a\x20Twitter\x20URL','container','Mozilla/5.0\x20(X11;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/69.0.3497.92\x20Safari/537.36','4133140jKmHDB','mimeType','microformat','each','group','load','audio/mp4','length','https://downvideo.net/download.php','videoDetails','facebook.com','*•\x20Size\x20:*\x20','emojinya?','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/52.0.2743.116\x20Safari/537.36\x20Edge/15.15063','guest_token','Kirim\x20perintah\x20*','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.93\x20Safari/537.36','extension','format','*•\x20Size\x20HD:*\x20','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_4)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/36.0.1985.125\x20Safari/537.36','sendMessage','getInfo','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_10_5)\x20AppleWebKit/603.3.8\x20(KHTML,\x20like\x20Gecko)\x20Version/10.1.2\x20Safari/603.3.8','https://tinyurl.com/api-create.php?url=','map','Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:47.0)\x20Gecko/20100101\x20Firefox/47.0','size','get','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_11_6)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/11.1.2\x20Safari/605.1.15','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_5)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/65.0.3325.181\x20Safari/537.36','hasOwnProperty','formattedSize','*----「\x20SOUNDCLOUD\x20DOWNLOAD\x20」----*\x0a\x0a','player_response','title','Bukan\x20link\x20telegram\x20stiker','audio/webm;\x20codecs=\x22opus\x22','4732230vuFXbB','facebookdl','*Mohon\x20tunggu\x20sebentar,\x20sedang\x20proses\x20pengiriman...*','viewCount','fbdl','then','\x0a\x0aTimeout\x20:\x20120.00\x20seconds','1089956pWGnAt','value','*----「\x20YOUTUBE\x20AUDIO\x20」----*\x0a\x0a*•\x20Title\x20:*\x20','status','thumbnails','post','*Jawaban\x20:*','push','\x0a*•\x20Likes\x20:*\x20','Bearer\x20AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA','Facebook','filter','tstiker','images','playerMicroformatRenderer','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_10_5)\x20AppleWebKit/601.2.7\x20(KHTML,\x20like\x20Gecko)\x20Version/9.0.1\x20Safari/601.2.7','url','\x0a*•\x20Views\x20:*\x20','Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:88.0)\x20Gecko/20100101\x20Firefox/88.0','toLowerCase','log','dislikes','catch','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/88.0.4324.104\x20Safari/537.36','*•\x20Url\x20:*\x20','3ImSjui','uploadDate','Itu\x20bukan\x20link\x20SoundCloud','https://api.twitter.com/2/timeline/conversation/%s.json?tweet_mode=extended','type','exec','./database/game/tebakgambar.json','SoundCloud','duration','includes','semoji','63KggNRC','thumbnail','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_5)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/67.0.3396.87\x20Safari/537.36','Telesticker','writeFileSync','find','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_10;\x20rv:33.0)\x20Gecko/20100101\x20Firefox/33.0','split','div[class=\x22col-md-10\x22]','result','Mozilla/5.0\x20(X11;\x20Datanyze;\x20Linux\x20x86_64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/65.0.3325.181\x20Safari/537.36','href','ownerChannelName','medias','\x0a*•\x20Url\x20:*\x20','replace','Mozilla/5.0\x20(X11;\x20Ubuntu;\x20Linux\x20x86_64;\x20rv:57.0)\x20Gecko/20100101\x20Firefox/57.0','id,en-US;q=0.9,en;q=0.8,es;q=0.7,ms;q=0.6','\x0a*•\x20Quality\x20:*\x20','Waktu\x20permainan\x20habis','application/x-www-form-urlencoded','ytmp4','\x20link\x20SoundCloud','tebakgambar','audio','m.soundcloud.com','photo','*•\x20Duration\x20:*\x20','.daftar','6797680fpFMMH','attr','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_9_3)\x20AppleWebKit/537.75.14\x20(KHTML,\x20like\x20Gecko)\x20Version/7.0.3\x20Safari/E7FBAF','facebook','Itu\x20bukan\x20link\x20Facebook','views','Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010.11;\x20rv:47.0)\x20Gecko/20100101\x20Firefox/47.0'];_0x305c=function(){return _0x3e8780;};return _0x305c();}
		} catch (e) {
			console.log('Emror : %s', color(e, 'white'))
		}
	})
}
starts() 