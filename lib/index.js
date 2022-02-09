'use strict'

const axios = require('axios')
const Users = require('./users')

module.exports = class {
  constructor (accessKey, accessSecret) {
    this.client = axios.create({
      baseURL: 'https://api.channel.io/open/v4'
    })
    this.client.defaults.headers.common['X-Access-Key'] = accessKey
    this.client.defaults.headers.common['X-Access-Secret'] = accessSecret

    this.users = new Users(this)
  }

  /**
   * request by GET method
   * @param {string} endpoint
   * @param {object} [params]
   * @param {function} cb
   */
  get (endpoint, params, cb) {
    if (typeof params === 'function') {
      cb = params
      params = {}
    }
    this.client
      .get(endpoint, {
        params: params
      })
      .then(response => {
        cb(null, response.data)
      })
      .catch(err => {
        cb(err.response.data)
      })
  }

  /**
   * request by POST
   * @param {string} endpoint
   * @param {object} data
   * @param {function} cb
   */
  post (endpoint, data, cb) {
    this.client
      .post(endpoint, data)
      .then(response => {
        cb(null, response.data)
      })
      .catch(err => {
        cb(err.response.data)
      })
  }

  /**
   * request by DELETE
   * @param {string} endpoint
   * @param {function} cb
   */
  delete (endpoint, cb) {
    this.client
      .delete(endpoint)
      .then(() => {
        cb(null)
      })
      .catch(err => {
        cb(err.response.data)
      })
  }

  /**
   * request by PUT
   * @param {string} endpoint
   * @param {object} data
   * @param {function} cb
   */
  put (endpoint, data, cb) {
    this.client
      .put(endpoint, data)
      .then(response => {
        cb(null, response.data)
      })
      .catch(err => {
        cb(err.response.data)
      })
  }
}
