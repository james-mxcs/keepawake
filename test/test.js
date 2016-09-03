
import test from 'ava'
import awake from '../src/index.js'

test('module', t => {
  t.is(typeof awake, 'function')
})

test.cb('awake', t => {
  const url = 'http://example.herokuapp.com/'
  awake(url, { keepaliveInterval: 0.01 }, isAlive => {
    t.is(isAlive, `${url} true`)
    t.end()
  })
})
