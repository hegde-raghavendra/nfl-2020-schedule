const {MongoClient} = require('mongodb');

let database = null;

const uri = process.env.MONGODB_URL;

async function startDatabase() {
  const client = new MongoClient(uri,{ useUnifiedTopology: true });
  await client.connect();

  database = client.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
};