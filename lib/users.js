'use strict'

const Events = require('./events')

module.exports = class {
  constructor (client) {
    this.client = client
    this.events = new Events(client)
  }

  /**
   * get a user
   * @param {string} userId user id or @ + member id
   * @param {object} [params]
   * @param {function} cb
   * @returns {object}
   * {
  "user": {
    "id": "string",
    "channelId": "string",
    "memberId": "string",
    "veilId": "string",
    "unifiedId": "string",
    "name": "string",
    "profile": {
      "name": "string",
      "empty": true,
      "email": "string",
      "avatarUrl": "string",
      "mobileNumber": "string",
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    },
    "profileOnce": {
      "name": "string",
      "empty": true,
      "email": "string",
      "avatarUrl": "string",
      "mobileNumber": "string",
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    },
    "tags": [
      "string"
    ],
    "alert": 0,
    "unread": 0,
    "popUpChatId": "string",
    "blocked": true,
    "unsubscribed": true,
    "hasChat": true,
    "hasPushToken": true,
    "language": "string",
    "country": "string",
    "city": "string",
    "latitude": 0,
    "longitude": 0,
    "web": {
      "device": "string",
      "os": "string",
      "osName": "string",
      "browser": "string",
      "browserName": "string",
      "sessionsCount": 0,
      "lastSeenAt": 1605500050286
    },
    "mobile": {
      "device": "string",
      "os": "string",
      "osName": "string",
      "appName": "string",
      "appVersion": "string",
      "sessionsCount": 0,
      "lastSeenAt": 1605500050286
    },
    "sessionsCount": 0,
    "lastSeenAt": 1605500050288,
    "createdAt": 1605500050288,
    "updatedAt": 1605500050288,
    "version": 0,
    "member": true,
    "email": "string",
    "avatarUrl": "string",
    "mobileNumber": "string",
    "contact": true,
    "systemLanguage": "string"
  },
  "online": {
    "channelId": "string",
    "personType": "string",
    "personId": "string",
    "id": "string"
  }
}
   */
  get (userId, params, cb) {
    this.client.get(`/users/${userId}`, params, cb)
  }

  /**
   * update user information
   * @param {string} userId
   * @param {object} params
   * @param {object} [params.profile]
   * @param {object} [params.profileOnce]
   * @param {array} [params.tags]
   * @param {boolean} [params.unsubscribed]
   * @param {function} cb
   * @returns {object}
   * {
  "user": {
    "id": "string",
    "channelId": "string",
    "memberId": "string",
    "veilId": "string",
    "unifiedId": "string",
    "name": "string",
    "profile": {
      "name": "string",
      "empty": true,
      "email": "string",
      "avatarUrl": "string",
      "mobileNumber": "string",
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    },
    "profileOnce": {
      "name": "string",
      "empty": true,
      "email": "string",
      "avatarUrl": "string",
      "mobileNumber": "string",
      "additionalProp1": {},
      "additionalProp2": {},
      "additionalProp3": {}
    },
    "tags": [
      "string"
    ],
    "alert": 0,
    "unread": 0,
    "popUpChatId": "string",
    "blocked": true,
    "unsubscribed": true,
    "hasChat": true,
    "hasPushToken": true,
    "language": "string",
    "country": "string",
    "city": "string",
    "latitude": 0,
    "longitude": 0,
    "web": {
      "device": "string",
      "os": "string",
      "osName": "string",
      "browser": "string",
      "browserName": "string",
      "sessionsCount": 0,
      "lastSeenAt": 1605500050286
    },
    "mobile": {
      "device": "string",
      "os": "string",
      "osName": "string",
      "appName": "string",
      "appVersion": "string",
      "sessionsCount": 0,
      "lastSeenAt": 1605500050286
    },
    "sessionsCount": 0,
    "lastSeenAt": 1605500050288,
    "createdAt": 1605500050288,
    "updatedAt": 1605500050288,
    "version": 0,
    "member": true,
    "email": "string",
    "avatarUrl": "string",
    "mobileNumber": "string",
    "contact": true,
    "systemLanguage": "string"
  },
  "online": {
    "channelId": "string",
    "personType": "string",
    "personId": "string",
    "id": "string"
  }
}
   */
  update (userId, params, cb) {
    this.client.put(`/users/${userId}`, params, cb)
  }

  /**
   * delete user information
   * @param {string} userId
   * @param {function} cb
   */
  delete (userId, cb) {
    this.client.delete(`/users/${userId}`, cb)
  }
}
