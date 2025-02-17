import { createClient, RedisClientType } from "redis";

const client: RedisClientType = createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => console.error("❌ Redis Client Error:", err));
client.on("connect", () => console.log("✅ Redis Connected Successfully"));

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
  }
}
connectRedis().catch(console.error);

export default client;
