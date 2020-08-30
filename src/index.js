// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { insertSchedule, getSchedules, deleteSchedule, updateSchedule, getSchedulesByWeek, insertSchedules } =
  require('./database/nfl2020Schedule');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.get('/schedules', async (req, res) => {
  res.send(await getSchedules());
});

app.get('/schedules/week/:week', async (req, res) => {
  res.send(await getSchedulesByWeek(req.params.week));
});

app.post('/schedules', async (req, res) => {
  const newSchedule = req.body;
  await insertSchedule(newSchedule);
  res.send({ message: 'New schedule inserted.' });
});

app.post('/schedules/insertMany', async (req, res) => {
  const newSchedules = req.body;
  await insertSchedules(newSchedules);
  res.send({ message: 'New schedules inserted.' });
});

// endpoint to delete an ad
app.delete('/schedules/:id', async (req, res) => {
  await deleteSchedule(req.params.id);
  res.send({ message: 'Schedule removed.' });
});

// endpoint to update an ad
app.put('/schedules/:id', async (req, res) => {
  const updatedSchedule = req.body;
  await updateSchedule(req.params.id, updatedSchedule);
  res.send({ message: 'Schedule updated.' });
});

// start the server
app.listen(process.env.PORT, async () => {
  console.log(`listening on port ${process.env.PORT}`);
});

