console.log('Halo Admin.')
console.log('Jika Error Sewa/Beli SC Bot Di SnappyXD')
console.log('Jika QR Tidak Muncul Ketik :')
console.log('[cd settings && rm -rf session.json && cd && cd SnapBotzz.V.0.01 && npm start]')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')


//unchace
nocache('./command/case.js', module => console.log(chalk.black(chalk.bgGreen('| SnapBotzz |')), color(`${module} Updated!`)))
nocache('./SnappyXD.js', modul => console.log(chalk.black(chalk.bgRed('| UpBaileys |')), color(`${modul} Updated!`)))
//gatan
//cfonts
const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}

const CFonts  = require('cfonts')
CFonts.say('SnapBotzz', {
  font: 'chrome',
  align: 'center',
  gradient: ['green', 'white']
})
CFonts.say(`SnapBotzz By SnappyXD`, {
  font: 'console',
  align: 'center',
  gradient: ['green', 'white']
})
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
async function start(file) {
  let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['green', 'white']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
					
  .on('message', data => {
    console.log('| SnapBotzz |', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
start('./command/case.js')