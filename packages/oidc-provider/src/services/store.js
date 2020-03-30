const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { promisify } = require('util');

const promisifyRedisClient = client => {
  client.getAsync = promisify(client.get);
};

const connectStore = storeConnectUrl => {
  const client = redis.createClient({ url: storeConnectUrl });
  const subscriber = redis.createClient({ url: storeConnectUrl });
  const publisher = redis.createClient({ url: storeConnectUrl });

  // redis по дефолту не поддерживает промисы
  promisifyRedisClient(client);

  const store = new RedisStore({ client });

  return { client, subscriber, publisher, store };
};

module.exports = { connectStore };