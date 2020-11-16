/* globals it describe before */

'use strict'

const assert = require('assert')

const ChannelIO = require('../lib')
const config = require('../config.json')

const client = new ChannelIO(config.accessKey, config.acesssSecret)

describe('users api - get', () => {
  it('same user id', (done) => {
    client.users.get(config.userId, (err, data) => {
      assert.strictEqual(err, null)
      assert.strictEqual(data.user.id, config.userId)

      done()
    })
  })
})

describe('events api - get', () => {
  it('same user id', (done) => {
    client.users.events.get(config.userId, { limit: 10 }, (err, data) => {
      done()

      assert.strictEqual(err, null)
      assert.strictEqual(data.events[0].userId, config.userId)
    })
  })
})

describe('events api - create', () => {
  it('same event name', (done) => {
    client.users.events.create(config.userId, 'ApiTest', { version: '1.0.0' }, (err, data) => {
      done()

      assert.strictEqual(err, null)
      assert.strictEqual(data.event.name, 'ApiTest')
    })
  })
})

describe('events api - delete', () => {
  const events = []

  before((done) => {
    client.users.events.get(config.userId, { limit: 10 }, (err, data) => {
      done()

      assert.strictEqual(err, null)

      data.events.forEach((event) => {
        if (event.name === 'ApiTest') {
          events.push(event)
        }
      })
    })
  })

  it('should delete without error', (done) => {
    client.users.events.delete(config.userId, events[0].id, (err) => {
      done()

      assert.strictEqual(err, null)
    })
  })
})
