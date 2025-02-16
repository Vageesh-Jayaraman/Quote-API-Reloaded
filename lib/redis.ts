const { createClient } = require('redis');
const client = createClient({
    url: process.env.REDIS_URL
  });

client.on('error', (err) => console.error('Redis Client Error', err));
client.on('connect', () => console.log('✅ Redis Connected Successfully'));

if (!client.isOpen) {
    client.connect().catch(console.error);
}


export default client;
