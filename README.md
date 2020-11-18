# node-channelio

[![version](https://img.shields.io/npm/v/node-channelio.svg)](https://www.npmjs.com/package/node-channelio) [![download](https://img.shields.io/npm/dm/node-channelio.svg)](https://www.npmjs.com/package/node-channelio)
[![status status](https://travis-ci.com/egg-/node-channelio.svg?branch=master)](https://travis-ci.com/egg-/node-channelio)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Node.js module for using the Channel API (https://developers.channel.io/docs/what-is-open-api)


## Usage

### Require channelio

```javascript
const ChannelIO = require('node-channelio')
const client = new ChannelIO('accessKey', 'accessSecret')
```

### Users

```javascript
client.users.get('user_id', (err, data) => {
  // ...
  const userId = data.user.id
  // ...
}

client.users.update('user_id', { profile: profile } (err, data) => {
  // ...
}
```

### Events

```javascript
client.users.events.create(userId, 'Purchase', {
  name: 'Product Name',
  // ...
}, (err, data) => {
  // ...
  const eventId = data.event.id
})

client.users.events.get(userId, {
  limit: 10,
  sortOrder: 'desc'
}, (err, data) => {
// ...
  const events = data.events
})

client.users.events.delete(userId, eventId, (err) => {
// ...
})

```

## Licence

MIT