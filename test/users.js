/* globals it describe before */

'use strict'

const assert = require('assert')

const ChannelIO = require('../lib')
const config = require('../config.json')

const client = new ChannelIO(config.accessKey, config.acesssSecret)

const randomMemberId = 'test-user-' + (Math.floor(Math.random() * 9999) + 1000)
const user = {
  id: null
}

describe('users api - upsert', () => {
  it('should save without error', done => {
    const profile = {
      testDate: Math.floor(new Date().getTime() / 1000)
    }
    client.users.update(
      `@${randomMemberId}`,
      { profile: profile },
      (err, data) => {
        assert.strictEqual(err, null)
        assert.strictEqual(data.user.profile.testDate, profile.testDate)

        user.id = data.user.id

        done()
      }
    )
  })
})

describe('users api - get', () => {
  it('same user id', done => {
    client.users.get(user.id, (err, data) => {
      assert.strictEqual(err, null)
      assert.strictEqual(data.user.memberId, randomMemberId)

      done()
    })
  })
})

describe('events api - create', () => {
  it('same event name', done => {
    client.users.events.create(
      user.id,
      'ApiTest',
      { version: '1.0.0' },
      (err, data) => {
        assert.strictEqual(err, null)
        assert.strictEqual(data.event.name, 'ApiTest')

        done()
      }
    )
  })
})

describe('events api - get', () => {
  it('same user id', done => {
    client.users.events.get(user.id, { limit: 10 }, (err, data) => {
      assert.strictEqual(err, null)
      assert.strictEqual(data.events[0].userId, user.id)

      done()
    })
  })
})

describe('events api - delete', () => {
  const events = []

  before(done => {
    client.users.events.get(user.id, { limit: 10 }, (err, data) => {
      assert.strictEqual(err, null)

      data.events.forEach(event => {
        if (event.name === 'ApiTest') {
          events.push(event)
        }
      })

      done()
    })
  })

  it('should delete without error', done => {
    client.users.events.delete(user.id, events[0].id, err => {
      assert.strictEqual(err, null)

      done()
    })
  })
})

describe('users api - delete', () => {
  it('should delete without error', done => {
    client.users.delete(user.id, err => {
      assert.strictEqual(err, null)

      done()
    })
  })
})
