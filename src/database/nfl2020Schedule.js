const {getDatabase} = require('./mongo');
const {ObjectID} = require('mongodb');


const collectionName = 'nfl-2020-schedule';

async function insertSchedule(schedule) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(schedule);
  return insertedId;
}

async function insertSchedules(schedules) {
  const database = await getDatabase();
  const insertedIds = await database.collection(collectionName).insertMany(schedules);
  return insertedIds;
}

async function getSchedules() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function getSchedulesByWeek(week) {
  const database = await getDatabase();
  var obj = {Week:parseInt(week)};
  return await database.collection(collectionName).find(obj).toArray();
}

async function deleteSchedule(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
      _id: new ObjectID(id),
    });
  }
  
  async function updateSchedule(id, schedule) {
    const database = await getDatabase();
    delete schedule._id;
    await database.collection(collectionName).update(
      { _id: new ObjectID(id), },
      {
        $set: {
          ...schedule,
        },
      },
    );
  }
  

module.exports = {
  insertSchedule,
  getSchedules,
  deleteSchedule,
  updateSchedule,
  getSchedulesByWeek,
  insertSchedules,
};