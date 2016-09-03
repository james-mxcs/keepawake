
const fetch = require('node-fetch')
const extend = require('deep-extend')

const awake = (keepaliveUrl, options, callback) => {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  let { wakeUpTime, sleepTime, keepaliveInterval } = extend({
    wakeUpTime: '06:00', sleepTime: '00:00', keepaliveInterval: 5
  }, options)

  wakeUpTime = wakeUpTime.split(':').map(i => parseInt(i, 10))
  sleepTime = sleepTime.split(':').map(i => parseInt(i, 10))

  const wakeUpOffset = (60 * wakeUpTime[0] + wakeUpTime[1]) % (60 * 24)
  const awakeMinutes = (60 * (sleepTime[0] + 24) + sleepTime[1] - wakeUpOffset) % (60 * 24)

  setInterval(() => {
    const now = new Date()
    const elapsedMinutes = (60 * (now.getHours() + 24) + now.getMinutes() - wakeUpOffset) % (60 * 24)

    if (elapsedMinutes < awakeMinutes) {
      fetch(keepaliveUrl).then(res => callback(`${keepaliveUrl} ${res.ok}`))
    }
  }, keepaliveInterval * 60000)
}

module.exports = awake
