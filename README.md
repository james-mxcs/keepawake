# keepawake

Keep awake multiple Heroku and Openshift free apps

```js
const awake = require('keepawake')

awake('https://www.google.com', {
  sleepTime: '00:00',   // '00:00' default
  wakeUpTime: '06:00',  // '06:00' default
  keepaliveInterval: 5  // 5 minutes default
}, console.log)

awake('http://example.herokuapp.com/', console.log)
awake('http://awasome.herokuapp.com/', console.log)
```

> Hack: make main app in Openshift and keep awake multiple Heroku apps!! :sparkles:

## Installation

```
npm i keepawake
```

## Testing

```
npm i
npm test
```

## All Credits

* [hubot-heroku-keepalive](https://github.com/hubot-scripts/hubot-heroku-keepalive)
