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

describe('users api - update', () => {
  it('should save without error', (done) => {
    const profile = {
      testDate: Math.floor((new Date()).getTime() / 1000)
    }
    client.users.update(config.userId, { profile: profile }, (err, data) => {
      assert.strictEqual(err, null)
      assert.strictEqual(data.user.profile.testDate, profile.testDate)

      done()
    })
  })
})

describe('events api - get', () => {
  it('same user id', (done) => {
    client.users.events.get(config.userId, { limit: 10 }, (err, data) => {
      assert.strictEqual(err, null)
      assert.strictEqual(data.events[0].userId, config.userId)

      done()
    })
  })
})

describe('events api - create', () => {
  it('same event name', (done) => {
    client.users.events.create(config.userId, 'ApiTest', { version: '1.0.0' }, (err, data) => {
      assert.strictEqual(err, null)
      assert.strictEqual(data.event.name, 'ApiTest')

      done()
    })
  })
})

describe('events api - delete', () => {
  const events = []

  before((done) => {
    client.users.events.get(config.userId, { limit: 10 }, (err, data) => {
      assert.strictEqual(err, null)

      data.events.forEach((event) => {
        if (event.name === 'ApiTest') {
          events.push(event)
        }
      })

      done()
    })
  })

  it('should delete without error', (done) => {
    client.users.events.delete(config.userId, events[0].id, (err) => {
      assert.strictEqual(err, null)

      done()
    })
  })
})
