const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/roadtripdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const userSeed = [
  {
    _id: '1',
    username: 'User1',
    email: 'user1@email.com',
    password: 'test1234',
    trips: [],
    date: new Date(Date.now())
  },
  {
    _id: '2',
    username: 'User2',
    email: 'user2@email.com',
    password: 'test1234',
    trips: [],
    date: new Date(Date.now())
  },
  {
    _id: '3',
    username: 'User3',
    email: 'user3@email.com',
    password: 'test1234',
    trips: [],
    date: new Date(Date.now())
  },
  {
    _id: '4',
    username: 'User4',
    email: 'user4@email.com',
    password: 'test1234',
    trips: [],
    date: new Date(Date.now())
  },
  {
    _id: '5',
    username: 'User5',
    email: 'user5@email.com',
    password: 'test1234',
    trips: [],
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
