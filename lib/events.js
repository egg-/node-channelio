'use strict'

module.exports = class {
  constructor (client) {
    this.client = client
  }

  /**
   * list events
   * @param {string} userId ID of User
   * @param {object} [params]
   * @param {function} cb
   * @returns {object}
   * {
  "prev": "string",
  "next": "string",
  "events": [
    {
      "userId": "string",
      "id": "string",
      "channelId": "string",
      "name": "string",
      "property": {
        "additionalProp1": {},
        "additionalProp2": {},
        "additionalProp3": {}
      },
      "createdAt": 1605500047251,
      "expireAt": 1605500047251,
      "version": 0
    }
  ]
}
   */
  get (userId, params, cb) {
    this.client.get(`/v4/users/${userId}/events`, params, cb)
  }

  /**
   * create an event
   * @param {string} userId ID of User
   * @param {string} name event name
   * @param {object} property
   * @param {function} cb
   * @returns {object}
   * {
  "event": {
    "userId": "string",
    "id": "string",
    "channelId": "string",
    "name": "string",
    "property": {
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    },
    "createdAt": 1605500047251,
    "expireAt": 1605500047251,
    "version": 0
  }
}
   */
  create (userId, name, property, cb) {
    this.client.post(
      `/v4/users/${userId}/events`,
      {
        name: name,
        property: property || {}
      },
      cb
    )
  }

  /**
   * delete an event
   * @param {string} userId
   * @param {string} eventId
   * @param {function} cb
   */
  delete (userId, eventId, cb) {
    this.client.delete(`/v4/users/${userId}/events/${eventId}`, cb)
  }
}
